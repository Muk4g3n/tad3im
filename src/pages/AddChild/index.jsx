import StylizedImg from "../../Images/stylized_img.svg";
import Logo from "../../Images/Logo.svg";
import Icosphere from "../../Images/icosphere.svg";
import Pyramid from "../../Images/pyramid.svg";
import Torus1 from "../../Images/Torus1.svg";
import Plus from "../../Images/plus.png";
import NoProfil from "../../Images/noprofil.jpg";
import { useAddChildMutation } from 'app/backend'
// import { Link } from "react-router-dom";
import './addchild.css'

// import Auth from "pages/Auth";
// import { useSignUpMutation } from "app/backend";
// import * as Yup from "yup"
import { useState } from "react";
import Auth from "pages/Auth";
// import {Helmet} from 'react-helmet-async'
// import CustomInput from "components/CustomInput";
import { Field } from "formik";

function AddChild() {
  

let fields = ['Pré','1AP','2AP','3AP','4AP','5AP'];

const [selectedFile, setSelectedFile] = useState(null);
const [selectedYear, setSelectedYear] = useState(null);


const updateImageDisplay = (e)=>{
  console.log("hello");
  setSelectedFile(e.target.files[0]);
}

// const inputClick = ()=>{
//   console.log("hello");
//   //  
// }

  return (
    <div className="sigin-container">
      <div className="signin-img-container">
        <img src={StylizedImg} alt="img" />
      </div>

      <div className="add-content-holder">
        <img src={Pyramid} alt='img' className="bg-img bg_img_pyramid"/>
        <img src={Icosphere} alt='img' className="bg-img bg_img_icosphere"/>
        <img src={Torus1} alt='img' className="bg-img bg_img_torus"/>
        <div className="title_holder">
          <div className="title">
            <h1>Create a space for your child</h1>
            <p>This is the future of Education. Start now</p>
          </div>

          <img src={Logo} alt='img' id="add-logo" />
        </div>

        <Auth   
          useMutation={useAddChildMutation}

        >

                {({getFieldProps,getError, isLoading})=>(
                    <>

              {fields.map((field,i)=>{
              
              return( <div key={i} onClick={()=>{ setSelectedYear(field)}} className="yearToChoose" >

                {/* <CustomInput getFieldProps={getFieldProps}
                    key={i}
                    value={ selectedYear === field ? field : ""}
                    className={`${selectedYear === field ? "active" : ""}`}
                    placeholder={field}
                    type={"text"}
                    name={"selectedYear"}
                    getError={getError}
                    required={true} /> */}

              <Field key={i} placeholder={field}
                value={ selectedYear === field ? field : ""} id={`${selectedYear === field ? "active" : ""}`}
                    type="text" />
                
                </div>);
              })}


            

            <div className="form-flex-content">
              <div className="add_image">
                  <div className="upload">
                    <img className="noprofil"  src={ selectedFile != null ? URL.createObjectURL(selectedFile) : NoProfil} alt="hello" />
                    <div className="round">
                      
                      <Field type="file" accept="image/*" onChange={updateImageDisplay} />
                      <img src={Plus} alt="plus" />
                    </div>
                  </div>
              </div>


              {/* <CustomInput getFieldProps={getFieldProps}
                      className={"name"}
                      type={"text"}
                      name={"childName"}
                      placeholder={"Child Name"}
                      getError={getError}
                      required={true} /> */}
              <Field className="name" placeholder="Child Name"  type="text" />

              <div className="add_btn">
              <button id="add-loginbtn" type="submit" > Lets go</button>
              </div>
              
            </div>
            </>
                )}
        </Auth>

      </div>
    </div>
  );
}

export default AddChild;
