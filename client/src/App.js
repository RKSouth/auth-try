import './App.css';
import React, {useState} from "react";

function App() {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const displayInfo = () => {
  console.log(name + ' , ' +  ' , ' + password)
}
  return (
    <div className="App">
      <header>
        <h1>My App</h1>
      </header>
   
      <section className='register'>
      <h1>register</h1>
        <label>Name:</label>
        <input type="text" 
          onChange={(event) => {
          setName(event.target.value)
        }}
        ></input>
        <label>Email:</label>
        <input type="text"  
          onChange={(event) => {
          setName(event.target.value)
        }}></input>
        <label>Password:</label>
        <input 
          type="password"
          onChange={(event) => {
            setName(event.target.value)
          }}

          ></input>
        <button>Submit</button>
      </section>
      <section className='login'>
      <h1>login</h1>
        <label>Email:</label>
        <input 
          type="text"
          onChange={(event) => {
            setName(event.target.value)
          }}
          ></input>
        <label>Password:</label>
        <input 
          type="password"
          onChange={(event) => {
          setName(event.target.value)
          }}
          ></input>
        <button onClick ={displayInfo}>GO!</button>
      </section>

    </div>
  );
}

export default App;
