import React, { useState } from "react";
import "./Styles.css";
import axios from "axios";
import LockIcon from '@mui/icons-material/Lock';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import logo from './Images/illustration.png'
function ContactPage() {
  const [user, setUser] = useState({
    email: "",
    firstname: "",
    lastname: "",
    address: ""
  });

  const handleChange = (e) => {
   e.preventDefault();
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const register = () => {

    const { email, firstname, lastname, address } = user;

    if (email && firstname && lastname && address) {
      axios.post("http://localhost:4001/register", user).then((res) => {
        alert(res.data.message);
        
      })
    } else {
      alert("invalid input");
    }
  };

  return (
    <div className="container">
      <div className="form-container ">
        <div className="left-container ">
          <div className="left-inner-container">
            <p className="everytext">
              Get Everything You Need <br/> For Creating WordPress Websites.
            </p>
            <br />
            <img src={logo} alt="logo" />

            <p className="allin">All-in-one Multifunctional Subscribe Service Perfect for Launching All kinds of WordPress Projects!</p>
          </div>
         </div>
        <div className="right-container">
          <div className="right-inner-container">
            <form action="/">
              <h3 className="lg-view">SUBSCRIBE AND GET <br/>YOUR BONUS!</h3>
             

              <input
                type="text"
                name="email"
                value={user.email}
                placeholder="Email address"
                onChange={handleChange}
              />

              <input
                type="text"
                name="firstname"
                value={user.firstname}
                placeholder="First Name"
                onChange={handleChange}
              />

              <input
                type="text"
                name="lastname"
                value={user.lastname}
                placeholder="Last Name"
                onChange={handleChange}
              />

              <input
                type="text"
                name="address"
                value={user.address}
                placeholder="Address"
                onChange={handleChange}
              />

             
              <button onClick={register}> Stay Updated</button>

             
            </form>
           <div className="textp">
           <LockIcon/>
            <span className="textp1">Your Information will never be<br/>shared with any third party.</span></div>
          </div>
          
        </div>
       <span className="close"> <CloseSharpIcon /></span>
        
      </div>
    </div>
  );
}

export default ContactPage;
