import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectToken } from '../../../store/autorization';
import { selectArrFiles } from '../../../store/files/files';
import { exitUser } from '../../../store/exit';
import styles from './Main.module.css';

const Main = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const navigate = useNavigate();
  const files = useSelector(selectArrFiles);
  console.log("🚀 ~ Main ~ files:", files)

  const handleExit = (e) => {
    e.preventDefault();
    navigate('/', { replace: false });
    dispatch(exitUser({ token }));
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.nav}>
        <button>Добавить файл</button>
        <button
          className={styles.btn}
          onClick={(e) => handleExit(e)}
        >
          Выход
        </button>
      </div>
      <div className={styles.files}>files</div>
    </div>
  )
}

export default Main;