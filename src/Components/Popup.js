import React from 'react';
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addSafe } from '../Redux/configure';
import shield from "../Components/assets/shield-safe.png";
import addIcon from "../Components/assets/icon_add.png"
export default function Popup(props) {
  const uid = uuid();
  const id = uid.slice(0, 6);
  const[name,setName]=useState("");
  const[username,setUsername]=useState("");
  const [type, setType] = useState("");
  const[description,setDescription]=useState("");
  const dispatch=useDispatch();
  // const userList=useSelector((state)=>state.users.value);
  return( 
      <div className='popup'>
      <div className='subpopup'>
        <h2>Create Safe</h2>
        <div className='popup-cont'>
          <img src={shield} alt="shield" />
          <p>A Safe is a logical unit to store the secrets. All the safes are created within Vault. You can control access only at the safe level. As a vault administrator you can manage safes but cannot view the content of the safe.</p>
        </div>
        <div className='input_area'>
          <p>Safe Name</p>
          <input value={name} onChange={(event)=>{setName(event.target.value);}} id="inputbox" type="text"  placeholder="name" />
          <p>Owner</p>
          <input value={username} onChange={(event)=>{setUsername(event.target.value);}} id="inputbox" type="text"  placeholder="owner" />
          <p>Type</p>
          <select value={type} onChange={(event)=>{setType(event.target.value);}} name="dropdown" id="inputbox">
            <option value="select">Select</option>
            <option value="personal">Personal</option>
            <option value="others">others</option>
          </select>
          <p>Description</p>
          <input value={description} onChange={(event)=>{setDescription(event.target.value);}} id="inputbox" type="text"  placeholder="add a description" />
          <p>Please add a minimum of 10 characters</p>

        </div>
        <div id="pop_button">
          <button onClick={()=>props.close()}>cancel</button>
          {
          (name.length<=10 || username.length<=10 || description.length<=10)&&
          <button type="submit" className="button_grey"  onClick={()=>{props.close();}}>+ Create</button>

        }

 {name.length > 10 &&
  username.length > 10 &&
  description.length > 10 && (
    <button
      type="submit"
      id="button_rose"
      onClick={() => {
        dispatch(addSafe({ id: id, name, username, description }));
        props.close();
      }}
    ><img src={addIcon} alt="addIcon" />create</button>

)}

        </div>
      </div>
    </div>
  );
}
