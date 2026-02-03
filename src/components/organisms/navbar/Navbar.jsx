import Button from "../../atoms/button/Button";
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    Medical<span>Recov</span>
                </div>

                <ul className="nav-links">
                    <li className="active">Home</li>
                    <li>Product</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
                <div className="auth">
                    <Button classN="button" text="Login" />
                    <Button classN="button button2" text="JOIN US →" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
