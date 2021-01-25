import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Artist from './components/Artist';
import Song from './components/Song';
import Spinner from './components/Spinner';
import Error from './components/Error';
import axios from 'axios';

function App() {
  const [search, setSearch] = useState({});
  const [song, setSong] = useState('');
  const [artist, setArtist] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(search).length === 0) return;
    const callAPI = async () => {
      const URL_LYRICS = `https://api.lyrics.ovh/v1/${search.artist}/${search.song}`;
      const URL_ARTIST = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${search.artist}`;

      try {
        const [lyrics, artist] = await Promise.all([
          axios(URL_LYRICS),
          axios(URL_ARTIST),
        ]);
        setLoading(false);
        setArtist(artist.data.artists[0]);
        setSong(lyrics.data.lyrics);
        scroll();
      } catch (error) {
        console.log('error');
        setError(true);
        setLoading(false);
      }
    };
    callAPI();
  }, [search]);

  const scroll = () => {
    const result = document.querySelector('.result');
    result.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Fragment>
      <Form setSearch={setSearch} setLoading={setLoading} />
      <div className="container mt-1">
        <div className="row justify-content-center">
          {loading ? null : error ? (
            <Error message="Oops! Something went wrong. Please try again." />
          ) : null}
        </div>
        <div className="row result">
          {loading ? (
            <Spinner />
          ) : !error ? (
            <Fragment>
              <div className="col-md-6">
                <Artist artist={artist} />
              </div>
              <div className="col-md-6">
                <Song song={song} />
              </div>
            </Fragment>
          ) : null}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
