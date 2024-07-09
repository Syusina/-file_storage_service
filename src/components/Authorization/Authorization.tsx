import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { authorizationUser, selectToken } from '../../../store/autorization';
import styles from './Authorization.module.css';

const Authorization = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  console.log("🚀 ~ Authorization ~ token:", token)

  const handleAuthorization = (e) => {
    e.preventDefault();
    dispatch(authorizationUser({ email, password }));
    
    if (token) {
      navigate('/main', { replace: false });
    }
  };

  return (
    <div className={styles.wrapper}>
      <form action="">
        <h1 className={styles.title}>Авторизация</h1>
        <div className={styles.inputBox}>
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputBox}>
          <input
            type="password"
            placeholder="Пароль"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type='submit'
          className={styles.btn}
          onClick={(e) => handleAuthorization(e)}
        >
          Войти
        </button>
        <div className={styles.registration}>
          <p>Нет аккаунта? <Link to="/">Зарегистрироваться</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Authorization;