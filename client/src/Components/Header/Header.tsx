import React from "react";
import "./header.scss";

function Header() {
  return (
    <header id="header">
      <div className="logo">
        <img alt="logo" src="/img/header/logo.svg" />
      </div>
      <div className="navigation">
        <nav className="navigationMenu">
          <ul>
            <li>
              <a>Асортимент</a>
            </li>
            <li>
              <a >Про нас</a>
            </li>
            <li>
              <a >Для партнерів</a>
            </li>
          </ul>
        </nav>
        <div className="navigaionPhone">
          <p>+380942990433</p>
        </div>
      </div>
      <div className="containerSignInBacket">
        <span className="signIn">
          <img alt="signIn" src="/img/header/signIn.svg" />
        </span>
        <span className="backet">
          <img alt="backet" src="/img/header/Backet.svg" />
        </span>
      </div>
    </header>
  );
}

export default Header;
