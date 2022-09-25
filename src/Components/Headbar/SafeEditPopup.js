import shield from "../assets/shield-safe.png";
import React from "react";
import { useState } from "react";
import { editSafe } from "../../Redux/configure";
import { useDispatch } from "react-redux";
import Popup from "reactjs-popup";
import editImage from "../assets/editimage.png";
export default function EditPop(props) {
  const [id, setId] = useState(props.id);
  const[name,setName]=useState(props.name);
  const[username,setUsername]=useState(props.username);
  const [type, setType] = useState(props.type);
  const[description,setDescription]=useState(props.description);
  const updateDispatch = useDispatch();
  const [secret]=useState(props.secret);

  return (
    <div>
      <Popup trigger={<div id="imagehover">
      <img src={editImage} alt="edit" />
      </div>
      } modal nested>
        {(close) => (
          <div className="popup">
            <div className="subpopup">
              <h2>Create Safe</h2>
              <div className="popup-cont">
                <img src={shield} alt="shield" />
                <p>
                  A Safe is a logical unit to store the secrets. All the safes
                  are created within Vault. You can control access only at the
                  safe level. As a vault administrator you can manage safes but
                  cannot view the content of the safe.
                </p>
              </div>
              <div className="input_area">
                <p>Safe Name</p>
                <input
                  id="inputbox"
                  type="text"
                  placeholder="name"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
                <p>Owner</p>
                <input
                  id="inputbox"
                  type="text"
                  placeholder="username"
                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
                <p>Type</p>
                <select
                  name="textvalue"
                  id="inputbox"
                  value={type}
                  onChange={(event) => {
                    setType(event.target.value);
                  }}
                >
                  <option value="select">Select</option>
                  <option value="personal">Personal</option>
                  <option value="others">others</option>
                </select>
                <p>Description</p>
                <input
                  id="inputbox"
                  type="text"
                  placeholder="add a description"
                  value={description}
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                />
                <p>Please add a minimum of 10 characters</p>
              </div>
              <div id="pop_button">
                <button type="button" id="popup_button_cancel" onClick={() => close()}>
                  Cancel
                </button>
                <button
                  type="submit"
                  id="button_rose"
                  onClick={() => {
                    updateDispatch(
                      editSafe({
                        id: id,
                        name: name,
                        username: username,
                        type: type,
                        description: description,
                        secret:secret,
                      })
                    );
                    close();
                  }}
                >
                  update
                </button>
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}