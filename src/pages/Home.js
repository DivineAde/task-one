import React from "react"
import profile from "../assets/divine.jpg"
import slack from "../assets/slack.svg"
import github from "../assets/Icon.svg"
import sharelg from "../assets/_Avatar share button (1).svg"
import sharemd from "../assets/_Avatar share button.svg"
import Zuri from "../assets/Vector (2).svg"
import I4G from "../assets/I4G.svg"

function  Home() {
  return(
    <div className='homepage'>
     <img src={sharelg} className="share" alt="img"/>
     <img src={sharemd} className="sharemd" alt="img"/>
     <img src={profile} id="profile_img" alt="img"/>
     <a id='twitter' href="https://twitter.com/adeyeye_divine?t=pwV9vP6OP7wg2tUI-aiqZA&s=09" target="_blank" rel="noreferrer">Divine Adeyeye</a>
     <a id="slack" rel="noreferrer" href="https://twitter.com/adeyeye_divine?t=pwV9vP6OP7wg2tUI-aiqZA&s=09" >Divine Adeyeye</a>
     <a id='btn-twitter' href="https://twitter.com/adeyeye_divine?t=pwV9vP6OP7wg2tUI-aiqZA&s=09" target="_blank" rel="noreferrer">Twitter Link</a>
     <a id='btn_zuri' href="https://training.zuri.team/" target="_blank" rel="noreferrer">Zuri Team</a>
     <a id='books' href="https://books.zuri.team/" target="_blank" rel="noreferrer">Zuri Books</a>
     <a id='book_python' href="https://books.zuri.team/" target="_blank" rel="noreferrer">Python Books</a>
     <a id='pitch' href="https://background.zuri.team/" target="_blank" rel="noreferrer">Background Check for Coders</a>
     <a id='book_design' href="https://books.zuri.team/design-rules" target="_blank" rel="noreferrer">Design Books</a>
     <div id="socials">
      <img src={slack} className="icons" alt="img"/>
      <img src={github} className="icons" alt="img"/>
     </div>
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
  )
}

export default Home