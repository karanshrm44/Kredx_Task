import moment from 'moment';

const init={
       invoicename:'',
        issuedate:moment(),
        repaymentdate:moment(),
        amt:''
    
}

const Invoicereducer=(state=init,action)=>{

    switch(action.type)
    {
        case "INVOICENAME":
        return {
            ...state,
            invoicename:action.value
        }
        case "ISSUEDATE":
        return {
            ...state,
            issuedate:action.value
        }
        case "REPAYMENTDATE":
        return {
            ...state,
            repaymentdate:action.value
        }
        case 'AMT':
        return {
            ...state,
            amt:action.value
        }
    }

    return state;
}


export default Invoicereducer;