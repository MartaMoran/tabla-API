import React from 'react';
import logo from './logo.svg';
import './App.css';
import UsersClass from './components/Table';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={detailUsers: {}}
   
  }

  listUser=(result)=>{
    this.setState({detailUsers: result})
    console.log(result)
  }

  render(){
  return (
    <div>
      <table>
      <thead>
        <tr>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
        </thead>   
        <tbody>        
      <UsersClass setlist={this.listUser}/>
      </tbody> 
      </table>
      <div>
     <ul><li>{this.state.detailUsers.id}    {this.state.detailUsers.email}     {this.state.detailUsers.first_name}     {this.state.detailUsers.last_name}  <img src={this.state.detailUsers.avatar} ></img></li></ul>
      </div>
    </div>  
     
  );
}
}

export default App;
