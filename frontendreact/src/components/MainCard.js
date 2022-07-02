const MainCard =(props)=>{
    let description = props.desc;
    if(description.length > 75){
        description = description.slice(0,75)+"...";
    }
    return(
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 cardpadding">
            <div className="tm-content-box">
                <img src={props.img} alt="Image" className="tm-margin-b-20 img-fluid"/>
                <h4 className="tm-margin-b-20 tm-gold-text">{props.title}</h4>
                <p className="tm-margin-b-20">{description}</p>
                <a  onClick={props.btnFn} className="tm-btn text-uppercase">{props.extbtn}</a>    
            </div>  
        </div>

    );
}
export default MainCard;