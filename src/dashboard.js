import React,{Component} from "react";
import axios from "axios";

import "./dashboard.css"

export default class Dashboard extends Component
{

constructor(){

    super();
    this.state={

        longurl:"",
        shorturl:""
    }
}

 logout=()=>{
     this.props.history.replace("./home");
    
}


handleChange=({target:{name,value}})=>{
    this.setState({[name]:value})
 }



action=async()=>{
   

 
const data=await axios.post("https://urlshortner-backendnew.herokuapp.com/shorten",{longurl:this.state.longurl})
console.log(data.data);
this.setState({shorturl:data.data.shorturl})

}

    render(){


return(
    <div>
        
<div className="navbar1">
                        <nav class="navbar navbar-dark bg-dark">

                    <div class="container-fluid">
                    <img src="slogo.png" width="170px" ></img> 
                        <form class="d-flex">
                    
                        <button class="btn btn-outline-success" type="button" onClick={this.logout}>Logout</button>
                        </form>
                    </div>
                    </nav>
</div>

    

    <div className="headdesign">

    <div className="container">     
            <div className="row"> 

                    <div className="col"> 


                    <div className="de"> 
                    <h1> MAKE URL SHORT </h1> <h4>ACHIEVE GOOD RESULTS </h4>
                    <p> A URL shortener built with powerful tools </p>
                    <p> to help you grow and protect your brand ..</p>

                    </div>
                    </div>
                    <div className="col"> 

                    <img src="url.png" width="600px" height="350px"/>

                    </div>

           </div>
    </div>
    </div>


    <div className="design">



    <div class="paste">
             

              <center>  <p>
                    Paste your url below  to  make it short..
                </p>
</center>

                    <input type="text" name="longurl" class="form-control" placeholder="url for shorten"  width="100px" value={this.state.longurl} onChange={this.handleChange}/>
                    <button class="btn btn-primary" type="button" id="butshort" onClick={this.action}>Shorten</button>
                




            </div>



                <div className="copy">


                     <center> <p> Copy  your shorten url..  </p>      </center>   

                        <div class="input-group mb-6">

                        <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" width="100px" value={this.state.shorturl}/>
                        
                    
                        </div>
                    
                </div>

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

<div className="moto">

  <center> <p> Keep it short, sweet and simple with a URL shortener today !</p> </center> 
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

      
  
)

}
}