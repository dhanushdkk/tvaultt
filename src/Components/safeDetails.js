import React from 'react'
import mainImage from "../Components/assets/shield-image.png";
import { useSelector } from "react-redux";
import { useState , useEffect } from 'react';

export default function SafeDetails() {
  const currentId = useSelector((state) => state.users.curId);
  const userList = useSelector((state) => state.users.value);
  const [safeId, setSafeId] = useState([]);
  useEffect(() => {
    setSafeId(currentId);
  }, [userList]);
  return (
    <div id='secretshead'>
        {userList.length===0? (
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
        {userList.map((value) => {
          return(
            value.id === currentId ? (
              <div id='mainsecret'>
                 <img src={mainImage} alt="main" />
            <div id="secret-cont">
              <p id="no-safes-create">{value.name}</p>
              <p id="safes-created">{value.description}</p>
              </div>
              </div>

            ):("")
          );
        })}
        </div>
      );
    }