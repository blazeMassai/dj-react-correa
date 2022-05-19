

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-dark text-light mt-4 fixed-bottom">
            <div className="text-center p-3">
                © Copyright - <a
                target="_blank"
                rel="noreferrer"
                className="text-reset fw-bold text-decoration-none"
                href="https://twitter.com/"
            >
                Mr-7
            </a> - <a
                target="_blank"
                rel="noreferrer"
                className="text-reset fw-bold text-decoration-none"
                href="#"
            >
                Zionist
            </a>
            </div>
        </footer>
    );
};

export default Footer;