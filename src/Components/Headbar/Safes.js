import React from "react";
import { useSelector , useDispatch} from "react-redux";
import { useState } from "react";
import searchicon from "../assets/search_icon.png";
import mainLap from "../assets/mainLap.png";
import mainImage from "../assets/shieldimage.png";
import create from "../assets/all-safes-create.png";
import locker from "../assets/locker.png";
import Popupsafe from "../Popup";
import Popup from 'reactjs-popup';
import folder from "../assets/add-folder.png"
import addiconfolder from "../assets/icon_add.png";  
import FolderAdd from "../Add_folder";
import ListSafe from "../assets/shield-safe.png"
import editImage from "../assets/editimage.png"
import deleteImage from "../assets/deleteimage.png"
import { removeSafe } from "../../Redux/configure"; 

function Safes() {

  const userList=useSelector((state)=>state.users.value);
  const [blankpage, setBlankpage] = useState('addbutton');
  const update_blank = () => {
    setBlankpage('button_update')
  }
  const deletedispatch=useDispatch();

  console.log(userList);


  return (
    <div id="maincontainer">
      <div id="subcont1">
        <div id="subcont2">
          <div id="subcont3">
            <div id="subcont4">
              <div id="subcont5">
                <div id="subcont6">
                  <span>
                    {" "}
                    <b>All safes</b>
                  </span>
                  (0)
                </div>
              </div>

              <div id="search">
                <img src={searchicon} alt="search" />
                <input type="text" placeholder="Search safes" />
              </div>
            </div>
            <div id="submain">
            {userList.length <= 0 && (
              <div>
                <img id="mainLap" src={mainLap} alt="search" />
                <p id="createtext" >Create a Safe and get started!</p>
                <Popup
                  trigger={
                    <img
                      id="create-image"
                      src={create}
                      alt="create"
                      onClick={update_blank}
                    />
                  }
                  modal
                  nested
                >
                  {(close) => <Popupsafe close={close} />}
                </Popup>
              </div>
            )}
            {userList.map((user) => {
              return (
                <div id="listcontainer">
                  <div id="shieldimage">
                    <img src={ListSafe} alt="safe" />
                  </div>
                  <div id="nameandowner">
                    <div>{user.name}</div>
                    <div>{user.username}</div>
                  </div>
                  <div id="editanddeletebutton">
                    <img src={editImage} alt="edit" />
                    <img
                      src={deleteImage}
                      alt="delete"
                      onClick={() => {
                        deletedispatch(removeSafe({ id: user.id }));
                      }}
                    />
                  </div>
                </div>
              );
            })}
            {userList.length > 0 && (
              <div>
                <Popup
                  trigger={
                    <img
                      id="list-create-image"
                      src={create}
                      alt="create"
                      onClick={update_blank}
                    />
                  }
                  modal
                  nested
                >
                  {(close) => <Popupsafe close={close} />}
                </Popup>
              </div>
)}
          </div>
        </div>
          
          <div id="secrets">
            <div id="mainsecret">
              <img src={mainImage} alt="main" />
              <div id="secret-cont">
                <p id="no-safes-create">No Safes Created Yet</p>
                <p id="safes-created">
                  Create a Safe to see your secrets, folders and permissions
                  here
                </p>
              </div>
            </div>
            <div id="secret-sub">
              <div id="secret-sub1">
                <div id="secret-sub2">
                  <p>Secrets</p>
                </div>
                <div id="add-fold">
                <Popup trigger={<img src={folder} alt="folder" />} modal nested>
                  {(close) => (
                    <FolderAdd close={close} />
                  )}
                </Popup>
                </div>
              </div>
              <div id="counting">
                <p>0 secrets</p>
                <div id="locker">
                  <img id="loc-img" src={locker} alt="img" />
                  <p id="lock-cont">
                    Add a folder and then you'll be able to add Secrets to view
                    them all here
                  </p>
                  <div id="new-secrets">
               <Popup trigger={<button><img src={addiconfolder} alt="addiconfolder" /> <p>Add</p> </button>} modal nested>
                  {(close) => (
                    <FolderAdd close={close} />
                  )}
                </Popup>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default Safes;
