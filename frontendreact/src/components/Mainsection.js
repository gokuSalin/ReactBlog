import MainCard from './MainCard'
import {useState, useEffect, useCallback} from 'react'
import FullView from './FullView';
import ImgContainer from './ImgContainer';

const Mainsection= () =>{

    const [isFullview, setFullVIew]= useState(false);
    const [currentId, setCurrentId] = useState(null);
    const [dataJson, setDataJson] = useState([]);
    const [dynotest, setDynamo] = useState(0);

    
    const fetchFn = useCallback(async ()=>{
        let data = await fetch("http://localhost:9000/datalist");
        data = await data.json()
        data?setDataJson(data):console.log(data,'error');


        let RandomLink = "http://localhost:9000/dynamo/"+(Math.random()*100).toFixed(0);
        let randomData = await fetch(RandomLink);
        randomData = await randomData.text();
        randomData?setDynamo(randomData):console.log(randomData,'error');
    },[])
    useEffect(()=>{
        fetchFn();
    },[fetchFn]);

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
        <>
        <ImgContainer/>
        <section className="tm-section">
            <div className="container-fluid">
                {!isFullview?<div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-xs-center introCard">
                        <h2 className="tm-gold-text tm-title tm-margin-t-small">Introduction</h2>
                        <p className="tm-subtitle">Welcome to my blog where i share my experiences from my travels</p>
                        <p className="tm-subtitle">Todays Lucky Number : {dynotest}</p>
                    </div>
                </div>:''}
                <div className="row introCard tm-margin-t-small">
                    {cardListing.length!==0?cardListing:fullviewPage}
                </div>
            </div>
        </section>
        </>
    )
}
export default Mainsection;