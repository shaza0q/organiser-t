import {BrowserRouter, Routes, Route} from 'react-router-dom'
import OrganiserHome from './Components/OrganiserHome';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OrganiserHome/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
