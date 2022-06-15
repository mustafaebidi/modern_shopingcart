
import { createSlice } from '@reduxjs/toolkit'
import products from "../data.json"









const productsSlice = createSlice({
    name: 'products',
    initialState:{
      items: products.items,
      itemsInCart:[],
      type:"all",
      "stateOfItem":false
    },
    reducers: {
      addToCart: (state,action) => {
        let items=[...state.items]

        let itemsInCard=[...state.itemsInCart]

        let exsit=itemsInCard.find((item)=>{
          return action.payload === item.id

        })

        let item=items.find((item)=>{
          return item.id === action.payload

        })

        const handleAttribute=()=>{

          let newAtrubite={}
          Object.entries(item.atrubite).forEach((element,ind) => {
              //console.log(element)
              const [key,value]=element

              let arr=[]
              value.forEach((element2,index) => {
                  if(index === 0){
                      arr.push({[element2]:true})
                  }
                  else{
                      arr.push({[element2]:false})

                  }
              
              });
              newAtrubite[key]=arr
          });

          return newAtrubite
        }


        if(exsit){
          state.stateOfItem="existing"

        }
        else{

          const itemCart={

            id:item.id,
            name:item.name,
            type:item.type,
            price:item.price,
            attribute:handleAttribute(),
            quantity:1
          }

          state.itemsInCart.push(itemCart)
          state.stateOfItem="success"



        }



        



        
      },
      removeFromCart: (state,action) => {
        return state
        
      },
      setType: (state, action) => {
        state.type=action.payload

      },
      setStateOfItem:(state,action) =>{
        state.stateOfItem=action.payload

      }
    },
  })


export default productsSlice.reducer

export const {addToCart,removeFromCart,setType,setStateOfItem}=productsSlice.actions