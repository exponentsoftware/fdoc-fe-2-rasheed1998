import React, { useState, useRef } from "react";

const AddAlbum = (props) => {
  const fileInputRef = useRef();
  const { albums, setAlbums } = props;
  const [artist, setArtist] = useState("");
  const [albumeName, setAlbumName] = useState("");
  const [albumCover, setAlbumCover] = useState("");

  const onSelectFile = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      if (e.target.files.length > 0) {
        setAlbumCover(URL.createObjectURL(e.target.files[0]));
      }
    }
  };

  const onsubmit = (e) => {
    e.preventDefault();
    setAlbums([
      ...albums,

      {
        id: new Date().getTime().toString(),
        artist: artist,
        album_title: albumeName,
        album_cover: albumCover,
      },
    ]);
    setArtist("");
    setAlbumName("");
    setAlbumCover("");
  };

  return (
    <div>
      <h3> Add Album</h3>
      <br />
      <br />
      <form
        onSubmit={(e) => {
          onsubmit(e);
        }}
      >
        <label>Album Title </label>
        <input
          type="text"
          value={albumeName}
          onChange={(e) => {
            setAlbumName(e.target.value);
          }}
          required
        ></input>
        <br />
        <br />
        <label>Atrist Name </label>
        <input
          type="text"
          value={artist}
          onChange={(e) => {
            setArtist(e.target.value);
          }}
          required
        ></input>
        <br />
        <br />
        <label>Album Cover </label>
        <input
          type="file"
          ref={fileInputRef}
          onChange={(e) => {
            onSelectFile(e);
          }}
          required
        ></input>
        <br />
        {albumCover && <img src={albumCover} alt="image1" />}

        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddAlbum;
