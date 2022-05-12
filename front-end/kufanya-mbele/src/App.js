
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AddTodo from './components/add-todo';
import TodosList from './components/todos-list';
import Login from './components/login';
import Signup from './components/signup';

import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
import {Container} from "react-bootstrap";


function App() {

    const [user, setUser] = React.useState(null);
    const [token, setToken] = React.useState(null);
    const [error, setError] = React.useState('');

    async function login(user = null){ // default user to null
        setUser(user);
    }

    async function logout(){
        setUser(null);
    }

    async function signup(user = null){ // default user to null
        setUser(user);
    }

  return (
    <div className="App">

    {/*    navbar */}
        <Navbar bg="primary" variant="dark">
            <div className="container-fluid">
                <Navbar.Brand>PendingBob</Navbar.Brand>
                <Nav className="me-auto">
                    <Container>
                        <Link class="nav-link" to={"/todos"}>Todos</Link>
                        { user ? (
                            <Link class="nav-link">Logout ({user})</Link>
                        ) : (
                            <>
                                <Link class="nav-link" to={"/login"}>Login</Link>
                                <Link class="nav-link" to={"/signup"}>Sign Up</Link>
                            </>
                        )}
                    </Container>
                </Nav>
            </div>
        </Navbar>
    {/*    end navbar*/}

    </div>
  );
}

export default App;
