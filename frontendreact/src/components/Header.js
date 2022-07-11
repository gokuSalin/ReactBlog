import {useState} from 'react';

const Header = ()=>{
    const [headerTitle, setHeaderTitle] = useState('');
    const callAPI = ()=>{
        fetch("http://localhost:9000/apitest").then(res=>res.text()).then(res=>setHeaderTitle(res)).catch(err=>err);
    }
    setTimeout(()=>{
        callAPI();
    },8000);
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
                        <ul class="nav navbar-nav">
                            <li className="nav-item active">
                                <a href="/" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="about" className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="blog" className="nav-link">Blog</a>
                            </li>
                            <li className="nav-item">
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