import { format } from "date-fns";
// import MyPassword from "./MyPassword";
// import DraggableMap from "./DraggableMap";

export default function MyInput({
    getFieldProps,
    type,
    label,
    placeholder,
    className,
    name,
    getError,
    required = false,
    ...restProps
}) {
    const error = getError(name);
    const CurrentInput = () => {
        switch (type) {
            case "number":
            case "text":
            case "email":
                return (
                    <input
                        className={"woocommerce-Input woocommerce-Input--text input-text line-height-xl"}
                        id={name}
                        placeholder={placeholder}
                        type={type}
                        {...getFieldProps(name)}
                    />
                );
            // case "password":
            //     return <MyPassword name={name} placeholder={placeholder} getFieldProps={getFieldProps} />;
            // case "date":
            //     const { value: v, ...rest } = getFieldProps(name);
            //     return (
            //         <input
            //             className={"woocommerce-Input woocommerce-Input--text input-text line-height-xl"}
            //             id={name}
            //             placeholder={placeholder}
            //             type={type}
            //             value={format(new Date(v), "yyyy-MM-dd")}
            //             {...rest}
            //         />
            //     );
            // case "textarea":
            //     return (
            //         <textarea
            //             id={name}
            //             name={name}
            //             {...getFieldProps(name)}
            //             placeholder={placeholder}
            //             rows="4"
            //             cols="5"
            //             {...restProps}
            //         ></textarea>
            //     );

            // case "select":
            //     return (
            //         <select
            //             className="woocommerce-Input woocommerce-Input--text input-text line-height-xl"
            //             id={"MyInput" + name}
            //             placeholder={placeholder}
            //             {...getFieldProps.getFieldProps(name)}
            //             disabled={getFieldProps.loading}
            //         >
            //             <option value="">--Not selected--</option>
            //             {getFieldProps.options.map((op) => (
            //                 <option key={op._id} value={op._id}>
            //                     {op.name}
            //                 </option>
            //             ))}
            //         </select>
            //     );

            // case "map":
            //     return (
            //         <DraggableMap
            //             className={""}
            //             id={name}
            //             placeholder={placeholder}
            //             type={type}
            //             {...getFieldProps(name)}
            //         />
            //     );

            default:
                return null;
        }
    };
    return (
        <div className={"woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide " + className}>
            <label className="mb-1 font-weight-medium " htmlFor={name} style={{ fontSize: "1.2em" }}>
                <strong>{label}</strong>&nbsp;{required && <span className="required">*</span>}
            </label>
            {CurrentInput()}
            {error && (
                <small id={name + "Help"} className="text-danger">
                    {error}
                </small>
            )}
        </div>
    );
}
