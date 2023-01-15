import c from './Header.module.css'

const Header = () => {
  return (
    <header className={c.header}>
      <img className={c.img} src='https://cdn-icons-png.flaticon.com/512/8471/8471668.png'></img>
      <h3>Социальная сеть Бгиту</h3>
    </header>
  )
}


export default Header;