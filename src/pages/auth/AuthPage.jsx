import logo from '../../assets/img/fav.png'
import './authPage.css'

export const AuthPage = () => {
  return (
    <div className="container">
    <div className="logo">
        <img src={logo} alt="Logo" className='logo'/>
    </div>
    <h1>Welcome</h1>
    <form >
        <input type="email" placeholder="Email"  />
        <input type="password" placeholder="Password" />
        <button type="submit">Log in</button>
    </form>
    <div className="link">
        <a href="/register" className='registro'>¡Regístrate ahora!</a>
    </div>
</div>
);

}
