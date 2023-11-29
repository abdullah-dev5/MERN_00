import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculator from "../Calculator";
import ContactUs from '../ContactUs.jsx'
import {Navbar} from '../Navbar.jsx'
const AppRoutes = () => {
    return (
      <Router>
        <div>
        <Navbar/>
          <Routes>
            <Route path="/Calculator" element={<Calculator/>} />
            <Route path="/ContactUs" element={<ContactUs/>} />
            <Route path="/" element={<Calculator/>} />
          </Routes>
          
        </div>
      </Router>
    );
  };
  export default AppRoutes;
   