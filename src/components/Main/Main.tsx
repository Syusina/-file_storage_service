import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectToken } from '../../../store/autorization';
import { fetchFiles, selectArrFiles } from '../../../store/files/files';
import { exitUser } from '../../../store/exit';
import styles from './Main.module.css';
import Upload from './Upload/Upload';
import { useEffect } from 'react';

const Main = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const navigate = useNavigate();
  const files = useSelector(selectArrFiles);
  console.log("🚀 ~ Main ~ files:", files)

  const handleExit = (e: any) => {
    e.preventDefault();
    navigate('/', { replace: false });
    dispatch(exitUser({ token }));
  };

   useEffect(() => {
    dispatch(fetchFiles({ token }));
   }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.nav}>
        <Upload token={token}/>
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