import React,{Component} from 'react';
import DatePicker from 'react-datepicker'
import './Deal.css';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import  Miniinvoice from './MiniInvoice/MiniInvoice';
import {connect} from 'react-redux';


class Deal extends Component {
  constructor(props)
  {
      super(props);
      this.state={
         isLoad:false,
         error:""
         
      }
     
  }
  

  

  
  componentDidUpdate(){
      this.load();
  }
  componentDidMount(){
      this.load();
  }
 
  load=()=>{
    let {invoicename,amt}=this.props;
      if(amt && invoicename && !this.state.isLoad)
      {   let change=!this.state.isLoad
          this.setState({isLoad:change})
          
      }
      
     
  }
  placeholderAmount=()=>
  {
      if(this.props.amount)
      {
          return "";
      }
      else
      {
          return "Required";
      }
  }

  placeholderInput=()=>
  {
      if(this.props.name)
      {
          return "";
      }
      else
      {
          return "Required";
      }
  }

  render() {
   

      return(
          <div>
                    
                    <div style={{display:'flex'}}>
                        <div style={{flex:1}}>
                            <p className="dealupper">CREATE A DEAL</p>
                            <label>NAME *<br></br>
                                <input className="app" type="text" value={this.props.name}
                                       placeholder={this.placeholderInput()}
                                       onChange={this.props.handleChange} />
                           </label><br></br>

                            <label>DATE *<br></br>
                                    <DatePicker  className="date"  todayButton={"Vandaag"} 
                                    dateFormat="DD//MM/YYYY"  selected={this.props.startdate}  
                                    onChange={this.props.handleDate}/>
                            </label>

                            <label>AMOUNT *<br></br>
                                <input className="app" type="number"  value={this.props.amount}
                                    onChange={this.props.handleAmount}  placeholder={this.placeholderAmount()}/>
                            </label><br></br>
                    </div>
                    <div style={{flex:1}}>
                           {this.state.isLoad ?  <Miniinvoice /> :null }
                    </div>
                </div>
                    
            

            
                <button className="button" disabled={!(this.props.amount && this.props.name)} onClick={this.props.clicked}>Next</button>
          </div>
      )
  }
}

const mapStateToProps=(state)=>{
    return{
        name:state.del.name,
        startdate:state.del.startdate,
        amount:state.del.amount,
        isLoad:state.del.isLoad,
        invoicename:state.inv.invoicename,
        issuesdate:state.inv.issuedate,
        repaymentdate:state.inv.repaymentdate,
        amt:state.inv.amt
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        handleChange:(e)=>dispatch({type:"NAME",value:e.target.value}),
        handleAmount:(e)=>dispatch({type:'AMOUNT',value:e.target.value}),
        handleDate:(date)=>dispatch({type:"DATE",value:date})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Deal);