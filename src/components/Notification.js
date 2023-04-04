//import { Alert, Button } from "react-bootstrap";
import { useNotification } from "hooks";
const icons = { success: "far fa-thumbs-up", danger: "fas fa-exclamation-triangle" };
export default function Notification() {
    const { notification, closeNotification } = useNotification();
    const handleClose = (event, reason) => {
        if (reason === "clickaway") return;
        closeNotification();
    };

    return (
        notification.open && (
            <div
                className={"alert alert-" + notification.type}
                style={{ position: "fixed", zIndex: "10000", bottom: "4em", right: "4em" }}
            >
                <div className="wpb_wrapper">
                    <p>
                        <button className="close" type="button" onClick={handleClose} style={{ fontSize: "inherit" }}>
                            X
                        </button>
                        <strong>
                            <i className={icons[notification.type]}></i> {notification.title}:
                        </strong>{" "}
                        {notification.description}
                    </p>
                </div>
            </div>
        )
    );
}
