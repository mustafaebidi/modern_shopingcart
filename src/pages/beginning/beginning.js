
import { Link } from "react-router-dom"
import "./beginning.css"


const Beginning=()=>{
    return(
        <div className="beginning">
            <div>
                <img src="../../../image/sammy-shopping-1.png" alt=""/>
                <div className="info">
                    <h2>Easy And Secure online payment</h2>
                    <p>Lorem ipsum dolor sit amet. Et facere maiores sed ratione reprehenderit et impedit internos aut ratione distinctio qui pariatur voluptatem et quia. Non laboriosam nihil et explicabo dolores in rerum eaque et doloremque rerum.</p>
                    <div className="started">
                        <Link to="/home">
                            Get Started
                        
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Beginning