import MainCard from './MainCard'
import {useState} from 'react'
import FullView from './FullView';
const dataJson= [{
    id : 1,
    img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Altostratus_and_Cirrus_Ellison_Rd_Geebung_P1270310.jpg/360px-Altostratus_and_Cirrus_Ellison_Rd_Geebung_P1270310.jpg',
    title: 'Sky High',
    desc: `I bring fresh showers for the thirsting flowers,
    From the seas and the streams;
    I bear light shade for the leaves when laid
    In their noonday dreams.`,
    extbtn:'Read More'
},{
    id : 2,
    img : 'https://i.pinimg.com/236x/67/01/f2/6701f239d21349a50b224da221bce94e.jpg',
    title: 'Lonely tree',
    desc: `I bring fresh showers for the thirsting flowers,
    As she dances about the sun.
    I wield the flail of the lashing hail,
    And whiten the green plains under,
    And then again I dissolve it in rain,
    And laugh as I pass in thunder.`,
    extbtn:'Read More'
},{
    id : 3,
    img : 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?cs=srgb&dl=pexels-luis-dalvan-1770809.jpg&fm=jpg',
    title: 'Misty Forest',
    desc: `I bring fresh showers for the thirsting flowers,
    From the seas and the streams;
    I bear light shade for the leaves when laid
    In their noonday dreams.
    From my wings are shaken the dews that waken
    The sweet buds every one,
    When rocked to rest on their mother's breast,
    As she dances about the sun.
    I wield the flail of the lashing hail,
    And whiten the green plains under,
    And then again I dissolve it in rain,
    And laugh as I pass in thunder.`,
    extbtn:'Read More'
},{
    id : 4,
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhf9teTgHn4ih7qSkuJUJS-Q56_1m0cJ-6kK8D78l2sP9WWi3cSEYp5zlHkBjAJxkZa0M&usqp=CAU',
    title: 'squirrel Tales',
    desc: `Whisky, frisky,
    Hippity hop;
    Up he goes
    To the tree top!
    
    Whirly, twirly,
    Round and round,
    Down he scampers
    To the ground.
    
    Furly, curly
    What a tail!
    Tall as a feather
    Broad as a sail!
    
    Where's his supper?
    In the shell,
    Snappity, crackity,
    Out it fell.`,
    extbtn:'Read More'
}]

const Mainsection= () =>{

    const [isFullview, setFullVIew]= useState(false);
    const [currentId, setCurrentId] = useState(null);

    const fullViewHandler = (id,flag)=>{
        debugger;
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
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-xs-center">
                        <h2 className="tm-gold-text tm-title">Introduction</h2>
                        <p className="tm-subtitle">welcome to my blog where i share my experiences from my travels</p>
                    </div>
                </div>:''}
                <div className="row">
                    {cardListing.length!==0?cardListing:fullviewPage}
                </div>
            </div>
        </section>
    )
}
export default Mainsection;