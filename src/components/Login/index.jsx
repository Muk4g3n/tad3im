import StylizedImg from '../../Images/stylized_img.svg'
import Logo from'../../Images/Logo.svg'
import googleIcon from '../../Icons/google.svg'
import FacebookIcon from '../../Icons/facebook.svg'
import AppleIcon from '../../Icons/apple.svg'
import Ball from '../../Images/Ball.svg' 
import BluredBG from '../../Images/blurbg.svg' 
import Icosphere from '../../Images/icosphere.svg' 
import Pyramid from '../../Images/pyramid.svg' 
import Torus from '../../Images/Torus.svg' 
import './Login.css'



import * as Yup from "yup"
import CustomInput from 'components/CustomInput'
import { useSignInMutation } from 'app/backend'
// import { Helmet } from 'react-helmet-async'
import Auth from 'pages/Auth'
import { Link } from 'react-router-dom'
function Login() {
    

    const validationSchema = Yup.object().shape({
        username : Yup.string().required("This is a required field").min(6,"Please enter a valid Username or email"),
        password : Yup.string().required("This is a required field").matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
          ),
	});


    return ( 
        <div className="container">
            <div className="content-holder">


                <img className='bg-img' id='ball' src={Ball} alt="img"/>  
                <img className='bg-img' id='blured' src={BluredBG} alt="img"/>  
                <img className='bg-img' id='icosphere' src={Icosphere} alt="img"/>  
                <img className='bg-img' id='pyramid' src={Pyramid} alt="img"/>  
                <img className='bg-img' id='torus' src={Torus} alt="img"/>  

                <img id='logo' src={Logo} alt="logo"/>
                <div className="welcome">
                    <p> <span className='welcome-back' > Welcome back </span><br />
                        <span className='contribute' >contribute to the future</span></p>
                    
                </div>

                <div className="form-content">
                    <Auth useMutation={useSignInMutation}
                    validationSchema={validationSchema}
                    initialValues={{
                        username:"",
                        password:"",
                    }}  >
                        {({getFieldProps,getError, isLoading})=>(
                    <>
                    
                    <div className="input">
                    <CustomInput getFieldProps={getFieldProps}
                        className={"custom-input"}
						label={"Username or email"}
						placeholder={"username"}
						type={"text"}
						name={"username"}
						getError={getError}
                        required={true} />
                        </div>
                        
                        <div className="input">
                        <CustomInput getFieldProps={getFieldProps}
                            className={"custom-input"}
                            label={"Password"}
                            placeholder={"password"}
                            type={"password"}
                            name={"password"}
                            getError={getError}
                            required={true} />
                        </div>
                    

                    
                    <button type='submit' id='loginbtn' >Log in</button>
                    
                    </>
                    )}
                    </Auth>
                    <h6 id='sign-up' >don't have an account? <Link to="/signup"><span> Sign up</span></Link></h6>
                    <div className="login-with">
                        <p>
                        Or login with
                        </p>
                    </div>

                    <div className="icons">
                    <img className='icon' src={googleIcon} alt="google"/>
                    <img className='icon' src={FacebookIcon} alt="facebook"/>
                    <img className='icon' src={AppleIcon} alt="google"/>
                    </div>

                </div>

            </div>


            
            
            
            <div className="img-container">
                <img src= {StylizedImg} alt="img" />
            </div>
        </div>



     );
}

export default Login;