const Listwithanchor = (props)=>{
    console.log(props)
    return(
        <li><a target="_blank" href={props.link} className="tm-text-link">{props.name}</a></li>
    );
}
export default Listwithanchor;