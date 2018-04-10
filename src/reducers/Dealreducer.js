import moment from 'moment'

const initialState={
    name:'',
    startdate:moment(),
    amount:'',
    isLoad:false,
   
}


const Dealreducer=(state=initialState,action)=>{
    switch(action.type)
    { case "NAME":
       return {
           ...state,
           name:action.value
       }
       case "AMOUNT":
       return {
           ...state,
           amount:action.value
       }
       case "DATE":
       console.log(action.value);
       
     
      // console.log(ndate);
       return {
           ...state,
        startdate:action.value
       }

    }
    return state;
}


export default Dealreducer;