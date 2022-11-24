import React from 'react';
import Login from './login';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import './App.css';
import PatientLogin from './page/patientsLogin'
import DoctorLogin from './page/doctorLogin'
import SignDoc from './page/signDoc'
import SignPat from './page/signPat'


function App() {
  return (
    <div className="login">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/doctorLogin' element={<DoctorLogin/>} />
          <Route path='/patientLogin' element={<PatientLogin/>} />
          <Route path='/signDoc' element={<SignDoc/>}/>
          <Route path='/signPat' element={<SignPat/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
