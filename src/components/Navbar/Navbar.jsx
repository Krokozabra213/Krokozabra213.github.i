import c from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const activeLink = ({isActive}) => isActive ? `${c.active}` : '';

const Navbar = () => {
  return (
    <nav className={c.nav}>
        <div className={c.wrapper}>
          <div className={c.item}>
            <NavLink className={activeLink} to="/">Профиль</NavLink>
          </div>
          <div className={c.item}>
            <NavLink className={activeLink} to="/messages">Сообщения</NavLink>
          </div>
          <div className={c.item}>
            <NavLink className={activeLink} to='/news'>Новости</NavLink>
          </div>
          <div className={c.item}>
            <NavLink className={activeLink} to='/timetable'>Расписание</NavLink>
          </div>
          <div className={c.item}>
            <NavLink className={activeLink} to='/settings'>Настройки</NavLink>
          </div>
        </div>
      </nav>
  )
}

export default Navbar;