import { BsFillCartFill } from "react-icons/bs"
import "./Navbar.css"

const Navbar = () => {
return (
    <div className="barra">
        <h1 style={{color: "darkred", padding:"15px"}}>Scarlata Jewelers</h1>

        <img src="./pic/favicon.png" alt="" size= "30px" width= "70px"/>

        
            <h4 style={{textAlign: "center", padding: "30px",}}>Anillos</h4>
            <h4 style={{textAlign: "center", padding: "30px", width: "15%"}}>Relojes</h4>
            <h4 style={{textAlign: "center", padding:"30px", width: "10%"}}>Brazaletes</h4>
    
        
        <div style= {{position: "relative",  left: "30%"}}>
        <BsFillCartFill size="55px" />
        <span style= {{position: "absolute"}}>5</span>
        </div>
        
    </div>
)
}

export default Navbar