import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Routes, Route  } from "react-router-dom";
import RegisterPage from './Page/RegisterPage';
import LoginPage from './Page/LoginPage';
import Homepage from './Page/Homepage';
import CreatePage from './OrderPages/CreatePage';
import OptionsPage from './OrderPages/OptionsPage';


function App() {
  return (
    <>
    <Header/>

    <Routes>
        <Route path="/option" element={<OptionsPage />} />

        <Route path="/create" element={<CreatePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route  path="/login" element={<LoginPage />} />
        <Route exact  path="/" element={<Homepage />} />
      </Routes>
      <Footer/>
    </>
  );
}
export default App;