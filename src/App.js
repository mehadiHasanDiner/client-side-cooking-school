import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PrivateRoute from "./Components/Login/PrivateRoute";

import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AddClasses from './Components/Dashboard/AddClasses/AddClasses';
import UserDashboard from './Components/UserDashboard/UserDashboard/UserDashboard';
import PaymentForm from './Components/UserDashboard/ProcessPayment/PaymentForm';
import UserReview from './Components/UserDashboard/UserReview/UserReview';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import ListOfClasses from './Components/Dashboard/ListOfClasses/ListOfClasses';
import ManageClasses from './Components/Dashboard/ManageClasses/ManageClasses';
import Apply from './Components/Apply/Apply';
import Applicant from './Components/Dashboard/Applicant/Applicant';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/useDashboard">
            <UserDashboard></UserDashboard>
          </PrivateRoute>
          <PrivateRoute path="/user/paymentForm">
            <PaymentForm></PaymentForm>
          </PrivateRoute>
          <PrivateRoute path="/user/useReview">
            <UserReview></UserReview>
          </PrivateRoute>
          <PrivateRoute path="/user/paymentForm/:id">
            <PaymentForm></PaymentForm>
          </PrivateRoute>
          <PrivateRoute path="/admin/addClasses">
            <AddClasses></AddClasses>
          </PrivateRoute>
          <PrivateRoute path="/admin/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/admin/listOfClasses">
            <ListOfClasses></ListOfClasses>
          </PrivateRoute>
          <PrivateRoute path="/admin/manageClasses">
            <ManageClasses></ManageClasses>
          </PrivateRoute>
          <PrivateRoute path="/admin/sendApply">
            <Applicant></Applicant>
          </PrivateRoute>
          <Route exact path="/sendApply">
            <Apply></Apply>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
