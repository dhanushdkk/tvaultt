import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import searchicon from "../assets/search_icon.png";
import mainLap from "../assets/mainLap.png";
import { debounce } from "lodash";
import create from "../assets/all-safes-create.png";
import locker from "../assets/locker.png";
import Popupsafe from "../Popup";
import Popup from "reactjs-popup";
import folder from "../assets/add-folder.png";
import FolderAdd from "../Add_folder";
import add from "../assets/icon_add.png";
import ListSafe from "../assets/shield-safe.png";
import folderPink from "../assets/folderpink.png";
import deleteImage from "../assets/deleteimage.png";
import addsecretimg from "../assets/addsecretimg.png"
import moment from 'moment';
import secretimggrey from "../assets/secretimggrey.png"
import {
  deleteSafe,
  deleteSecret,
  removeSafe,
  setCurId,
} from "../../Redux/configure";
import SafeEditPopup from "../Headbar/SafeEditPopup";
import SafeDetails from "../safeDetails";
export default function Safes() {
  const currentId = useSelector((state) => state.users.curId);
  const secretList = useSelector((state) => state.users.value);
  const [selectedSafe, setSelectedSafe] = useState([]);
  const deletedispatch = useDispatch();
  const secretDispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  useEffect(() => {
    if (currentId !== "" && userList && userList.length) {
      const filteredSafe = userList.filter((item) => item.id === currentId);
      setSelectedSafe(filteredSafe);
    }
  }, [currentId]);
  const [userListValue, setUserListValue] = useState([]);
  useEffect(() => {
    setUserListValue(userList);
  }, [userList]);
  function stop(e) {
    e.stopPropagation();
  }
  
  const [blankpage, setBlankpage] = useState("addbutton");
  const update_blank = () => {
    setBlankpage("button_update");
  };
  const count = userList.length; //count

  const [searchItem, setNewItem] = useState(""); //search
  const handleText = debounce((text) => {
    setNewItem(text);
  }, 1000);

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
                  &#40;{count}&#41;
                </div>
              </div>

              <div id="search">
                <img src={searchicon} alt="search" />
                <input
                  type="text"
                  placeholder="Search safes"
                  onChange={(event) => {
                    handleText(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className={userList <= 0 ? "computer" : "Listcomputer"}>
              {userList.length <= 0 && (
                <div>
                  <img id="mainLap" src={mainLap} alt="search" />
                  <p id="createtext">Create a Safe and get started!</p>
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
              {userList.filter((val) => {
                if (
                  val.name
                    .toLocaleLowerCase()
                    .includes(searchItem.toLocaleLowerCase())
                ) {
                  return val;
                }
              }).length === 0 &&
                userList.length > 0 && (
                  <div id="nosafefound">No Safe Found!</div>
                )}
              {userList
                .filter((val) => {
                  if (
                    val.name
                      .toLocaleLowerCase()
                      .includes(searchItem.toLocaleLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((user) => {
                  return (
                    <div
                      className={
                        currentId === user.id ? "activesafe" : "safes-list"
                      }
                      onClick={() => {
                        deletedispatch(setCurId({ id: user.id }));
                      }}
                      key={user.id}
                    >
                      <div className="listcontainer">
                        <div id="shieldimage">
                          <img src={ListSafe} alt="safe" />
                        </div>
                        <div id="nameandowner">
                          <div id="updatename">{user.name}</div>
                          <div id="updatesec">
                            {
                            moment().startOf('minute').fromNow()
                            }</div>
                        </div>
                        <div id="editanddeletebutton">
                          <SafeEditPopup
                            id={user.id}
                            name={user.name}
                            username={user.username}
                            type={user.type}
                            description={user.description}
                            secret={user.secret}
                          />
                          <div id="imagehover">
                            <img
                              src={deleteImage}
                              alt="delete"
                              onClick={(e) => {
                                stop(e);
                                deletedispatch(removeSafe({ id: user.id }));
                              }}
                            />
                          </div>
                        </div>
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
            <SafeDetails selectedSafe={userListValue} />
            <div id="secret-sub">
              <div id="secret-sub1">
                <div id="secret-sub2">
                  <p>Secrets</p>
                </div>
                <div id="add-fold">
                  {userList.length <= 0 && <img src={folder} alt="folder" />}
                  {userList.length > 0 && (
                    <Popup
                      trigger={<img src={folder} alt="folder" />}
                      modal
                      nested
                    >
                      {(close) => <FolderAdd close={close} />}
                    </Popup>
                  )}
                </div>
              </div>
              <div id="counting">
                <p id="lightcolor">
                  {secretList.map((value, index) => {
                    return (
                      value.id === currentId && (
                        <div>
                          {" "}
                          {value.secret.length}
                          secrets
                        </div>
                      )
                    );
                  })}
                  </p>
                {secretList.length === 0 && (
                <div id="locker">
                  <img id="locker-image" src={locker} alt="icon" />
                  <p id="locker-para">
                    Add a <span id="white">Folder</span> and then you’ll be able
                    to add <span id="white"> Secrets</span> to view them all
                    here
                  </p>
                  <div id="create-secrets">
                    <div id="add-secrets">
                      {userList.length <= 0 && (
                        <button id="add-secrets-button">
                          {/* <img id="add-secrets-image" src={add} alt="add" /> */}
                          <p>+ Add</p>
                        </button>
                      )}
                      {userList.length > 0 && (
                        <Popup
                          trigger={
                            <button id="add-secrets-pink">
                              {/* <img
                                id="add-secrets-image-pink"
                                src={add}
                                alt="add"
                              /> */}
                              <p>+ Add</p>
                            </button>
                          }
                          modal
                          nested
                        >
                          {(close) => (
                            <FolderAdd currentId={currentId.id} close={close} />
                          )}
                        </Popup>
                      )}
                    </div>
                  </div>
                </div>
                )}
                {secretList.map((value) => {
                  return (
                    value.secret.length === 0 && value.id === currentId &&(
                      <div id="locker">
                  <img id="locker-image" src={locker} alt="icon" />
                  <p id="locker-para">
                    Add a <span id="white">Folder</span> and then you’ll be able
                    to add <span id="white"> Secrets</span> to view them all
                    here
                  </p>
                  <div id="create-secrets">
                    <div id="add-secrets">
                      {userList.length <= 0 && (
                        <button id="add-secrets-button">
                          {/* <img id="add-secre  ts-image" src={add} alt="add" /> */}
                          <p>+ Add</p>
                        </button>
                      )}
                      {userList.length > 0 && (
                        <Popup
                          trigger={
                            <button id="add-secrets-pink">
                              {/* <img
                                id="add-secrets-image-pink"
                                src={add}
                                alt="add"
                              /> */}
                              <p>+ Add</p>
                            </button>
                          }
                          modal
                          nested
                        >
                          {(close) => (
                            <FolderAdd currentId={currentId.id} close={close} />
                          )}
                        </Popup>
                      )}
                    </div>
                  </div>
                </div>
                    ))}
                  )}
                  <div >
                {secretList.map((value, index) => {
                  {
                    secretList.map((value) => {
                      return <div> {value.secret.length}</div>;
                    });
                  }
                  return value.id === currentId ? (
                    <div key={index}>
                      {value.secret.map((secretsitem, index) => {
                        // console.log(secretsitem);
                        return (
                          <div className="secretArrange">
                          <div key={index} className="list_of_secrets">
                            <div className="flexcontainer">
                              <div id="addsecretimgg">
                                <img id="greyfold" src={secretimggrey} alt="folder"/>
                                <img id ="pinkfolder" src={addsecretimg} alt="folder" />
                              </div>
                              <div>
                                <p>{secretsitem}</p>
                                <span id="lastUpdated">
                                {
                                  moment().startOf('minute').fromNow()
                                }
                                </span>
                              </div>
                            </div>
                            <div>
                              <img id="delsecret"
                                src={deleteImage}
                                alt="delete"
                                onClick={() =>
                                  secretDispatch(
                                    deleteSecret({
                                      id: secretsitem,
                                    })
                                  )
                                }
                              />
                            </div>
                          </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  );
                })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <p>0 secrets</p>
                <div id="locker">
                  <img id="loc-img" src={locker} alt="img" />
                  <p id="lock-cont">
                    Add a <span id="white">folder</span> and then you'll be able to add <span id="white">Secrets</span> to view
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

export default Safes; */
}
