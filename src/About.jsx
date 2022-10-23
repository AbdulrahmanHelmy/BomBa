import React from 'react'
import "./Aboute.css"
import {  Link} from 'react-router-dom'

import blog from"./blog_1.jpg"
import mona from "./llllll.jpg"
import patrek from "./images.jpeg"
import mick from "./person_4.jpg"
import taha from "./taha.jpeg"
import hero from "./hero_1.jpg"

const About = () => {
  return (
    <div>

            <section >
                  <div className="section1">
                        <div className="img1">
                              <img src= {blog} /> 
                        </div>

                        <div className="para1">
                              <h2>How we started</h2>
                              <p>   consequuntur accusamus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus tempore optio nesciunt! Eveniet eius expedita perspiciatis ipsum sapiente sequi ullam enim iste placeat? Laboriosam soluta possimus distinctio doloremque quos?</p>
                              <br/><br/>
                              <p> TCulpa quaerat voluptatem perferendistemporibus rerum ratione nobis ipsa expedita. Fuga aspernatur nihil sunt repellendus,.</p>
                        </div>
                  </div>
            </section>

            <section className="section2">
                  <h2 className="team">The Team</h2>
                  <div className="divAll">
                        <div className="firest">
                              <img className="taha" src= {mona} />
                              <h3>Mona Tarek</h3>
                              <p>CEO/CO-founder</p> <br/>
                              <p>Lorem ipsum dolor sit amet consectetur,  minus ex voluptate, mollitia necessitatibus adipisci, nesciunt eius dolores laborum! Doloribus voluptate unde hic suscipit velit. Magnam.</p>
                        </div>
                        <div className="firest">
                              <img className="taha" src= {patrek} />
                              <h3>Patrek Marx</h3>
                              <p>CO-FOUNDER</p> <br/>
                              <p>Lorem ipsum dolor sit amet consectetur,  minus ex voluptate, mollitia necessitatibus adipisci, nesciunt eius dolores laborum! Doloribus voluptate unde hic suscipit velit. Magnam.</p>
                        </div>
                        <div className="firest">
                              <img className="taha" src={mick} />
                              <h3>MICK COOLBERT</h3>
                              <p>MARKETING</p> <br/>
                              <p>Lorem ipsum dolor sit amet consectetur, minus ex voluptate, mollitia necessitatibus adipisci, nesciunt eius dolores laborum! Doloribus voluptate unde hic suscipit velit. Magnam.</p>
                        </div>
                        <div className="firest">
                              <img className="taha" src= {taha} />
                              <h3>Taha elsheikh</h3>
                              <p>SALES MANAGER</p> <br/>
                              <p>Lorem ipsum dolor sit amet consectetur, minus ex voluptate, mollitia necessitatibus adipisci, nesciunt eius dolores laborum! Doloribus voluptate unde hic suscipit velit. Magnam.</p>
                        </div>
                  </div>

            </section>

            <article className="article">
                  <div className="div-article">

                        <div className="article-left">
                              <div className="icon-left">
                                    <i className="fa-solid fa-truck"></i>
                              </div>

                              <div className="hp-left">
                                    <h2>Free shopping</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptate corrupti temporibus architecto. Quae eaque, esse temporibus eveniet incidunt ratione hic enim accusamus minima excepturi maiores error nostrum quisquam suscipit?</p>
                              </div>
                        </div>
            
                        <div className="article-middle">
                              <div className="icon-middle">
                                    <i className="fa-solid fa-arrow-rotate-right"></i>
                              </div>

                              <div className="hp-middle">
                                    <h2>Free returns</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quo, dolorum minima sed modi veniam consequatur molestiae aliquam illum est ratione ipsam beatae dolor laudantium veritatis et optio assumenda fugiat.</p>
                              </div>
                        </div>

                        <div className="article-right">
                              <div className="icon-right">
                                    <i className="fa-solid fa-circle-question"></i>
                              </div>

                              <div className="hp-right">
                                    <h2>Customer support</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, exercitationem molestiae. Ducimus saepe, officiis, est voluptatem ratione pariatur earum totam cumque vel cupiditate consequuntur veritatis nulla natus? Nobis, quibusdam quas!</p>
                              </div>   
                        </div>

                  </div>
            </article>


            <footer>  
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
            </footer>           
      
    </div>
  )
}

export default About