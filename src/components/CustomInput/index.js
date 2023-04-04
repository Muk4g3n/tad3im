import { format } from "date-fns";
// import MyPassword from "./MyPassword";
// import DraggableMap from "./DraggableMap";

import'./style.css'

export default function CustomInput({
    getFieldProps,
    type,
    label,
    placeholder,
    className,
    name,
    getError,
    handleChange,
    required = false,
    ...restProps
}) {
    const error = getError(name);
    const CurrentInput = () => {
        switch (type) {
            case "number":
            case "text":
            case "email":
            case "password":
            case "file":
                return (
                    
                        <>
                    
                    <input key={type} className={className} type={type}
                     placeholder={placeholder} name={name}  {...getFieldProps(name)} />
                    </>
                    
                    // <input
                    //     className={"woocommerce-Input woocommerce-Input--text input-text line-height-xl"}
                    //     id={name}
                    //     placeholder={placeholder}
                    //     type={type}
                    //     {...getFieldProps(name)}
                    // />
                );
            

            default:
                return null;
        }
    };
    return (
       
            <>
             { label && <label className="custom-label" htmlFor={name}>{label  }  {required ? <strong>*</strong>: ""}</label>}
            {CurrentInput()}
            {error && (
                <small id={name + "Help"} className="error">
                    {error}
                </small>
            )}
            </>
    );
}
