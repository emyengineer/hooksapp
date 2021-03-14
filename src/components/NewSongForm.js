import React, { useState} from "react";

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(title);
    addSong(title);
  };

  return (
    <form onSubmit={handlesubmit}>
      <label>Song name:</label>
      <input
        type="text"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input type="submit" value="add song"></input>
    </form>
  );
};

export default NewSongForm;
