
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AddTodo from './components/add-todo';
import TodosList from './components/todos-list';
import Login from './components/login';
import Signup from './components/signup';


import {AuthProvider} from "./context/AuthContext";
import Home from "./components/home";
import PrivateRoute from "./services/PrivateRoute";
import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {


  return (
    <div className="App">

        <AuthProvider>
            <MyNavbar />
            <Routes >

                <Route path="/todos" element={
                    <PrivateRoute>
                        <TodosList />
                    </PrivateRoute>
                }
                />

                <Route element={<Login/>} path="/login" />
                <Route element={<Signup/>} path="/register" />
                <Route element={<Home/>} path="/" />

            </Routes >
        </AuthProvider>

        <Footer />

    </div>
  );
}

export default App;
