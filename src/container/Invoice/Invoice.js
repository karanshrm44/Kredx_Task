import React,{Component} from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import {connect} from 'react-redux';
import './Invoice.css';

class Invoice extends Component {
    
    
    placeHolderName=()=>{
        if(this.props.invoicename)
        {
            return "";
        }
        return "Required";
    }
    placeHolderAmount=()=>{
        if(this.props.amt)
        {
            return "";
        }
        return "Required";
    }

    render(){
        console.log("A",this.props.invoicename)
        console.log("amount",this.props.amt);
        console.log("invoice",this.props.invoicename);
       
        return(
            
            <div>

                <p className="invoiceUpper">CREATE A INVOICE</p>
                <form>
                    <div style={{display:'flex'}}>
                        <div style={{flex:1}}>
                        
                            <label >INVOICE NAME *<br></br>
                                <input className="invoiceapp" type='text'  value={this.props.invoicename} 
                                onChange={this.props.handlechange} placeholder={this.placeHolderName()} />
                            </label><br></br><br></br>

                            <label>ISSUE DATE *<br></br>
                                <DatePicker className="date"   todayButton={"Vandaag"} dateFormat="DD//MM/YYYY" 
                                selected={this.props.issuesdate}  onChange={this.props.handleIssueDate}/>
                            </label>

                        </div>
                        <div style={{flex:1}}>

                            <label>REPAYMENT DATE *<br></br>
                                <DatePicker  className="date" todayButton={"Vandaag"} dateFormat="DD//MM/YYYY"  
                                selected={this.props.repaymentdate}  onChange={this.props.handleRepaymentDate}/>
                            </label><br></br>

                            <label>AMOUNT *<br></br>
                                <input className="invoiceapp" type='number'  value={this.props.amt} 
                                onChange={this.props.handleAmount} placeholder={this.placeHolderAmount()} />
                            </label><br></br>

                        </div>
                    </div>
                    
                
                    <button className="button" disabled={!(this.props.invoicename  && this.props.amt)} 
                    onClick={this.props.clicked}>Previous</button>
                    
                </form>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        invoicename:state.inv.invoicename,
        issuesdate:state.inv.issuedate,
        repaymentdate:state.inv.repaymentdate,
        amt:state.inv.amt
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        handlechange:(e)=>dispatch({type:"INVOICENAME",value:e.target.value}),
        handleIssueDate:(date)=>dispatch({type:"ISSUEDATE",value:date}),
        handleRepaymentDate:(date)=>dispatch({type:"REPAYMENTDATE",value:date}),
        handleAmount:(e)=>dispatch({type:"AMT",value:e.target.value})


    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Invoice);