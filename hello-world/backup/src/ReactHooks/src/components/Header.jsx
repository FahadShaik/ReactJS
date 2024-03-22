import "../css/style.css";

const Header = () => {
  return (
    <div>
      <nav className="nav-bar">
        <div className="">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiVDNhi1Ekol_epyRw52K6kkjCWZkq0sEZ-Q&usqp=CAU"
            alt="temp-logo"
            className="logo"
          />
        </div>
        <div>
          <ul className="nav-list">
            <li className="nav-items">Contact Us</li>
            <li className="nav-items">Home</li>
            <li className="nav-items">Help</li>
            <li className="nav-items">Signin </li>
            <li className="nav-items">Profile</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
