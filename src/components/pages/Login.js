import  React, {Button, Component} from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import Login from '../LoginSection';
import LoginSection from '../LoginSection';
import SignIn from '../Form';


// function Login() {
//   return (
//     <>
//       <Navbar/>
//       <HeroSection />
//       <FormL />
//       <Footer />
//     </>
//   );
// }

// export default Login;

export default function LoginPage() {
    
    return(
        <>
        <Navbar/>
        {/* <h1>LOGIN</h1> */}
        <SignIn/>
        <LoginSection/>

        <Footer/>
        </>

    );
    
}
// export default LoginPage