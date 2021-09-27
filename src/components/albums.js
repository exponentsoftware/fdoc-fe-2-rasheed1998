import React, { useEffect } from "react";
import Album from "./album";

function Albums(props) {
  const { albums, deleteAlbum } = props;

  useEffect(() => {}, [albums]);
  return (
    <div className="App">
      {albums &&
        albums.map((item, index) => (
          <div key={index}>
            <Album
              artist={item.artist}
              albumeName={item.album_title}
              albumCover={item.album_cover}
              uniqno={item.id}
              songs={item.songs}
              deleteAlbum={deleteAlbum}
            />
          </div>
        ))}
    </div>
  );
}

export default Albums;
