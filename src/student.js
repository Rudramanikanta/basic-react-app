import {Component} from 'react';
import Course from './course';
class student extends Component{
    state={
        sid:101,sname:"srinivas",
        email:"rudra@gmail.com",
        phone:12345,
        city:"ongole",
        showStatus:false
    }
  
    showCourseDtails=()=>{
       
        
       let courseval=this.state.showStatus;
       console.log(!courseval)
        this.setState({
            showStatus:!courseval,
        })
       
    }

    render(){
        let data=null;
        if(this.state.showStatus===true){
            data=(  <div>
                  <p>Sid:{this.state.sid}</p>
                      <p>Sname:{this.state.sname}</p>
                      <p>email:{this.state.email}</p>
                      <p>phone:{this.state.phone}</p>
                      <p>city:{this.state.city}</p>
              </div>)
         }
            return(
                <div>
                    
                    <button onClick={this.showCourseDtails}>Student Info</button>
                   {data}
                    <div>
                    <Course/>
                    </div>
                </div>
            )
    }
}
export default student;