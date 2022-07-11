import classes from './fullview.module.css'
const FullView = (props)=>{
    return(
        <>
            <div className="cardpadding "><button onClick={props.btnfn} className="gobackbtn">Go Back</button></div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-xs-center .introCard">
                <h1 className="tm-margin-b-20 tm-gold-text tm-margin-t-small">{props.title}</h1>
                <img src={props.img} alt="Image" className="tm-margin-b-20 img-fluid centreimg"/>
                <p   className={classes.pFull}>{props.desc}</p>
            </div>
        </>
    )
}
export default FullView;