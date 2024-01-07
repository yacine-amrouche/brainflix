
import './App.css';
import './app.scss';
import Header from './components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main/Main';
import UploadPage from './components/uploadPage/UploadPage';


function App (){
  
  return (
    <>
    <Header />
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/video" element={<Main />} />
        <Route path="/upload" element={<UploadPage />} />

        <Route path="/video/:idParams" element={<Main />} />
     </Routes>
     </BrowserRouter>
    </>
   );
}
  


export default App;
