import c from './dialog.module.css';
import {NavLink} from "react-router-dom";

let dialogsData = [{id: '1', name: 'Ваня'}, {id: '2', name: 'Петя'}, {id: '3', name: 'Денис'}, {id: '4', name: 'Артём'}];



const DialogsItem = (props) => {
    return (
        <div>
            <NavLink to={props.id} className={c.dialogsitem}>{props.name}</NavLink>
        </div>
    )
}

// const activeLink = ({isActive}) => isActive ? `${c.active}` : '';



const Dialogs = () => {
    return (
        <div className={c.dialogs}>
            <DialogsItem id={dialogsData[0].id} name={dialogsData[0].name} />
            <DialogsItem id={dialogsData[1].id} name={dialogsData[1].name} />
            <DialogsItem id={dialogsData[2].id} name={dialogsData[2].name} />
            <DialogsItem id={dialogsData[3].id} name={dialogsData[3].name} />
        </div>
    )
}

export default Dialogs;

