import {} from 'react';
import NavExample from '../src/components/Nav';
import { Outlet } from 'react-router-dom';
import './css/app.css';

function App() {
  return (
    <>
        <NavExample />
        <Outlet/>
    </>
  )
}

export default App
