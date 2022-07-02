const FullView = (props)=>{
    return(
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-xs-center">
            <div className="cardpadding"><button onClick={props.btnfn} className="gobackbtn">Go Back</button></div>
            <h1 className="tm-margin-b-20 tm-gold-text">{props.title}</h1>
            <img src={props.img} alt="Image" className="tm-margin-b-20 img-fluid centreimg"/>
            <p className="tm-margin-b-20">{props.desc}</p>
        </div>
    )
}
export default FullView;