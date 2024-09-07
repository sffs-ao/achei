import { toast } from "react-toastify";

const MESSAGE_ERROR = "ERROR"
const MESSAGE_SUCCESS = "SUCCESS"
const MESSAGE_INFO = "INFO"
const MESSAGE_WARNING = "WARNING"

 

export function flashMessage(message, type) {
 
    switch (type) {
        
        case MESSAGE_ERROR:
         
        toast.error(message)
            break;
        case MESSAGE_SUCCESS:
            toast.success(message)
            break;
        case MESSAGE_INFO:
            toast.info(message)
            break;
        case MESSAGE_WARNING:
            toast.warning(message)
            break;
        default:
            toast.error("FALSO")
            break;
    }
}