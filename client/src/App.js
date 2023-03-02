import './App.css';
import React, {useState} from "react";
import Axios from 'axios'

function App() {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [newInfo, setState] = useState({
  email: '',
  password: '',
  file: null
});
//PI
// const addUser = () => {
//   Axios.post('http://localhost:5000/auth', {
//   }
//   ).then(() => {
//     console.log('success')
//   })
// }

const handleChange = (e) => {
  setState({ ...newInfo, [e.target.name]: e.target.value })
}

const addUser  = ()=> {
  Axios.post('https://localhost:5000/auth/signup', {
    email:email,
    password:password
  }).then((response) => {
    console.log(response);
  })
}
const loginUser  = () => {
  console.log('loggin in')
  console.log(newInfo.email, newInfo.password)
  Axios.post('http://localhost:5000/auth/login', {
    email: newInfo.email,
    password: newInfo.password
  }).then((res) => {
    console.log(res);
  })
}
// const displayInfo = () => {
//   console.log(email + ' , ' + name +  ' , ' + password)
// }
  return (
    <div className="App">
      <header>
        <h1>My App</h1>
      </header>
   
      <section className='register'>
      <h1>register</h1>
        <label>Name:</label>
        <input type="text" 
          onChange={handleChange }
        ></input>
        <label>Email:</label>
        <input type="text"  
          onChange={(event) => {
          setEmail(event.target.value)
        }}></input>
        <label>Password:</label>
        <input 
          type="text"
          onChange={(event) => {
            setPassword(event.target.value)
          }}

          ></input>
        <button onClick={addUser}>Submit</button>
      </section>
      <section className='login'>
      <h1>login</h1>
        <label>Email:</label>
        <input 
          type="text"
          onChange={handleChange }
          name ="email"
          ></input>
        <label>Password:</label>
        <input 
          type="password"
          onChange={handleChange}
          name ="password"
          ></input>
        <button onClick ={loginUser}>GO!</button>
      </section>

    </div>
  );
}

export default App;
