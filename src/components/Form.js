import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Form = ({ setSearch, setLoading }) => {
  const [info, setInfo] = useState({
    artist: '',
    song: '',
  });
  const [error, setError] = useState(false);
  const { artist, song } = info;

  const readInput = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (artist.trim() === '' || song.trim() === '') {
      setLoading(false);
      setError(true);
      return;
    }
    setError(false);
    setSearch(info);
  };

  return (
    <div className="container">
      <div className="row">
        <form
          className="col card text-white bg-transparent mb-5 pt-5 pb-2"
          onSubmit={handleSumbit}
        >
          <fieldset>
            <h1 className="text-center mb-5 text-body">Music Lyrics Finder</h1>
            {error ? <Error message="Both fields are required" /> : null}
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Artist</label>
                  <input
                    onChange={readInput}
                    value={artist}
                    type="text"
                    name="artist"
                    placeholder="e.g. Metallica"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Song</label>
                  <input
                    onChange={readInput}
                    value={song}
                    type="text"
                    name="song"
                    placeholder="e.g. Enter Sandman"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <button className="btn btn-dark float-right" type="submit">
              Search
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

Form.propTypes = {
  setSearch: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default Form;
