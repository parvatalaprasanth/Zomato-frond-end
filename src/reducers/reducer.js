const initialstate={
    user:null,
    hotelowner:null,
    hotellist:[],
    hotel:null,
    curentuser:null,
    foodbasket:[],
    location:null
}



const mainreducer=(state=initialstate,action)=>{
    switch(action.type){
    case "HOTELOWNER":
        return{
            ...state,hotelowner:action.payload
        }
    case "USER":
        return{
            ...state,user:action.payload
        }
    case "CURRENTUSER":
        return{
            ...state,curentuser:action.payload
        }
    case "HOTELLIST":
        return{
            ...state,hotellist:action.payload
        }
    case "HOTEL":
        return{
            ...state,hotel:action.payload
        }
    case "ADDTOBASKET":
        var n=state.foodbasket;
        if(n[0]){
            if(n[0].email!=action.payload.email){
                if(window.confirm("You cannot shop at multiple hotels. slecting this make your previous cart empty")){
                    n=[]
                }
                else{
                    return state
                }
                
            }
        }
        n.push(action.payload)
        return {
            ...state,foodbasket:n
        }
    case "REMOVEBASKET":
        const index = state.foodbasket.findIndex(
            (basketItem) => basketItem.name === action.payload.name
          );
          let newBasket = [...state.foodbasket];
    
          if (index >= 0) {
            newBasket.splice(index, 1);
    
          } else {
            console.warn(
              `Cant remove product (id: ${action.payload.name}) as its not in basket!`
            )
          }

    
          return {
            ...state,
            foodbasket: newBasket
          }
    case 'EMPTY_FOODBASKET':
        return {
            ...state,
            foodbasket: []
        }
    case 'LOCATION':
        return {
            ...state,
            location:action.payload
        }
      default:
        return state
    }
  }; 

export default mainreducer;
