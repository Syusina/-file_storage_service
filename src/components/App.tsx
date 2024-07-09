import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Authorization from './Authorization/Authorization';
import Main from './Main/Main';
import Registration from './Registration/Registration';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Registration />} />
          <Route path='/auth' element={<Authorization />} />
          <Route path='/main' element={<Main />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
