import React from 'react';
import {BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom';
import Logo from "../assets/Logo.png"
import Safes from "../Headbar/Safes"
import Vault_approles from './Vault_approles';
import Service_acnt from './Service_acnt';
import IAM_SA from './IAM_SA';
import Azure from './Azure';
import './head.css'
import document from "../assets/document.png";
import Account from "../assets/account.png";

function Topmain(){
    return (    
        <Router>
            <header>
                <div id = "tvaultlogo">
                    <img src={Logo} alt="logoimg"/>
                    <p>T-VAULT</p>
                    </div>
       
                    <nav> 
          <li id="active"> 
           <Link to="/">Safes </Link>
          </li> 
          <li>
          <Link to="/Vault">VaultAppRoles </Link>
          </li> 
          <li>
          <Link to="/Serviceacnt">ServiceAccounts </Link>
          </li> 
          <li>
          <Link to="/IamServAcnt">IAMServiceAccounts </Link>
          </li> 
          <li>
          <Link to="/AzureDirect">AzureActiveDirectory </Link>
          </li> 

        </nav> 
            <div id="accounts">
             <div id="documents">
              <img src={document} alt="document"height="16px"/>
                <p>Documentation</p>
              </div>
            <div id="documents">
            <img src ={Account} alt ="accounts"height="20px"/>
            <p>(Admin) Davis R.</p>
            </div>
        </div>   
        </header>

        <Routes>
            <Route path="/" element={<Safes />} />
            <Route path='/Vault' element={<Vault_approles />} />
            <Route path='/Serviceacnt' element={<Service_acnt />} />
            <Route path='/IamServAcnt' element={<IAM_SA />} />
            <Route path='/AzureDirect' element={<Azure />}/>
        </Routes>
       </Router>
      
    );
}
export default Topmain;