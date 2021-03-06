
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setType } from '../../store/productsSlice';

import "./navbar.css"



const types=["phone","monitor","all","laptop"]

const Navbar=({show})=>{
    const globalData=useSelector((state)=>state.products)

    const dispath=useDispatch()

    



    const setTypeOfProducts=(index)=>{

        let elementName=types[index].toLowerCase()
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
                        {globalData.itemsInCart.length ?<div className='items-number'><div>{globalData.itemsInCart.length}</div></div> :""}
                    </Link>

                    <Link to="/favorite" className='fav'>
                        <img src="../../../image/heart1.png" alt=""/>
                    </Link>
                </ul>

                {show && <ul className='types'>
                    <div className='con-li'>

                        {types.map((name,index)=>{

                            return(
                                <li key={index } style={{width: `${width}px`}}  className={`${globalData.type === name.toLowerCase() ? "active" :"" }`} onClick={()=>setTypeOfProducts(index)}>
                                    <div className='icon-type'>
                                        <img style={{"opacity":`${name === "all" ? 0.5 :1}`}} src={`../../../image/${name.toLowerCase()}.png`} alt=""/>
                                    </div>
                                    <div className='text'>{name}</div>
                                </li>

                            )

                        })}
                        <div  style={{left:`${types.indexOf(globalData.type) * (width ) }px`}} className='pointer'></div>


                    </div>
                    
                </ul>}
            </div>
        </div>
    )

}


export default Navbar