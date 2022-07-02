import logoimg from '../assets/img/logo.png';
const Header = ()=>{
    return(
        <div className="tm-header">
        <div className="container-fluid">
            <div className="tm-header-inner">
                <a href="#" className="navbar-brand tm-site-name">Personal Blog</a>
                
                <nav className="navbar tm-main-nav">

                    <button className="navbar-toggler hidden-md-up" type="button" data-toggle="collapse" data-target="#tmNavbar">
                        &#9776;
                    </button>
                    
                    <div className="collapse navbar-toggleable-sm" id="tmNavbar">
                        <ul class="nav navbar-nav">
                            <li className="nav-item active">
                                <a href="index.html" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="about.html" className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="blog.html" className="nav-link">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a href="contact.html" className="nav-link">Contact</a>
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