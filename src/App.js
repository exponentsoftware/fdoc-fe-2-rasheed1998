import React, { useEffect, useState } from "react";
import "./App.css";
import AddAlbum from "./components/AddAlbum";
import Albums from "./components/albums";

function App() {
  const [albums, setAlbums] = useState([
    {
      id: 1,
      artist: "Shrey Singhal",
      album_title: "Jodha Akbar",
      album_cover:
        "https://i.pinimg.com/originals/96/6f/08/966f080288234f0a8708fc2a95f330e2.jpg",
      songs: ["Jahaan Tum Ho"],
    },
    {
      id: 2,
      artist: "Stebin Ben",
      album_title: "Rula ke gaya ishq",
      album_cover:
        "https://i.pinimg.com/originals/a5/f3/74/a5f374f5b91d956febbae9c1dec7b553.jpg",
      songs: ["Rula ke gaya ishq"],
    },
    {
      id: 3,
      artist: "Arijit Singh",
      album_title: "Pachtaoge",
      album_cover:
        "https://i.pinimg.com/originals/24/78/cb/2478cb5e875fa43199c8223e4c334be0.jpg",
      songs: ["Pachtaoge"],
    },
    {
      id: 4,
      artist: "vijay yesudas",
      album_title: "Premam",
      album_cover:
        "https://i.pinimg.com/originals/af/27/b9/af27b961bab41574a80de415eb2a7e54.jpg",
      songs: ["Evare","Bang Bang"],
    },
    {
      id: 5,
      artist: "Baadshah",
      album_title: "veere di wedding",
      album_cover:
        "https://i.pinimg.com/originals/ae/02/fc/ae02fcd15be06c1f9e0297dbacc2426f.jpg",
      songs: ["Tareffan","veere"],
    },
    {
      id: 6,
      artist: "sia",
      album_title: "cheap thrills",
      album_cover:
        "https://i.pinimg.com/originals/59/85/24/598524756ad34c2a9bcd7ea64c3e4ae1.jpg",
      songs: ["Cheap thrills"],
    },
    {
      id: 7,
      artist: "Kamal Khan",
      album_title: "Qismat",
      album_cover:
        "https://i.pinimg.com/originals/a9/2b/a3/a92ba3bcda49517343ab05e55837532e.jpg",
      songs: ["Awazz"],
    },
    {
      id: 8,
      artist: "Neha Bhasin",
      album_title: "Sultan",
      album_cover:
        "https://i.pinimg.com/originals/91/d6/65/91d6659dd051efb4825aa1befc14dc9b.jpg",
      songs: ["jag ghoomeya"],
    },
  ]);

  const deleteAlbum = (e, id) => {
    e.preventDefault();
    for (let i = 0; i < albums.length; i++) {
      if (albums[i].id === id) {
        albums.splice(i, 1);
        console.log(albums, "remain");
      }
    }
  };

  useEffect(() => {
    setAlbums(albums);
  }, [albums]);

  return (
    <div className="App">
      <Albums albums={albums} deleteAlbum={deleteAlbum} />
      <AddAlbum setAlbums={setAlbums} albums={albums} />
    </div>
  );
}

export default App;
