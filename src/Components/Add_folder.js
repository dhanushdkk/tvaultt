import React from "react";
import { useState  } from "react";
import { useDispatch } from "react-redux";
import {addSecret} from "../Redux/configure"
import { useSelector } from "react-redux";
export default function Addfolder(props) {
  const dispatch = useDispatch();
  const curId = useSelector((state) => state.users.curId);
  const [secret, setSecret] = useState("");
  return (
    <div id="addfolder_popup">
      <h2>Add Folder</h2>
      <p id="folderin">Folder Name</p>
      <input
        type="text"
        value={secret}
        placeholder="enter folder name"
        onChange={(e) => setSecret(e.target.value)}
      />
      <p id="wrong">
        Please enter lowercase alphabets, numbers and underscores only.{" "}
      </p>
      <div id="popup_folder_button">
        <button id="popup_button_cancel" onClick={() => props.close()}>
          Cancel
        </button>
        {secret.length <= 1 && (
          <button
            type="submit"
            id="popup_button_button"
            onClick={() => {
              props.close();
            }}
          >
         Create
       </button>
        )}
        {(secret.length>1&&
        (
          <button
          type="submit"
          id="button_rose"
          onClick={() => {
            dispatch(
              addSecret({
                curId: curId,
                secret,
              })
            );
            props.close();
          }}
        >
          Create
        </button>
        )
        )}
      </div>
    </div>
  );
  }