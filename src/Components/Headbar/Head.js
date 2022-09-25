import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
// import Logo from "../assets/Logo.png";
import tvaultlogo from "../assets/tvaultimg.png"
import Safes from "../Headbar/Safes";
import Vault_approles from "./Vault_approles";
import Service_acnt from "./Service_acnt";
import IAM_SA from "./IAM_SA";
import Azure from "./Azure";
import "./head.css";
import document from "../assets/document.png";
import Account from "../assets/account.png";
// import { useNavigate } from 'react-router';

function Topmain() {
  
  return (
    <Router>
      <header>
        <div id="tvaultlogo">
          <img src={tvaultlogo} alt="logo"></img>
        </div>

        <div className="nav">
          {" "}
          <ul className="nav_list">
            <NavLink to="/" activeClassName="active">
              <li>Safes</li>
            </NavLink>

            <NavLink to="/vault/Dhanush" activeClassName="active">
              <li>Vault AppRoles</li>
            </NavLink>

            <NavLink to="/Service" activeClassName="active">
              <li>Service Accounts</li>
            </NavLink>
            <NavLink to="/IamService" activeClassName="active">
              <li>IAM Service Accounts</li>
            </NavLink>

            <NavLink to="/Azure" activeClassName="active">
              <li> Azure Active Directory</li>
            </NavLink>
          </ul>
        </div>
        <div id="accounts">
          <div id="documents">
            <img src={document} alt="document" height="16px" />
            <p>Documentation</p>
          </div>
          <div id="documents">
            <img src={Account} alt="accounts" height="20px" />
            <p>(Admin) Davis R.</p>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Safes />} />
        <Route path="/Vault/:id" element={<Vault_approles />} />
        <Route path="/Service" element={<Service_acnt />} />
        <Route path="/IamService" element={<IAM_SA />} />
        <Route path="/Azure" element={<Azure />} />
      </Routes>
    </Router>
  );
}
export default Topmain;
