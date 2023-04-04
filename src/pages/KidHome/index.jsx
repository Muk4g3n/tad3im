import Logo from "../../Images/Logo.svg";
import Person1 from "../../Images/Person1.png";
import Person2 from "../../Images/Person2.png";
import Person3 from "../../Images/Person3.png";
import Person4 from "../../Images/Person4.png";
import BigPerson from "../../Images/BigPerson.png";
import Shadow from "../../Images/Shadow.png";
import Shadow1 from "../../Images/Shadow1.png";
import Chat from "../../Images/Chat.svg";

import "./kidhome.css";

import * as Yup from "yup"
import CustomInput from 'components/CustomInput'
import Auth from 'pages/Auth'
import { useLoginChildMutation } from 'app/backend'

const validationSchema = Yup.object().shape({
  pin : Yup.number().required("This is a required field").min(6,"Please enter a valid Username or email"),
});

function KidHome() {
  return (
    <div className="main-content">
      <div className="left-side">
        <div className="board-holder">
          <div className="board">
            <div className="start-journey">لديك رحلة تعلم اليوم</div>
            <Auth
              useMutation={useLoginChildMutation}
              validationSchema={validationSchema}
              initialValues={{
                pin:0
            }}
            >
              
              {({getFieldProps,getError, isLoading})=>(
                    <>
                    
                    <CustomInput getFieldProps={getFieldProps}
                        className={""}
						            placeholder={"pin"}
						            type={"text"}
						            name={"pin"}
						            getError={getError}
                        required={true} />
                     
                        
                       
                        
                        
                    

                    
                    <button type='submit' className="start-btn" >لننطلق</button>
                    
                    </>
                    )}


            </Auth>
            

          </div>
        </div>

        <div className="group">
          <div className="people">
            <img id="person1" src={Person1} alt="person" />
            <img id="person2" src={Person2} alt="person" />
            <img id="person3" src={Person3} alt="person" />
            <img id="person4" src={Person4} alt="person" />
          </div>

          <img className="shadow" src={Shadow} alt="shadow" />
        </div>
      </div>
      <div className="right-side">
        <div className="logo-holder">
          <img id="logo" src={Logo} alt="logo" />
        </div>
        <div className="big-wobbly">
          <div className="chat">
            <div className="text">مرحبا سمير</div>
            <img src={Chat} alt="chat" className="chat-img" />
          </div>
          <img src={BigPerson} alt="person" className="bigperson" />
          <img src={Shadow1} alt="shadow" className="shadow1" />
        </div>
      </div>
    </div>
  );
}

export default KidHome;
