import {useContext, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import AuthContext from "../context/AuthContext";

function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const { registerUser } = useContext(AuthContext);

    const handleSubmit = async e => {
        e.preventDefault();
        registerUser(username, password, password2);
    };
    return(
        <Container>

            <form  className="col-6" onSubmit={handleSubmit}>
                <h1><span className="pambo">Sign<span className="pambo1">UP</span> </span></h1>
                <div className="form-group m-2">
                    <label htmlFor="username">Username</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        onChange={e => setUsername(e.target.value)}
                        placeholder="Enter Email"
                        required
                    />
                </div>
                <div className="form-group m-2">
                    <label htmlFor="password">Password</label>
                    <input
                        className="form-control"
                        type="password"
                        id="password"
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                </div>
                <div  className="form-group m-2">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input
                        className="form-control"
                        type="password"
                        id="confirm-password"
                        onChange={e => setPassword2(e.target.value)}
                        placeholder="Confirm Password"
                        required
                    />
                    <p>{password2 !== password ? "Passwords do not match" : ""}</p>
                </div>
                <button className="btn btn-primary col-6 m-2">Register</button>
            </form>
        </Container>
    )
}
export default Signup;