 import {NavLink} from "react-router-dom"
 import "./home.css"
 export default function Home(){




return(<>

<div class="container-sm">


          <nav class="navbar fixed-top navbar-light bg-light">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <NavLink class="navbar-brand" to="/home"><img src="slogo.png" width="190px" ></img> </NavLink>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <NavLink id="button1"  class="btn btn-dark" aria-current="page"to="/home">Home</NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink id="button2"  class="btn btn-dark"  to="/login">Login</NavLink>
                  </li>
                  <li class="nav-item" id="signupbutton">
                    <NavLink id="button3" class="btn btn-dark" to="/signup">Signup</NavLink>
                  </li>
                </ul>
                
              </div>
            </div>
          </nav>
          </nav>


</div>



<div className="bodydesign">

                      <div className="homeimage">
                      <center><img src="urlshort.png" width="90%" height="500px" ></img></center>
                      </div>


              <div class="container">

                 <div className="homedesign"></div>



            <center>

            <h1> MAKE URL SHORT </h1> <h4>ACHIEVE GOOD RESULTS </h4>
                                <p> A URL shortener built with powerful tools </p>
                                <p> to help you grow and protect your brand ..</p>
            </center>

                    </div>




                    <div className="moto">

                    <center> <p> Keep URLs short, sweet and simple with a URL shortener today !</p> </center> 
                    </div>

<div className="container">

             <div className="row">

                    <div className="col">

                            <div class="card">
                            <img src="kids.jpeg" class="card-img-top" alt="..."  width="50px"></img>
                                <div class="card-body">
                                
                                    <p class="card-text">   If your wanting to get down with the kids then this is the way to go, get rid of your sloppy, long boring 
                            URL and swap it for a fresh snazzy new one that represents whatever you want it to!</p>

                                </div>  
                            </div>

                    </div>


                      <div className="col">

                              <div class="card">
                              <img src="website.png" class="card-img-top" alt="..."  width="50px"></img>
                                  <div class="card-body">
                                  
                                      <p class="card-text">URLs promotes sharing! If the URLs are shorter that means there’s more space to share other things!</p>

                                  </div>  
                              </div>

                      </div>

                                <div className="col">

                                    <div class="card">
                                    <img src="cloud.jpeg" class="card-img-top" alt="..."  width="50px"></img>
                                          <div class="card-body">

                                              <p class="card-text">The internet is a massive and wonderful place and there’s so many amazing things you can do to promote yourself and your own business or webpage</p>

                                          </div>  
                                    </div>

                                </div>

                      </div>

                      </div>






    <div className="footer">
    <div className="row">

                <div  className="col">
               <h5> Solutions :</h5>
             <p>   Social Media</p>

             <p>Digital Marketing</p>
            
             <p> Customer Service</p>
          


            </div>

            <div  className="col">
            <h5>Features :</h5>
          <p>  Link Management</p>
         <p>   Branded Links</p>
           <p> Mobile Links</p>
            </div>

            <div  className="col">
            <h5>Legal :</h5>
           <p> Privacy Policy</p>
           <p> Terms of Service </p>

            </div>

            <div  className="col">
                <div className="add">

            <h5>SHORTNER:
           </h5>
           <p> Main road palus .</p>
           <p> Sangli ,Maharastra</p>

                </div>
            </div>


</div>


</div>
</div>

</>);








 }