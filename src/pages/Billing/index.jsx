import * as Yup from "yup"
import CustomInput from 'components/CustomInput'
import { useRegisterChildMutation } from 'app/backend'
import StylizedImg from '../../Images/stylized_img.svg'
// import { Helmet } from 'react-helmet-async'
import Auth from 'pages/Auth'

import './billing.css'

function Billing() {

    const validationSchema = Yup.object().shape({
        childName : Yup.string().required("This is a required field").min(6,"Please enter a valid child Name"),
        voucher : Yup.string().required("This is a required field").matches(
            /^(([a-z]|[A-Z]){16})/,
            "Incorrect Voucher"
          ),
	});


    return ( <div className="container"> 
                    <div className="content-holder">
                        <div className="form-content">
                            <Auth useMutation={useRegisterChildMutation}
                                validationSchema={validationSchema}
                                initialValues={{
                                    childName:"",
                                    voucher:"",
                                }}  >
                                    {({getFieldProps,getError, isLoading})=>(
                                <>
                                
                                <div className="input">
                                <CustomInput getFieldProps={getFieldProps}
                                    className={"custom-input"}
                                    label={"Child Name"}
                                    placeholder={"child"}
                                    type={"text"}
                                    name={"childName"}
                                    getError={getError}
                                    required={true} />
                                    </div>
                                    
                                    <div className="input">
                                    <CustomInput getFieldProps={getFieldProps}
                                        className={"custom-input"}
                                        label={"Add your voucher"}
                                        placeholder={"voucher"}
                                        type={"text"}
                                        name={"voucher"}
                                        getError={getError}
                                        required={true} />
                                    </div>
                                

                                
                                <button type='submit' id='loginbtn' >Add</button>
                                
                                </>
                                )}
                                </Auth>
                            </div>
                    </div>
                    <div className="img-container">
                        <img src= {StylizedImg} alt="img" />
                    </div>
    </div>);
}

export default Billing;