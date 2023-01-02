import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg mx-5 navbar-dark bg-dark">
            <div class="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Inicio</NavLink >
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/notas">Notas</NavLink >
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/calculadora">Calculadora</NavLink >
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/todolist">Tareas</NavLink >
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/calendario">Calendario</NavLink >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;