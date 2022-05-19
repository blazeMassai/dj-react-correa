
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";

const MyNavbar = () => {
    const { user, logoutUser } = useContext(AuthContext);

    return (

    <Navbar bg="dark" variant="text-light">
        <div className="container-fluid">
            <Navbar.Brand className='chata'>Pending<span className='chata1'>Bob</span></Navbar.Brand>
            <Nav className="me-auto menu">


                {user ? (
                    <>
                        <Link className="nav-link text-decoration-none" to="/">Home</Link>
                        <Link className="nav-link" to="/todos">To-do List</Link>
                        <button className="btn btn-sm btn-light m-1" onClick={logoutUser}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link className="nav-link" to="/login">Login</Link>
                        <Link className="nav-link" to="/register">Register</Link>
                    </>
                )}

            </Nav>
        </div>
    </Navbar>
    )
};

export default MyNavbar;