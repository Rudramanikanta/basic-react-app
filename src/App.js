import './App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Course from './course';
class App extends Component{
 
  state={
    student:[
      {id:"kondal",RollNo:546,subject:"react",age:19,hobby:"reading",package:20000},
      {id:"Rudra",RollNo:547,subject:"Java",age:20,hobby:"playing",package:30000},
      {id:"Raghava",RollNo:550,subject:"react",age:23,hobby:"sleeping",package:20000},
      {id:"Amar",RollNo:552,subject:"Full stack",age:23,hobby:"eating",package:40000},
      {id:"vishnu",RollNo:510,subject:"python",age:19,hobby:"coding",package:40000},
      
    ],
    x:null,
    default:true,
  }


  render(){
    let x1=null;
   
    let requried;
    let data=null;
    const showMore=(value)=>{
     requried=  this.state.student.filter(val=>{
         return( val.RollNo===value)
      })
      console.log(requried[0].id)
      this.setState({
        x:requried[0]
      })
      
    }
    if(this.state.x!=null){
    x1=(<Course mystudent={this.state.x}/>);
    console.log(this.state.x);
    }
   const showDetails=()=>{
    
    let negdefault=this.state.default;
    this.setState(
      {
        default:!negdefault,
      }
    )
   }
    if(this.state.default===true){
     data= this.state.student.map((value)=>{
        return(<tr>
          <td>{value.id}</td>
          <td>{value.RollNo}</td>
          <td>{value.subject}</td>
          <td>
            <button className='btn btn-primary' onClick={showMore.bind(this,value.RollNo)}>More Details</button>
          </td>
        </tr>)
      })
    }
   
    return(
      <div>
        <buttton className="btn btn-primary" onClick={showDetails}>Show All</buttton>
        <table className='table table-danger table-stripped'>
        <thead>
          <tr>
            <th scope='col'>Id</th>
            <th scope='col'>RollNo</th>
            <th scope='col'>subject</th>
          </tr>
          </thead>
          <tbody>
          {data}
          </tbody>
         </table>
       {x1}
      </div>
     
    )
    }
    }
export default App;
