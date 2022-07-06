import MainCard from './MainCard'
import {useState, useEffect} from 'react'
import FullView from './FullView';

const Mainsection= () =>{

    const [isFullview, setFullVIew]= useState(false);
    const [currentId, setCurrentId] = useState(null);
    const [dataJson, setDataJson] = useState([]);

    useEffect(()=>{
        const fetchFn = async ()=>{
            let data = await fetch("http://localhost:9000/datalist");
            data = await data.json()
            data?setDataJson(data):console.log(data,'error');
        }
        fetchFn();
    },[])

    const fullViewHandler = (id,flag)=>{
        flag?setCurrentId(id):setCurrentId(null);
        setFullVIew(!isFullview);
    }
    let fullviewPage = '';
    let cardListing = '';

    if(currentId!==null){
        let dataOfId = dataJson.filter((data)=>{return data.id===currentId})
        if(dataOfId.length !== 0){
            fullviewPage = <FullView title = {dataOfId[0].title}
                img={dataOfId[0].img}
                desc={dataOfId[0].desc}
                btnfn={()=>{fullViewHandler(null,false)}}
            />
        }
    }else{
        cardListing = dataJson.map(data=><MainCard
            title= {data.title}
            img= {data.img}
            desc = {data.desc}
            extbtn = {data.extbtn}
            btnFn ={()=>{fullViewHandler(data.id,true)}}
        />
    )
    }
    
    return(
        <section className="tm-section">
            <div className="container-fluid">
                {!isFullview?<div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-xs-center introCard">
                        <h2 className="tm-gold-text tm-title tm-margin-t-small">Introduction</h2>
                        <p className="tm-subtitle">Welcome to my blog where i share my experiences from my travels</p>
                    </div>
                </div>:''}
                <div className="row introCard tm-margin-t-small">
                    {cardListing.length!==0?cardListing:fullviewPage}
                </div>
            </div>
        </section>
    )
}
export default Mainsection;