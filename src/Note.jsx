import React from "react";
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const Note = (props) => {

  const deleteNote = (id) => {
     props.deleteItem(props.id);
  };

  return (
      <>
        <div className = "note">
            <h5> {props.title} </h5>
            <p> {props.content} </p>
            <Button onClick = {deleteNote} >
                <DeleteOutlineIcon className="delete" />
            </Button>
        </div>
      </>
  );
};

export default Note;