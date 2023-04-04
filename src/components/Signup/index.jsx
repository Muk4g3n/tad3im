import StylizedImg from "../../Images/stylized_img.svg";
import Logo from "../../Images/Logo.svg";
import googleIcon from "../../Icons/google.svg";
import FacebookIcon from "../../Icons/facebook.svg";
import AppleIcon from "../../Icons/apple.svg";
import Icosphere from "../../Images/icosphere.svg";
import Pyramid from "../../Images/pyramid.svg";
import Torus from "../../Images/Torus.svg";
import { Link } from "react-router-dom";
import './Signup.css'

import Auth from "pages/Auth";
import { useSignUpMutation } from "app/backend";
import * as Yup from "yup"
// import {Helmet} from 'react-helmet-async'
import CustomInput from "components/CustomInput";
import { Field } from "formik";

function Signup() {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("This is a required field"),
    phonenumber: Yup.string().required("This is a required field")
    .min(9,"Please enter a valid phone number"),
    email : Yup.string().email().required("This is a required field"),
    password : Yup.string().required("This is a required field").matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  });


  return (
    <div className="sigin-container">
      <div className="signin-img-container">
        <img src={StylizedImg} alt="img" />
      </div>

      <div className="signin-content-holder">
        <img className="bg-img" id="signin-icosphere" src={Icosphere} alt="img" />
        <img className="bg-img" id="signin-pyramid" src={Pyramid} alt="img" />
        <img className="bg-img" id="signin-torus" src={Torus} alt="img" />

        <img id="signin-logo" src={Logo} alt="logo" />
        <div className="signin-welcome">
          <p>
            <span className="signin-welcome-back"> Sign up for free </span>
            <br />
            <span >This is the future of Education. Start now</span>
          </p>
        </div>

        <div className="signin-form-content">
          <Auth
          useMutation={useSignUpMutation}
          validationSchema={validationSchema}
          initialValues = {{
            fullname:"",
            phonenumber:"",
            email:"",
            password:""
          }}
          >
            
            {
            ({getFieldProps,getError,isLoading,isSubmitting})=>(
              <>
              <div className="signin-group">
            <div className="signin-input">
              <CustomInput getFieldProps={getFieldProps}
              className={"custom-input"}
              getError={getError}
              name={"fullname"}
              label={"Full Name"}
              placeholder={"Full Name"}
              type={"text"}
              required={true}
              />
  
            </div>

            <div className="signin-input">
            <CustomInput getFieldProps={getFieldProps}
              className={"custom-input"}
              getError={getError}
              name={"phonenumber"}
              label={"Phone Number"}
              placeholder={"xxxx xxxx xx"}
              type={"text"}
              required={true}
              />
            </div>

            </div>
            <div className="signin-group">
            <div className="signin-input">
            <CustomInput getFieldProps={getFieldProps}
              className={"custom-input"}
              getError={getError}
              name={"email"}
              label={"Email Address"}
              placeholder={"email@xyz.com"}
              type={"email"}
              required={true}
              />
            </div>

            <div className="signin-input">
            <CustomInput getFieldProps={getFieldProps}
                            className={"custom-input"}
                            label={"Password"}
                            placeholder={"password"}
                            type={"password"}
                            name={"password"}
                            getError={getError}
                            required={true} />
            </div>
            </div>
          <div className="signin-terms">
            {/* <input type="checkbox" name="check" id="" /> */}
            <Field type="checkbox" name="check"  required={true} />
            <p>I accept the Terms and Conditions and agree to the terms of privacy policy. <strong id="requierd" >*</strong></p>
          </div>
          <div className="signin-buttons">
          <button disabled={isSubmitting}  type='submit' id="signin-loginbtn">Confirm</button>
            <h6>already have an account? <Link to="/login"><span> Log in</span></Link></h6>
          </div>
              </>

            )
            
            
              }
          
          </Auth>
          <div className="signin-bottom">
          <div className="signin-sigin-with">
            <p>Or sigin with</p>
          </div>

          <div className="signin-icons">
            <img className="signin-icon" src={googleIcon} alt="google" />
            <img className="signin-icon" src={FacebookIcon} alt="facebook" />
            <img className="signin-icon" src={AppleIcon} alt="google" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
