import { Fragment, useEffect, useState ,useRef} from "react"
import { useSelector,useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

import "./singleProduct.css"


const Singleproduct=()=>{
    console.log(window.location.pathname)

    const {id}=useParams()

    const globalData=useSelector((state)=>state)

    const [item,setItem]=useState()

    const mainPhone=useRef()

    const altPhono=useRef()

    altPhono.current=[useRef(),useRef(),useRef(),useRef()]


    const setSrcOfPhotoToMainPhoto=(a)=>{
        console.log(altPhono.current[a].current.src)
        mainPhone.current.src=altPhono.current[a].current.src

    }


    useEffect(()=>{

        let item=globalData.products.items.find((item)=>{
            return item.id === +id

        })

        setItem(item)

    },[globalData.products.items, id])
    
    return(
        <Fragment>
            {item && 
                    <div className="container">
                        <div className="detalis">
                            <div className="show">

                                <div className="the-group">
                                    {item.src.slice(1).map((src,index)=>{
                                        return(
                                            <img ref={altPhono.current[index]} onClick={()=>setSrcOfPhotoToMainPhoto(index)} src={`../../../api/${item.type}/${item.name}/${src}.jpg`} alt=""/>
                                        )
                                        
                                    })}
                                </div>

                                <div>
                                    <img ref={mainPhone} src={`../../../api/${item.type}/${item.name}/${item.src[1]}.jpg`} alt=""/>
                                </div>

                            </div>
                            
                            <div className="data">
                                <h3>{item.name}</h3>

                                <div className="atrubite">
                                    {Object.keys(item.atrubite).map((key)=>{
                                        return(
                                            <div>
                                                <h4>{key}</h4>
                                                <div className="choices">
                                                    {item.atrubite[key].map((value)=>{
                                                        return(
                                                                <div>{value}</div>
                                                        )
                                                    })}
                                                </div>


                                            </div>
                                        )
                                  
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                
            }
        </Fragment>


    )
}
export default Singleproduct