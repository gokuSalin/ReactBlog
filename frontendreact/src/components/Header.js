import {useEffect, useState} from 'react';

const Header = ()=>{
    const [headerTitle, setHeaderTitle] = useState('');
    const callAPI = ()=>{
        fetch("http://localhost:9000/apitest").then(res=>res.text()).then(res=>setHeaderTitle(res)).catch(err=>err);
    }
    useEffect(()=>{callAPI()},[])
    let windowURl = window.location.href;
    let keywordUrl = windowURl.substring(windowURl.lastIndexOf('/')+1,windowURl.length)
    let [ishome,isblog,iscontact, isabout] =['nav-item', 'nav-item', 'nav-item', 'nav-item'];
    keywordUrl==='about'?isabout+=' active':keywordUrl==='contact'?iscontact+=' active':keywordUrl==='blog'?isblog+=' active':ishome+=' active';
    return(
        <div className="tm-header">
        <div className="container-fluid">
            <div className="tm-header-inner">
                <a href="/" className="navbar-brand tm-site-name">{headerTitle?headerTitle:'Personal Blog'}</a>
                
                <nav className="navbar tm-main-nav">

                    <button className="navbar-toggler hidden-md-up" type="button" data-toggle="collapse" data-target="#tmNavbar">
                        &#9776;
                    </button>
                    
                    <div className="collapse navbar-toggleable-sm" id="tmNavbar">
                        <ul className="nav navbar-nav">
                            <li className={ishome}>
                                <a href="/" className="nav-link">Home</a>
                            </li>
                            <li className={isabout}>
                                <a href="about" className="nav-link">About</a>
                            </li>
                            <li className={isblog}>
                                <a href="blog" className="nav-link">Blog</a>
                            </li>
                            <li className={iscontact}>
                                <a href="contact" className="nav-link">Contact</a>
                            </li>
                        </ul>                        
                    </div>
                    
                </nav>  

            </div>                                  
        </div>            
    </div>
    );
}
export default Header;