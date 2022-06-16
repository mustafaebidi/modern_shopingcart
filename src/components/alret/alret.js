
import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setStateOfItem } from '../../store/productsSlice';
import "./alret.css"
const popUp=document.getElementById("pop-up")


const Alert=()=>{

    const globalData=useSelector((state)=>state)
    const dispath=useDispatch()

    const globals=useRef()


    useEffect(()=>{
        if(globalData.products.stateOfItem){
            clearTimeout(globals.current)
            globals.current=setTimeout(()=>{
                dispath(setStateOfItem(""))
            },1000)
        }
    },[dispath, globalData.products.stateOfItem])

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

    if(globalData.products.stateOfItem){
        let innerMassage=(<div className="massage" style={alertMassage[globalData.products.stateOfItem].style}>{alertMassage[globalData.products.stateOfItem].massage}</div>)

        return(
            ReactDOM.createPortal(globalData.products.stateOfItem && innerMassage,popUp)
        )

    }


}

export default Alert