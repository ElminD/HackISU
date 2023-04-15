import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (
        <nav class="navbar navbar-expand navbar-dark bg-dark">
            <div class="container-fluid">
                {/* <img class="w-5 p-5" src="../../res/levels-fyi-logo.svg"/> */}
                <h2 class="title">Logo</h2>
                <div class="navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Salaries</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Companies</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Reviews</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
        
    );
}

export default Navbar;
