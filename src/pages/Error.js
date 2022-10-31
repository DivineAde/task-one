import { Link } from "react-router-dom"
import React from "react"
import Zuri from "../assets/Vector (2).svg"
import I4G from "../assets/I4G.svg"
import Arrow from "../assets/Icon (1).svg"

function Error(){
  return(
    <div className="error">
      <span className="error_message">404 error</span>
      <h1>We can't find that page</h1>
      <p>Sorry the page you are looking for doesn't exist</p>
      <div className="error_btn">
        <Link to="/">
         <button className="back_btn"><img src={Arrow} alt="arrow"/>Go back</button>
        </Link>
        <Link to="/">
         <button className="home_btn">Take me home</button>
        </Link>
      </div>
      <div className="footer_bottom">
      <hr style={{
      background: "#000",
      color: "#000",
      height: ".1px",
      width: "80%",
      margin: "0 auto"
     }}/>
      <div className="bottom">
       <img src={Zuri} alt="img"/>
       <label>HNG Internship 9 Frontend Task</label>
       <img src={I4G} alt="img"/>
      </div>
     </div>
    </div>
  )
}

export default Error