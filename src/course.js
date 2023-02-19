import {Component} from 'react';

class Course extends Component{

    render(){
        console.log(this.props.mystudent)
        return(
            <div>
                {this.props.id}
                <table className='table table-stripped table-dark'>
                <thead>
                 <tr>
                    <th scope='col'>Id</th>
                    <th scope='col'>RollNo</th>
                    <th scope='col'>subject</th>
                    <th>age</th>
                    <th>hobby</th>
                    <th>package</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.mystudent.id}</td> 
                        <td>{this.props.mystudent.RollNo}</td>
                        <td>{this.props.mystudent.subject}</td>
                        <td>{this.props.mystudent.age}</td>
                        <td>{this.props.mystudent.hobby}</td>
                        <td>{this.props.mystudent.package}</td>
                    </tr>
                </tbody>
                </table>
            </div>
        )
        }
}
export default Course;