import Listwithanchor from "./Listwithanchor"

const categoryList =[
    {
        index:0,
        name:'Travel',
        link:'https://en.wikipedia.org/wiki/Travel'
},{
    index:1,
    name:'Food',
    link:'https://en.wikipedia.org/wiki/food'
},{
    index:2,
    name:'Art',
    link:'https://en.wikipedia.org/wiki/art'
},{
    index:3,
    name:'Sport',
    link:'https://en.wikipedia.org/wiki/sport'
},{
    index:4,
    name:'Culture',
    link:'https://en.wikipedia.org/wiki/culture'
}
]
const BlogSection =()=>{
    const catList = categoryList.map(list=><Listwithanchor link={list.link} name={list.name}/>)
    return(
        <>
        <div className="tm-blog-img-container">
                
                </div>
        
                <section className="tm-section">
                    <div className="container-fluid">
                        <div className="row">
        
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-9 col-xl-9">
                                <div className="tm-blog-post">
                                    <h3 className="tm-gold-text">Pellentesque fermentum mauris</h3>
                                    <p>Vivamus accumsan blandit ligula. Sed lobortis efficitur sapien</p>
                                    <img src="img/tm-img-1010x336-1.jpg" alt="Image" className="img-fluid tm-img-post"/>
                                    
                                    <p>You can help templatemo by telling your friends about our HTML CSS templates. Praesent velit ante, congue ac dignissim in, vehicula sit amet urna. Fusce in dapibus quam, eget finibus velit. Nullam erat odio, vulputate id est ut, consequat rutrum justo. Vivamus vel leo vel nunc tincidunt mattis. Sed neque diam, semper suscipit dictum a, sodales ac metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        
                                    <p>Morbi vel pharetra massa, non iaculis tortor. Nulla porttitor tincidunt felis et feugiat. Vivamus fermentum ligula justo, sit amet blandit nisl volutpat id. Fusce sagittis ultricies felis, non luctus mauris lacinia quis. Ut fringilla lacus ac tempor ullamcorper. Mauris iaculis placerat ex et mattis.</p>
        
                                    <p>Quisque vel sem eu turpis ullamcorper euismod. Praesent quis nisi ac augue luctus viverra. Sed et dui nisi. Fusce vitae dapibus justo. Pellentesque accumsan est ac posuere imperdiet. Curabitur eros mi, lacinia at euismod quis, dapibus vel ligula. Ut sodales erat vitae nunc tempor mollis. Donec tempor lobortis tortor, in feugiat massa facilisis sed. Ut dignissim viverra pretium. In eu justo maximus turpis feugiat finibus scelerisque nec eros. Cras nec lectus tempor nibh vestibulum eleifend et ac elit.</p>
        
                                    <p>Sed vitae luctus libero. Nam sem neque, finibus id sem pharetra, cursus porttitor ligula. Praesent aliquam fermentum dui, vitae venenatis libero vulputate ac. Fusce bibendum scelerisque magna eget iaculis. Phasellus non arcu eu sem convallis semper. Duis vulputate dignissim rhoncus.</p>
                                </div>
                                
                                <div className="row tm-margin-t-big">
                                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
        
                                        <div className="tm-content-box">
                                            <img src="img/tm-img-310x180-1.jpg" alt="Image" className="tm-margin-b-30 img-fluid"/>
                                            <h4 className="tm-margin-b-20 tm-gold-text">Lorem ipsum dolor #1</h4>
                                            <p className="tm-margin-b-20">Aenean cursus tellus mauris, quis
                                            consequat mauris dapibus id. Donec
                                            scelerisque porttitor pharetra</p>
                                            <a href="#" className="tm-btn text-uppercase">Detail</a>    
                                        </div>  
        
                                    </div>
        
                                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
        
                                        <div className="tm-content-box">
                                            <img src="img/tm-img-310x180-2.jpg" alt="Image" className="tm-margin-b-30 img-fluid"/>
                                            <h4 className="tm-margin-b-20 tm-gold-text">Lorem ipsum dolor #2</h4>
                                            <p className="tm-margin-b-20">Aenean cursus tellus mauris, quis
                                            consequat mauris dapibus id. Donec
                                            scelerisque porttitor pharetra</p>
                                            <a href="#" className="tm-btn text-uppercase">Read More</a>    
                                        </div>  
        
                                    </div>
        
                                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
        
                                        <div className="tm-content-box">
                                            <img src="img/tm-img-310x180-3.jpg" alt="Image" className="tm-margin-b-30 img-fluid"/>
                                            <h4 className="tm-margin-b-20 tm-gold-text">Lorem ipsum dolor #3</h4>
                                            <p className="tm-margin-b-20">Aenean cursus tellus mauris, quis
                                            consequat mauris dapibus id. Donec
                                            scelerisque porttitor pharetra</p>
                                            <a href="#" className="tm-btn text-uppercase">Detail</a>    
                                        </div>  
        
                                    </div>    
                                </div>
                                
                            </div>
        
                            <aside className="col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 tm-aside-r">
        
                                <div className="tm-aside-container">
                                    <h3 className="tm-gold-text tm-title">
                                        Categories
                                    </h3>
                                    <nav>
                                        <ul className="nav">
                                            {catList}
                                        </ul>
                                    </nav>
                                    <hr className="tm-margin-t-small"/>   
                                    <h3 className="tm-gold-text tm-title tm-margin-t-small">
                                        Useful Links
                                    </h3>
                                    <nav>   
                                        <ul className="nav">
                                            <li><a href="#" className="tm-text-link">Suspendisse sed dui nulla</a></li>
                                            <li><a href="#" className="tm-text-link">Lorem ipsum dolor sit</a></li>
                                            <li><a href="#" className="tm-text-link">Duiss nec purus et eros</a></li>
                                            <li><a href="#" className="tm-text-link">Etiam pulvinar et ligula sed</a></li>
                                            <li><a href="#" className="tm-text-link">Proin egestas eu felis et iaculis</a></li>
                                        </ul>
                                    </nav>   
                                    <hr className="tm-margin-t-small"/> 
        
                                    <div className="tm-content-box tm-margin-t-small">
                                        <a href="#" className="tm-text-link"><h4 className="tm-margin-b-20 tm-thin-font">Duis sit amet tristique #1</h4></a>
                                        <p className="tm-margin-b-30">Vestibulum arcu erat, lobortis sit amet tellus ut, semper tristique nibh. Nunc in molestie elit.</p>
                                    </div>
                                    <hr className="tm-margin-t-small"/>
                                    <div className="tm-content-box tm-margin-t-small">
                                        <a href="#" className="tm-text-link"><h4 className="tm-margin-b-20 tm-thin-font">Duis sit amet tristique #2</h4></a>
                                        <p>Vestibulum arcu erat, lobortis sit amet tellus ut, semper tristique nibh. Nunc in molestie elit.</p>
                                    </div>  
                                    <hr className="tm-margin-t-small"/>
                                    <div className="tm-content-box tm-margin-t-small">
                                        <a href="#" className="tm-text-link"><h4 className="tm-margin-b-20 tm-thin-font">Duis sit amet tristique #3</h4></a>
                                        <p>Vestibulum arcu erat, lobortis sit amet tellus ut, semper tristique nibh. Nunc in molestie elit.</p>
                                    </div>      
                                </div>
                                
                                
                            </aside>
        
                        </div>
                        
                    </div>
                </section>
            </>
    );
}

export default BlogSection;