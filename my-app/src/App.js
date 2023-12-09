import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";

function App() {
  const [users,setUsers]=useState([
    {
      name:'mehmet',
      email:'mehmet@gmail.com'
  },
  {
    name:'büşra',
    email:'bus@gmail.com'
}
  ])

  const addUser=(user) => {
    setUsers([...users,user])
  }

  return (
    <div className="p-3 flex-column gap-3 ">
      <UserForm addUser={addUser}/>
      <UserList users={users} />
      
    </div>
  );
}

export default App;
