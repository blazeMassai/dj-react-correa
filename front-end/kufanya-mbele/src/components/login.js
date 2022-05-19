import {useContext} from 'react';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import AuthContext from "../context/AuthContext";


const Login = () => {
    //
    // const [email, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const onChangeEmail = e => {
    //     const email = e.target.value;
    //     setUsername(email);
    // }
    // const onChangePassword = e => {
    //     const password = e.target.value;
    //     setPassword(password);
    // }
    // const login = () => {
    //     props.login({email: email, password: password});
    //     props.history.push('/');
    // }

    const { loginUser } = useContext(AuthContext);
    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        email.length > 0 && loginUser(email, password);
    };

    return (
        <Container>

            <Form  className="col-6" onSubmit={handleSubmit}>
                <h1><span className="pambo">LOG<span className="pambo1">IN</span> </span></h1>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" type="text" id="email" placeholder="Enter Your Email" />
                </div>


                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="form-control" type="password" id="password" placeholder="Enter Password" />
                </div>


                <button className="btn btn-primary col-6 mt-2" type="submit">Login</button>
            </Form>
        </Container>
    );
}

export default Login;