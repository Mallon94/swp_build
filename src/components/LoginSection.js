import '../App.css';
import { Button } from './Button';
import './Login.css';
import { useForm as Form } from "react-hook-form";
import  React, {  useState, Component } from 'react';
import { render } from 'react-dom';

function LoginSection() {

  const [state,setState]=useState(false);
  let url="/Portal"
 
  return (
    <div className='hero-container'>
                <a href={url}> <h1>LOGIN</h1></a>


      {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
       We'll never share your email with anyone else.
     </Form.Text>
        </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicCheckbox">
           <Form.Check type="checkbox" label="Check me out" />
         </Form.Group>
         <Button variant="primary" type="submit">
           Submit
         </Button> */}
    </div>
  
  )
  
}

export default LoginSection;
