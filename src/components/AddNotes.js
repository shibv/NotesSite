import React, { useState } from "react";

const AddNotes = ({handleAddNotes}) => {
  const [noteText, setnoteText] = useState("");

  const maxlength =200;

  function handleTExt(event) {
    if(maxlength-noteText.length >=0)
    {
      setnoteText(event.target.value);
    }
    
    
  }

  function handleSubmit()
  {
    if(noteText.trim().length > 0)
    {
      handleAddNotes(noteText);
      setnoteText("");
    }
   
  }



  return (
    <div className="notes new">
      <textarea
        name=""
        id=""
        cols="10"
        rows="8"
        placeholder="Add notes here ......."
        value={noteText}
        onChange={handleTExt}
      ></textarea>
      <div className="notes-footer">
        <small>{maxlength-noteText.length} Remaining</small>
        <button className="save" onClick={handleSubmit} >Save</button>
      </div>
    </div>
  );
};

export default AddNotes;
