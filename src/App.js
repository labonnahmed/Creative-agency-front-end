import './App.css';
import Home from './component/Home/Home/Home';
import Login from './component/Login/Login/Login';
import MakeAdmin from './component/Dashboard/MakeAdmin/MakeAdmin';
import Feedback from './component/Dashboard/Feedback/Feedback';
import NewOrder from './component/Dashboard/NewOrder/NewOrder';
import Dashboard from './component/Dashboard/Dashboard/Dashboard';
import ServiceList from './component/Dashboard/ServiceList/ServiceList';
import PrivateRoute from './component/Login/PrivateRoute/PrivateRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MakeService from './component/Dashboard/MakeService/MakeService';
import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Router>
        <Routes>
          <Route exect path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<PrivateRoute />}>
            <Route path='dashboard/:id*' element={<Dashboard />}>
              <Route index element={<NewOrder />} />
              <Route path='feedback' element={<Feedback />} />
              <Route path='createOrder' element={<MakeService />} />
              <Route path='createAdmin' element={<MakeAdmin />} />
              <Route path='serviceList' element={<ServiceList />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
