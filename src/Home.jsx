import React from 'react'
import "./App.css"
import { BrowserRouter , Routes , Route , Link} from 'react-router-dom'


import hero from "./hero_1.jpg"
import woman2 from "./woman2.webp"
import children from "./children.jpg"
import men from "./men.jpg"
import cloth1 from "./cloth_1.jpg"
import shoe1 from "./shoe_1.jpg" 
import cloth2 from "./cloth_2.jpg"
import blog1 from "./blog_1.jpg" 


const Home = () => {
  return (

      <div>
            <section >
                  <div className='container-fluid'>
                        <div className=''>
                              <div className="  rlative">
                                    <div className="  im1">
                                            <img src={hero} />
                                    </div>
                  
                                    <div className="  absolute">
                                          <div className=' '>
                                          <h1>Finding your perfect shose</h1>
                                          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis earum dolores tempora quia laboriosam a. Similique accusantium nisi iure amet velit sapiente porro, excepturi fuga laudantium animi ea maiores hic?</p>
                                          </div>
                                          
                                          <br/>
                                          <div className=''>
                                                <Link   to="#"  className="link" >Shop Now </Link>
                                          </div>
                                    </div>

                               </div>
                        </div>
                  </div>
            </section>


            <article className="article">
                  <div className='container-fluid'>
                              <div className="row div-article ">

                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 article-left">
                                          <div className="icon-left">
                                                <i className="fa-solid fa-truck"></i>
                                          </div>
                                          <div className="hp-left">
                                                <h2>Free shopping</h2>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptate corrupti temporibus architecto. Quae eaque, esse temporibus eveniet incidunt ratione hic enim accusamus minima excepturi maiores error nostrum quisquam suscipit?</p>
                                          </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 article-middle">
                                          <div className="icon-middle">
                                                <i className="fa-solid fa-arrow-rotate-right"></i>
                                          </div>
                                          <div className="hp-middle">
                                                <h2>Free returns</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quo, dolorum minima sed modi veniam consequatur molestiae aliquam illum est ratione ipsam beatae dolor laudantium veritatis et optio assumenda fugiat.</p>
                                          </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 article-right">

                                          <div className="icon-right">
                                                <i className="fa-solid fa-circle-question"></i>
                                          </div>

                                          <div className="hp-right">
                                                <h2>Customer support</h2>
                                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, exercitationem molestiae. Ducimus saepe, officiis, est voluptatem ratione pariatur earum totam cumque vel cupiditate consequuntur veritatis nulla natus? Nobis, quibusdam quas!</p>
                                          </div>   

                                    </div>

                              </div>
                        
                  </div>
            </article>


            <section2>
                  <div className="div-sec2">

                        <div className="imf-left">
                              <div>
                                    <Link to="#"><img className="img-left-women" src= {woman2}/></Link>
                              </div>
                              <div className="ph-left">
                                    <p>collections</p>
                                    <h1>Woman</h1>
                              </div>
                        </div>

                        <div className="img-middle">
                              <div>
                                    <Link to="/"><img className="img-middle-children" src={children} /></Link>
                              </div>
                              <div className="ph-middle">
                                    <p>collections</p>
                                    <h1>Children</h1>
                              </div>
                        </div>
            
                        <div className="img-right">
                              <div>
                                    <Link to="/"><img className="img-men-right" src={men} /></Link>
                              </div>
                              <div className="ph-right">
                                    <p>collections</p>
                                    <h1>Men</h1>
                              </div>
                        </div>

                  </div>
            </section2>

      
            <section3>
                  <div className="div-sec3">
                        
                        <div>
                              <h2 className="h2">Featured Products</h2>
                        </div>
            
                        <div className="div-img3">
                              
                              <div className="sec3-left">
                                    <div>
                                          <Link to="/"><img className="im-left" src={cloth1} /></Link>
                                    </div>
                                    <div className="types-left">
                                          <h3>Tank Top</h3>
                                          <p>Finding perfect t-shirt</p>
                                          <h4>$50</h4>
                                    </div>
                              </div>
            
                              <div className="sec3-middle">
                                    <div>
                                          <Link to="/"><img  className="im-middle" src={shoe1}/></Link>
                                    </div>
                                    <div className="types-middle" >
                                          <h3>Corter</h3>
                                          <p>Finding Prtfect products</p>
                                          <h4>$50</h4>
                                    </div>
                              </div>
            
                              <div className="sec3-right">
                                    <div>
                                          <Link to="/"><img className="im-right" src={cloth2} /></Link>
                                    </div>
                                    <div className="types-right">
                                          <h3>Polo shirt</h3>
                                          <p>Finding perfect products</p>
                                          <h4>$50</h4>
                                    </div>
                              </div>

                        </div>    

                  </div>
            </section3>

            
            <article2> 
                  <div className="div-rticle2">

                        <dir>
                              <h2 className="art-h2">Big Sale!</h2>
                        </dir>
                        
                        <div className="img-types">

                              <div className="art-left">
                                    <img src={blog1} />
                              </div>
            
                              <div className="art-right">
                                    <h1>50% less in all items</h1>
                                    <p>By <span>Carl Smith</span> * September 3.2018</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus voluptas dolorem reprehenderit, illum ut. Repudiandae, expedita commodi ipsa, corrupti optio voluptate saepe ab vel facilis reiciendis, distinctio deserunt odit.</p>
                                    <div className="shop">
                                          <Link to="/">Shop Now</Link>
                                    </div>
                              </div>

                        </div>

                  </div>
            </article2>
      
      
            <footer>  
                  <div className='container-fluid'>

                  
                        <div className="all">

                              <div className="left-footer" >
                                    <h3 >Navigations</h3>
                                    <div className="left-p">
                                          <p className="p1">Sell online</p>
                                          <p className="p1">Features</p>
                                          <p className="p1">Shopping</p>
                                          <p className="p1">Store builder</p>
                                    </div>
                              </div>
            
                              <div className="left2-footer">
                                    <div className="left2-p">
                                          <p className="p1">Mobile commerce</p>
                                          <p className="p1">Drop shopping</p>
                                          <p className="p1">Website development</p>
                                    </div>
                              </div>
            
                              <div>
                                    <div className="center-p">
                                          <p className="p1">Point of sale</p>
                                          <p className="p1">Hardware</p>
                                          <p className="p1">Software</p>
                                    </div>
                              </div>
            
                              <div>
                                    <h3>Promo</h3>
                                    <div className="Promo">
                                          <Link to="/"><img src={hero} /></Link>
                                          <div className="ap">
                                                <Link className="pa" to="/">Finding Your Perfect Shose</Link>
                                                <p className="p1">promo from jnuary 15-25,2019</p>
                                          </div>
                                    </div>
                              </div>   
            
                              <div>
                                    <h3>Contact info</h3>
                                    <div className="info">
                                          <div className="location">
                                                <i className="fa-solid fa-location-dot"></i>
                                                <p>Egypt / Sohag : <br/> Akhmim Center / Al-Sahaba Street</p>
                                          </div>
                                          <div className="phone">
                                                <i className="fa-solid fa-phone"></i>
                                                <p>01067679913</p>
                                          </div>
                                          <div className="email">
                                                <i className="fa-solid fa-envelope"></i>
                                                <p> abdosalah2424@gmail.com</p>
                                          </div>
                                          <div className="input">
                                                <h2>Subscribe</h2>
                                                <input className="email-inp" type="email" name="email" placeholder="Email" />
                                                <Link to="/"><input className="send" type="submit" value="Send"/></Link>
                                          </div>
                                    </div>
                              </div>
                        </div>
            
                        <div className="link-end">
                              <p>Copyright *2021 All rights reserved / This template is made with <i className="fa-solid fa-heart"></i> by <span>Abdulrahman_Helmy</span></p>
                        </div>  
                  </div>
            </footer>
            
      
           
  
     
      </div>
    
  )
}

export default Home