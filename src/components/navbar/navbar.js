
import {  useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setType } from '../../store/productsSlice';
import "./navbar.css"



const types=["phone","monitor","all","laptop"]

const Navbar=({show})=>{
    const globalData=useSelector((state)=>state)

    const[typesButtons ,setRefs ] =useState([useRef(),useRef(),useRef(),useRef()])
    const pointer=useRef()
    const dispath=useDispatch()

    

    const removeActiveClass=()=>{
        typesButtons.forEach(element => {
            element.current.classList.remove("active")
            
        });

    }




    const ds=(index)=>{

        let posElment=typesButtons[index].current.offsetLeft
        let elementName=types[index].toLowerCase()
        

        //removeActiveClass()
        //typesButtons[index].current.classList.add("active")

        //pointer.current.style.left=`${posElment}px`
        dispath(setType(elementName))

    }




    let width=80


    return(

        <div className="nav">
            <div className="container">
                <Link to="/home" className='logo'>Store</Link>

                <ul className='store'>
                    <Link to="/cart" className='cart'>
                        <img src="../../../image/shopping-cart.png" alt=""/>

                    </Link>

                    <Link to="/" className='fav'>
                        <img src="../../../image/heart1.png" alt=""/>
                    </Link>
                </ul>

                {show && <ul className='types'>
                    <div className='con-li'>

                        {types.map((name,index)=>{

                            return(
                                <li key={index } style={{width: `${width}px`}} ref={typesButtons[index]} className={`${globalData.products.type === name.toLowerCase() ? "active" :"" }`} onClick={()=>ds(index)}>
                                    <div className='icon-type'>
                                        <img src={`../../../image/${name.toLowerCase()}.png`} alt=""/>
                                    </div>
                                    <div className='text'>{name}</div>
                                </li>

                            )

                        })}
                        <div  ref={pointer} style={{left:`${types.indexOf(globalData.products.type) * (width ) }px`}} className='pointer'></div>


                    </div>
                    
                </ul>}
            </div>
        </div>
    )

}


export default Navbar