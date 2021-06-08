import React, { useState } from 'react';
 
function UseStateForm() {
  const [data, setData] = useState({
    username: '',
    password: ''
  });
  const [form, setForm] = useState({
    username: '',
    password: ''
  });
  const [submit, submitted] = useState(false);
 
  const printValues = e => {
    e.preventDefault();
    setForm({
      username: data.username,
      password: data.password
    });
    submitted(true);
  };
 
  const updateField = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };
 
  return (
    <div>
    <form onSubmit={printValues}>
      <label style={{background: "LightCyan", marginBottom: 10, color: "white"}}>
        Username:
        <input
          value={data.username}
          name="username"
          onChange={updateField}
          style={{color: "Cyan"}}
        />
      </label>
      <br />
      <label style={{background: "LightCyan", marginBottom: 10, color: "white"}}>
        Password:
        <input
          value={data.password}
          name="password"
          type="password"
          onChange={updateField}
          style={{color: "Cyan"}}
        />
      </label>
      <br />
      <button style={{backgroundColor: "Cyan", color: "white", border: "none", borderRadius: 5, marginBottom: 70}}>Submit</button>
    </form>
            
        <p style={{color: "Cyan"}}>{submit?form.username:null}</p>
            
        <p style={{color: "Cyan"}}>{submit?form.password:null}</p>
 
  </div>
  );
}
 
export default UseStateForm;
