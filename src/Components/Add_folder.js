import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { addListpop } from '../Redux/configure';
import { v4 as uuid } from "uuid";
export default function Addfolder(props) {
  const [condition, setCondition] = useState("");
  const seperateid = uuid();
  const id = seperateid.slice(0, 6);
  const dispatch = useDispatch();
  return (
    <div id="addfolder_popup">
      <h2>Add Folder</h2>
      <p id="folderin">Folder Name</p>
      <input type="text" placeholder="enter folder name" />
      <p id="wrong">
        Please enter a minimum of 3 characters lowercase alphabets numbebr and
        underscores only.{" "}
      </p>
      <div id="popup_folder_btn">
        <button onClick={() => props.close()}>Cancel</button>
        {condition.length <= 10 && (
          <button
            type="submit"
            className="save_before"
            onClick={() => {
              props.close();
            }}
          >
            Save
          </button>
        )}
        {condition.length > 10 && (
          <button
            type="submit"
            className="save_after"
            onClick={() => {
              //   dispatch(addListpop({
              //    id: id,
              //    condition,
              //   }));
              props.close();
              setCondition(" ");
            }}
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
}
