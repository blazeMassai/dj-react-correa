import { useContext } from "react";
import UserInfo from "./UserInfo";
import AuthContext from "../context/AuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <section className="container">
            {user && <UserInfo user={user} />}
            <h1>You are on home page!</h1>
        </section>
    );
};

export default Home;