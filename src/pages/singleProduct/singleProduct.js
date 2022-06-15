import { Fragment, useEffect, useState ,useRef} from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import "./singleProduct.css"


const Singleproduct=()=>{
    console.log(window.location.pathname)

    const {id}=useParams()

    const globalData=useSelector((state)=>state)

    const [item,setItem]=useState()

    const [chosenAttributs,setChosenAttributs]=useState([])

    const mainPhone=useRef()

    const altPhono=useRef()

    const [choosenImg,setChoosenImg]=useState(0)

    altPhono.current=[useRef(),useRef(),useRef(),useRef()]


    console.log(chosenAttributs,"asa")


    const addClassActiveToAttribut=(index,name)=>{

        let newArr=[...chosenAttributs]
        newArr[index]=name

        console.log(newArr)
        setChosenAttributs(newArr)

    }
    const setSrcOfPhotoToMainPhoto=(a)=>{
        //console.log(altPhono.current[a].current.src)
        setChoosenImg(a)
        //mainPhone.current.src=altPhono.current[a].current.src

    }


    useEffect(()=>{

        let item=globalData.products.items.find((item)=>{
            return item.id === +id

        })
        console.log()
        let numberOfAttributs=Object.keys(item.atrubite).length
        let filledArray = new Array(numberOfAttributs).fill(0)
        setChosenAttributs(filledArray)

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
                                            <div className={`${choosenImg ===  index ?"active" :""}`} onClick={()=>setSrcOfPhotoToMainPhoto(index)}>
                                                <img key={index} ref={altPhono.current[index]} src={`../../../api/${item.type}/${item.name}/${src}.jpg`} alt=""/>

                                            </div>
                                        )
                                        
                                    })}
                                </div>

                                <div className="poster">
                                    <img ref={mainPhone} className="main-poster" src={`../../../api/${item.type}/${item.name}/${item.src[choosenImg+1]}.jpg`} alt=""/>
                                </div>

                            </div>
                            
                            <div className="data">
                                <h3>{item.name}</h3>

                                <div className="atrubite">
                                    {Object.keys(item.atrubite).map((key,index_parent)=>{
                                        return(
                                            <div key={(index_parent+80)*2}>
                                                <h4>{key}</h4>
                                                <div className="choices">
                                                    {item.atrubite[key].map((value,index)=>{
                                                        return(
                                                                <div key={index+80} className={`${chosenAttributs[index_parent] === value ?"active" :"" }`} onClick={()=>addClassActiveToAttribut(index_parent,value)}>{value}</div>
                                                        )
                                                    })}
                                                </div>


                                            </div>
                                        )

                                    })}
                                </div>
                                <div className="price">
                                    <h4>Price</h4>
                                    <h5>$ {item.price}</h5>
                                    
                                </div>
                                <div className="add-to">Add To card</div>
                            </div>
                        </div>
                    </div>
                
            }
        </Fragment>


    )
}
export default Singleproduct