import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (
        <nav class="navbar navbar-expand navbar-dark bg-dark bg-gradient py-0">
            <div class="container-fluid">
                <img class="w-25 h-10 p-3 fa-xs" src="../../res/levels-logo.svg" alt="logo"/>
                <div class="navbar-collapse" id="navbarSupportedContent">
                    
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/Salary">Salaries</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/companie">Companies</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/reviews">Reviews</a>
                    </li>
                </ul>

                {/* <button class="btn btn-outline-success" type="submit">Sign in</button> */}

                </div>
            </div>
        </nav>
        
    );
}

export default Navbar;
