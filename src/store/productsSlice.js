
import { createSlice } from '@reduxjs/toolkit'
import products from "../data.json"









const productsSlice = createSlice({
    name: 'products',
    initialState:{
      items: products.items,
      itemsInCart:[],
      "itemsInFavorite":[],
      type:"all",
      "stateOfItem":false
      
    },
    reducers: {
      addToCart: (state,action) => {
        let items=[...state.items]

        let id=+action.payload.id

        let itemsInCard=[...state.itemsInCart]


        const getAllSameProduct=()=>{

          let prouducts=itemsInCard.filter((item)=>{
            return +item.id === id
          })
          return prouducts

        }

        function checkAttribute(item){
            
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
            
            ///All product contain this iD
            let allSame=getAllSameProduct()

            for(let i=0;i<allSame.length;i++){
              if(checkAttribute(allSame[i])){
                return true
                
              }
              
            }
            return false
          }

          else
          {
            return false

          }

        }


        
        let item=items.find((item)=>{
          return item.id === action.payload.id

        })

        const handleAttribute=(values)=>{

          let newAtrubite={}
          Object.entries(item.atrubite).forEach((element,ind) => {
              const [key,value]=element
              let arr=[]
              value.forEach((element2,index) => {
                  if(index === values[ind]){
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


        if(checkExsit()){
          state.stateOfItem="existing"

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
          state.stateOfItem="success"

        }
        
        



        



        
      },

      addToFavorite:(state,action)=>{

        const exist=state.itemsInFavorite.find((item)=>{
          return item.id === action.payload

        })

        if(exist){

        }

        else
        {
          let items=[...state.items]

          let item=items.find((item)=>{
            return item.id === action.payload
  
          })

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

      getSumOfProducts:(state)=>{

        let sum=0
        state.itemsInCart.forEach(item => {
          sum+=item.price*item.quantity
          
        });
        return sum

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

export const {addToCart,removeFromCart,setType,setStateOfItem,addToFavorite,removeFromFavourite,increaseQuantity,getSumOfProducts,decreaseQuantity}=productsSlice.actions