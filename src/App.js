import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialog from "./components/Dialog/Dialog";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app__wrapper-content'>
                <Routes>
                    <Route path="/" element={<Profile/>}/>
                    <Route path="/messages/*" element={<Dialog/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
