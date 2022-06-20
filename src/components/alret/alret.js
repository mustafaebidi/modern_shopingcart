
import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setStateOfProduct } from '../../store/productsSlice';
import "./alret.css"
const popUp=document.getElementById("pop-up")


const Alert=()=>{

    const stateOfItem=useSelector((state)=>state.products.stateOfProduct)
    const dispath=useDispatch()

    const globals=useRef()


    useEffect(()=>{
        if(stateOfItem){
            clearTimeout(globals.current)
            globals.current=setTimeout(()=>{
                dispath(setStateOfProduct(""))
            },1000)
        }
    },[dispath, stateOfItem])

    const alertMassage={
        "success":{
            "massage":"Successfully added",
            "style":{backgroundColor: "#52d67a",color:"white"}
        },
        "existing":{
            "massage":"Existing",
            "style":{backgroundColor: "red",color:"white"}
        }
    }

    if(stateOfItem){
        let innerMassage=(<div className="massage" style={alertMassage[stateOfItem].style}>{alertMassage[stateOfItem].massage}</div>)

        return(
            ReactDOM.createPortal(stateOfItem && innerMassage,popUp)
        )

    }


}

export default Alert