import React from 'react'
import mainImage from "../Components/assets/shield-image.png";
import { useSelector } from "react-redux";

export default function SafeDetails(props) {
  const currentId = useSelector((state) => state.users.curId);
  return (
    <div id='secretshead'>
        {props.selectedSafe.length===0? (
         <div id="mainsecret">
              <img src={mainImage} alt="main" />
              <div id="secret-cont-empty">
                <p id="no-safes-create">No Safes Created Yet</p>
                <p id="safes-created">
                  Create a Safe to see your secrets, folders and permissions
                  here
                </p>
              </div>
            </div>
        ): (
          ""
        )}
        {props.selectedSafe.map((value, index) => {
          return(
            value.id === currentId && (
              <div id='mainsecret'>
                 <img src={mainImage} alt="main" />
            <div id="secret-cont">
              <p id="no-safes-create">{props.selectedSafe[0].name}</p>
              <p id="safes-created">{props.selectedSafe[0].description}</p>
              </div>
              </div>

            )
          );
        })}
        </div>
      );
    }