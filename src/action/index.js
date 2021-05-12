export const hotelowner=(user)=>{
    return{
      type:'HOTELOWNER',
      payload:user
    };
  };

  export const user=(user)=>{
    return{
      type:'USER',
      payload:user
    };
  };

  export const currentuser=(user)=>{
    return{
      type:'CURRENTUSER',
      payload:user
    };
  };

  export const hotelist=(user)=>{
    return{
      type:'HOTELLIST',
      payload:user
    };
  };

 
  export const hotel=(user)=>{
    return{
      type:'HOTEL',
      payload:user
    };
  };

  export const addfood=(user)=>{
    return{
      type:'ADDTOBASKET',
      payload:user
    };
  };

  export const removefood=(user)=>{
    return{
      type:'REMOVEBASKET',
      payload:user
    };
  };

  export const emptybasket=(user)=>{
    return{
      type:'EMPTY_FOODBASKET',
      payload:user
    };
  };

  export const location=(user)=>{
    return{
      type:'LOCATION',
      payload:user
    };
  };

  
  