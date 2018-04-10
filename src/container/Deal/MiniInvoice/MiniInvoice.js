import React,{Component} from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import './MiniInvoice.css';

class  Miniinvoice extends Component{
    render(){
     // console.log(this.props.issuedate);
      let date=this.props.issuedate;
      let issuedate=moment(date).format('DD-MM-YYYY');
      let date1=this.props.repaymentdate;
      let repaymentdate=moment(date1).format('DD-MM-YYYY');
    return(
        <div>
                <p className="upperminiInvoice">VALUES IN INVOICE FORM</p>
                <div className="adjustMini">
                
                    <label>ISSUE DATE*<br></br>
                        <p > {issuedate}</p>
                    </label>

                    <label>REPAYMENT DATE*<br></br>
                        <p> {repaymentdate} </p>
                    </label>

                    <label>AMOUNT*
                        <p> {this.props.amt}</p>
                    </label>
                </div>  
        </div>
    )
}
}

const mapStateToProps=state=>{
    return {
        issuedate:state.inv.issuedate,
        repaymentdate:state.inv.repaymentdate,
        amt:state.inv.amt
    }
}

export default connect(mapStateToProps,null)(Miniinvoice);