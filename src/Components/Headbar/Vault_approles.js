import React from 'react'
import {useParams} from "react-router-dom";

function Vault_approles() {
  const idvalues =useParams();
  return (
    <div id="bodycontainer">
      <p>Vault_approles</p>
      <p>data={idvalues.id}</p>
      </div>
  )
}

export default Vault_approles


