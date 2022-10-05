import React, { useState, useRef, useEffect } from "react";
import "./dropdown.css";
import { CSSTransition } from "react-transition-group";
import Backdrop from "../Backdrop/Backdrop";
import Ellipsis from "../../assets/img/ellipsis.svg"

function Dropdown() {
    return (
        <Navbar>
            <NavItem>
                <DropdownMenu></DropdownMenu>
            </NavItem>
        </Navbar>
    );
}

function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="navbarNav">{props.children}</ul>
        </nav>
    );
}

function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className="navItem">
            <a href="#" className="iconButton" onClick={() => setOpen(!open)}>
                <img className="iconImg" src={Ellipsis} alt="" />
            </a>
            {open && <Backdrop onClick={() => setOpen(!open)}></Backdrop>}
            {open && props.children}

        </li>
    );
}

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState("main");
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
    }, []);

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    // items dropdown
    function DropdownItem(props) {
        return (
            <a
                href="#"
                className="menuItem"
                onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
            >
                {props.children}
            </a>
        );
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
            <CSSTransition
                in={activeMenu === "main"}
                timeout={500}
                classNames="menuPrimary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem>Perfil</DropdownItem>
                    <DropdownItem>Cerrar sesion</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
}

export default Dropdown;
