import React from 'react'
import "./shop.css"
import { BrowserRouter , Routes , Route , Link} from 'react-router-dom'

import cloh from "./cloth_1.jpg"
import cloth3 from "./cloth_3.jpg" 
import sho from "./shoe_1.jpg"
import clo2 from "./cloth_2.jpg"
import wom2 from "./woman2.webp"
import chil from "./children.jpg" 
import men1 from "./men.jpg"
import her from "./hero_1.jpg"



const Shop  = () => {
  return (
      <div>
            <div class="main">
                  <aside class="asidleft1">

                        <div class="topleft">
                              <div class="divcat">
                                    <h3>CATEGORIES</h3>
                                    <p>MEN</p>
                                    <p>WOMEN</p>
                                    <p>CHILDREN</p>
                              </div>
                              <div class="num">
                                    <p>(2,220)</p>
                                    <p>(2,550)</p>
                                    <p>(2,124)</p>
                              </div>
                        </div>

                        <br/><br/>

                        <div class="bottomleft">
                              <div class="filter">
                                    <h3>FILTER BY PRICE</h3>
                                    <div class="filt">
                                          <input class="rt1" type="range" name="" id="" min="10" max="60" />
                                          <input class="rt2" type="range" name="" id="" min="10" max="60" />
                                    </div>
                                    <div class="size">
                                          <h3>size</h3>
                                          <input  type="checkbox"/>
                                          <label>SMALL (2,319)</label><br/><br/>
                                          <input  type="checkbox"/>
                                          <label>MIDIUME (1,282)</label><br/><br/>
                                          <input type="checkbox"/>
                                          <label>LARG (1,282)</label><br/>
                                    </div>

                                    <br/><br/>

                                    <div class="color">
                                          <h3>color</h3>
                                          <input type="radio"/>
                                          <label for="">Red</label><br/><br/>
                                          <input type="radio"/>
                                          <label for="">Blue</label><br/><br/>
                                          <input type="radio"/>
                                          <label for="">Purple</label><br/><br/>
                                          <input type="radio"/>
                                          <label for="">Green</label><br/><br/>
                                    </div>   
                              </div>
                        </div>
                  </aside>

                  <aside class="aside-right">
                        <div class="seck">
                              <div class="shop">
                                    <h3>Shop all</h3>
                              </div>
                              <div class="selectall">
                                    <div class="selc1">
                                          <select class="selc11" name="" id="" >
                                          <option value="" >Latest</option>
                                          <option value="" >Men</option>
                                          <option value="">Women</option>
                                          <option value="">Children</option>
                                          </select>
                                    </div>
                                    <div class="selc2">
                                          <select class="selc22" name="" id="">
                                          <option value="">Refrence</option>
                                          <br/><br/>
                                          <option value="">Relevance</option>
                                          <br/><br/>
                                          <option value="">Name,A to z</option>
                                          <br/><br/>
                                          <option class="ztoa" value="">Name,z to a</option>
                                          <br/><br/>
                                          <option value="">Price,Low to high</option>
                                          <br/><br/>
                                          <option value="">Price,high to Low</option>
                                          <br/><br/>
                                          </select>
                                    </div>
                              </div>
                        </div>

                              {/* <!-- start right photo --> */}
                        <div class="photos">
                              <div class="ph1">
                                    <div class="sh1">
                                          <div class="shad">
                                          <Link to="single-product.html"><img src= {cloh} /></Link>
                                          </div>
                                          <div class="tank">
                                          <h3>Tank Top</h3>
                                          <p>finding perfect t-shirt</p>
                                          <h3>$50</h3>
                                          </div>
                                    </div><br/>

                                    <div>
                                          <div class="shad">
                                          <Link to="single-product.html"><img src={cloth3} /></Link>
                                          </div>
                                          <div class="tank">
                                          <h3>T-shirt Mockup</h3>
                                          <p>finding perfect t-shirt</p>
                                          <h3>$50</h3>
                                          </div>
                                    </div>

                                     <br/>

                                    <div>
                                          <div class="shad">
                                                <Link to="single-product.html"> <img src= {sho} /></Link>
                                          </div>
                                          <div class="tank">
                                                <h3>Center</h3>
                                                <p>finding perfect t-shirt</p>
                                                <h3>$50</h3>
                                          </div><br/>
                                    </div>

                                    <div class="sh1">
                                          <div class="shad">
                                                <Link to="single-product.html"> <img src={sho} /></Link>
                                          </div>
                                          <div class="tank">
                                                <h3>Center</h3>
                                                <p>finding perfect t-shirt</p>
                                                <h3>$50</h3>
                                          </div>
                                    </div>
                                    <br/>
                              </div>

                              <div class="ph2">
                                    <div>
                                          <div class="shad">
                                                <Link to="single-product.html"> <img src={sho} /></Link>
                                          </div>
                                          <div class="tank">
                                                <h3>Center</h3>
                                                <p>finding perfect t-shirt</p>
                                                <h3>$50</h3>
                                          </div>
                                    </div>

                                    <br/>

                                    <div>
                                          <div class="shad">
                                                <Link to="single-product.html"> <img src={sho} /></Link>
                                          </div>
                                          <div class="tank">
                                                <h3>center</h3>
                                                <p>finding perfect t-shirt</p>
                                                <h3>$50</h3>
                                          </div>
                                    </div>

                                    <br/>

                                    <div>
                                          <div class="shad">
                                                <Link to="single-product.html"><img src={clo2} /></Link>
                                          </div>
                                          <div class="tank">
                                                <h3>polo shirt</h3>
                                                <p>finding perfect t-shirt</p>
                                                <h3>$50</h3>
                                    </div>
                                    </div>
                                    
                                     <br/>

                                    <div>
                                    <div class="shad">
                                          <Link to="single-product.html"> <img src={clo2} /></Link>
                                    </div>
                                    <div class="tank">
                                          <h3>Tank Top</h3>
                                          <p>finding perfect t-shirt</p>
                                          <h3>$50</h3>
                                    </div>
                              </div>

                              <br/>

                              </div>

                              <div class="ph3">
                                    <div>
                                          <div class="shad">
                                                <Link to="single-product.html"><img src={clo2} /></Link>
                                          </div>
                                          <div class="tank">
                                                <h3>Tank Top</h3>
                                                <p>finding perfect t-shirt</p>
                                                <h3>$50</h3>
                                          </div>
                                    </div>

                                    <br/>

                                    <div>
                                          <div class="shad">
                                          <Link to="single-product.html"> <img src={cloh} /></Link>
                                          </div>
                                          <div class="tank">
                                          <h3>Polo shirt</h3>
                                          <p>finding perfect t-shirt</p>
                                          <h3>$50</h3>
                                          </div><br/>
                                    </div>
 
                                    <div>
                                          <div class="shad">
                                                <Link to="single-product.html"> <img src={cloh} /></Link>
                                          </div>
                                          <div class="tank">
                                                <h3>Tank Top</h3>
                                                <p>finding perfect t-shirt</p>
                                                <h3>$50</h3>
                                          </div>
                                    </div>
                                    
                                    <br/>

                                    <div>
                                          <div class="shad">
                                                <Link to="single-product.html"> <img src={clo2} /></Link>
                                          </div>
                                          <div class="tank">
                                                <h3>T-shirt Mockup</h3>
                                                <p>finding perfect t-shirt</p>
                                                <h3>$50</h3>
                                          </div>
                                    </div>
                                    <br/>
                              </div>
                        </div>
                  </aside>
            </div>
            

            <section2>
                  <div>
                        <h2 class="h2">Categories</h2>
                  </div>
                  <div class="div-sec2">
                        <div class="imf-left">
                              <div>
                                    <Link to="#"><img class="img-left-women" src= {wom2}  /></Link>
                              </div>
                              <div class="ph-left">
                                    <p>collections</p>
                                    <h1>Woman</h1>
                              </div>
                        </div>

                        <div class="img-middle">
                              <div>
                                    <Link to="#"><img class="img-middle-children" src={chil} /></Link>
                              </div>
                              <div class="ph-middle">
                                    <p>collections</p>
                                    <h1>Children</h1>
                              </div>
                        </div>

                        <div class="img-right">
                        <div>
                              <Link to="#"><img class="img-men-right" src={men1} /></Link>
                        </div>
                        <div class="ph-right">
                              <p>collections</p>
                              <h1>Men</h1>
                        </div>
                        </div>
                  </div>
            </section2>

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
                                    <Link to="/"><img src={her} /></Link>
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

export default Shop