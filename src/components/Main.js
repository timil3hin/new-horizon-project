import React from "react"
import myPhoto from "../images/logo512.png"

export default function Main() {
    return (
        <div >
            <main>
                <div className="mainCover">
                    <div className="imageCover">
                        <img  className="image" src={myPhoto} alt="my-passport" />
                    </div>
                    <div className="name">
                        <h3>Oluwatimilehin Ayoola</h3>
                        <h4 className="designation" >Student</h4>
                        <button className="phone">Phone</button>
                        <button className="email" >Email</button>                        
                    </div>
                </div>     
            </main>
        </div>
    )
}