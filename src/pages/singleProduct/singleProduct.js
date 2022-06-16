import { Fragment, useEffect, useState ,useRef} from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { addToCart } from "../../store/productsSlice"
import uuid from 'react-uuid'

import "./singleProduct.css"


const Singleproduct=()=>{

    let {id}=useParams()
    const globalData=useSelector((state)=>state)
    const [item,setItem]=useState()
    const [chosenAttributs,setChosenAttributs]=useState([])
    const mainPhone=useRef()
    const [choosenImg,setChoosenImg]=useState(0)
    const dispath=useDispatch()

    id=+id

    const addClassActiveToAttribut=(index,name)=>{
        let newArr=[...chosenAttributs]
        newArr[index]=name
        setChosenAttributs(newArr)
    }

    const setSrcOfPhotoToMainPhoto=(a)=>{
        setChoosenImg(a)
    }


    useEffect(()=>{
        let item=globalData.products.items.find((item)=>{
            return item.id === id
        })

        let numberOfAttributs=Object.keys(item.atrubite).length
        let values = new Array(numberOfAttributs).fill(0)
        setChosenAttributs(values)
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
                                            <div key={uuid()} className={`${choosenImg ===  index ?"active" :""}`} onClick={()=>setSrcOfPhotoToMainPhoto(index)}>
                                                <img key={index} src={`../../../api/${item.type}/${item.name}/${src}.jpg`} alt=""/>

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
                                            <div key={uuid()}>
                                                <h4>{key}</h4>
                                                <div className="choices">
                                                    {item.atrubite[key].map((value,index_child)=>{
                                                        return(
                                                                <div key={uuid()} className={`${chosenAttributs[index_parent] === index_child ?"active" :"" }`} onClick={()=>addClassActiveToAttribut(index_parent,index_child)}>{value}</div>
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
                                <div className="add-to" onClick={()=> dispath(addToCart({id,values:chosenAttributs})) }>Add To card</div>
                            </div>
                        </div>
                    </div>
                
            }
        </Fragment>


    )
}
export default Singleproduct