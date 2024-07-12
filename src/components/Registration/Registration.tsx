import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Registration.module.css';
import { registerUser } from '../../../store/user/registration';

const Registration = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleRegistration = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(registerUser({ email, password, name }));
  };

  return (
    <div className={styles.wrapper}>
      <form action="">
        <h1 className={styles.title}>Регистрация</h1>
        <div className={styles.inputBox}>
          <input
            type="text"
            placeholder="Имя"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
          onClick={(e) => handleRegistration(e)}
        >
          Зарегистрироваться
        </button>
        <div className={styles.registration}>
          <p>Есть аккаунт? <Link to="/auth">Войти</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Registration;