import React from 'react';
import {getUsers, getUserInfo} from '../api/api';
import {Spinner} from 'reactstrap'
class UsersClass extends React.Component {
    constructor(props) {
        super(props);
      this.state={users:''}
      
      
    }
     async componentDidMount(){
          
       const users= await getUsers();
       console.log(users)
        this.setState({...this.state,users: users})
      }

      
       handleClick=async (id)=>{
        const result2= await getUserInfo(id)
        console.log(result2)
        this.props.setlist(result2)
      
      }
    
    
    render(){
      const emptyState=this.state.users==='';
        return(
          <>
          { emptyState
          ?<p> <span> <Spinner color="info" /></span></p>
           : this.state.users.map((value)=>
           
             <tr>
                    <td>{value.email}</td>
                    <td>{value.first_name}</td>
                    <td>{value.last_name}</td>
                    <td> <button onClick={()=>this.handleClick(value.id)} setlist={this.props.setlist}>Detalles Usuario</button> </td>
                </tr>
              
            )}
            </>

            )}
    
}

export default UsersClass