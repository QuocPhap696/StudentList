// import logo from './logo.svg';
import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// import  TourList  from './component/student/TourList';
// import AddTour from './component/student/AddTour';
// import EditTour from './component/student/EditTour';
// import TourDetail from './component/student/TourDetail';
import store from './redux/store';

import Add from './component/student/Add';
import Edit from './component/student/Edit';
import StudentList from './component/student/StudentList';
import Detail from './component/student/Detail'

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <SideBar/> */}
      {/* <Routes>
        <Route path='/student' element={<TourList/>} />
        <Route path='/student/create' element={<AddTour />} />
        <Route path='/student/edit/:cusId' element={<EditTour />} />
        <Route path='/student/infor/:cusId' element={<TourDetail />} />
      </Routes> */}
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<StudentList/>}/> 
          <Route path='/student/create' element={<Add/>}/> 
          <Route path='/student/edit/:cusId' element={<Edit/>}/> 
          <Route path='/student/infor/:cusId' element={<Detail/>}/> 
        </Routes>
      </Provider>
    </>
  );
}

export default App;
