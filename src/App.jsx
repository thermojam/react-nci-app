import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import {Catalog} from "./pages/Catalog.jsx";
import {Statistic} from "./pages/Statistic.jsx";


import styles from './App.module.css'

function App() {
    return (

        <>
            <div className={styles.app}>
                <Router>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Catalog/>}/>
                        <Route path="/statistic" element={<Statistic/>}/>
                    </Routes>
                </Router>
            </div>
        </>
    );
}

export default App;
