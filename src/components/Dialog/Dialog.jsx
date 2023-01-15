import c from './Dialog.module.css'
import Dialogs from "./dialogs/dialogs";
import Messages from "./messages/messages";

const Dialog = () => {
    return(
        <div className={c.dialogWrapper}>
            <Dialogs />
            <Messages />
        </div>
    )
}

export default Dialog;