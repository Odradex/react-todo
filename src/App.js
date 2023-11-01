import ToDo from './components/ToDo';
import Login from './components/LogInPage'
import Signup from './components/Signup';

import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
      <div>
        <button onClick={() => navigate(-1)}>go back</button>
        <Routes>
          <Route exact path="/" element={<ToDo/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
        </Routes>
      </div>
  );
}

export default App;
