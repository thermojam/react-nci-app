import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import {Catalog} from "./pages/Catalog.jsx";
import {Statistic} from "./pages/Statistic.jsx";

function App() {
    return (

        <>
            <Router>
                <Navbar />
                    <Routes>
                        <Route path="/" element={<Catalog />} />
                        <Route path="/statistic" element={<Statistic />}/>
                    </Routes>

            </Router>


        </>


    );
}

export default App;
