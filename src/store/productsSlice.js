
import { createSlice } from '@reduxjs/toolkit'
import products from "../data.json"









const productsSlice = createSlice({
    name: 'products',
    initialState:{
      items: products.items,
      itemsInCart:[],
      "itemsInFavorite":[],
      type:"all",
      "stateOfProduct":false
      
    },
    reducers: {
      addToCart: (state,action) => {
        let items=[...state.items]
        let id=+action.payload.id
        const itemsInCard=[...state.itemsInCart]

        const getAllProductWithSameId=()=>{

          let prouducts=itemsInCard.filter((item)=>{
            return +item.id === id
          })
          return prouducts

        }

        function checkExistAttribute(item){
            
          for(let i=0;i<Object.entries(item.attribute).length;i++){

            //get the Choosen Attribute in this key
            let indexOfChooseAttribute=action.payload.values[i]
            //Get all value of this key
            let values=Object.values(item.attribute)[i]

            let indexOf=values[indexOfChooseAttribute]
            
            if(Object.values(indexOf)[0]=== false){
              return false
            }

          }
          return true

        }

        const checkExsit=()=>{


          let exsit=itemsInCard.find((item)=>{return action.payload.id === item.id})  


          if(exsit){
            
            let allSameId=getAllProductWithSameId()

            for(let i=0;i<allSameId.length;i++){
              if(checkExistAttribute(allSameId[i])){
                return true
              }
            }
            return false
        
          }

          else{
            return false
          }

        }
        
        let item=items.find((item)=>{return item.id === action.payload.id})

        const handleAttribute=(chosenValues)=>{

          let newAtrubite={}

          Object.entries(item.atrubite).forEach((attribute,ind) => {
              const [key,values]=attribute
              let arr=[]
              values.forEach((value,index) => {

                  if(index === chosenValues[ind]){
                      arr.push({[value]:true})
                  }
                  else{
                      arr.push({[value]:false})
                  }
              
              });
              newAtrubite[key]=arr
          });

          return newAtrubite
        }


        if(checkExsit()){
          state.stateOfProduct="existing"
        }
        else{

          const itemCart={

            id:item.id,
            name:item.name,
            type:item.type,
            price:item.price,
            attribute:handleAttribute(action.payload.values),
            quantity:1
          }
          state.itemsInCart.push(itemCart)
          state.stateOfProduct="success"

        }
        
      },

      addToFavorite:(state,action)=>{

        const exist=state.itemsInFavorite.find((item)=>{return item.id === action.payload})

        if(!exist){
          let items=[...state.items]
          let item=items.find((item)=>{return item.id === action.payload})
          state.itemsInFavorite.push(item)
        }




      },

      increaseQuantity:(state,action)=>{
        
        let modify=[...state.itemsInCart]
        modify[action.payload].quantity+=1

        state.itemsInCart=modify


      },

      decreaseQuantity:(state,action)=>{
        let modify=[...state.itemsInCart]


        if(modify[action.payload].quantity > 1){
          modify[action.payload].quantity-=1
          state.itemsInCart=modify

        }


      },

      removeFromCart: (state,action) => {

        const newItems=state.itemsInCart.filter((item,index)=>{return index !== action.payload})
        state.itemsInCart=[...newItems]

        
      },

      removeFromFavourite:(state,action)=>{

        const newItems=state.itemsInFavorite.filter((item)=>{

          return item.id !== action.payload

        })

        state.itemsInFavorite=[...newItems]
        

      },


      setType: (state, action) => {
        state.type=action.payload

      },
      setStateOfProduct:(state,action) =>{
        state.stateOfProduct=action.payload
      }
    },
  })


export default productsSlice.reducer

export const {addToCart,removeFromCart,setType,setStateOfItem,addToFavorite,removeFromFavourite,increaseQuantity,getSumOfProducts,decreaseQuantity,setStateOfProduct}=productsSlice.actions