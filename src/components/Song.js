import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Song = ({ song }) => {
  if (song.length === 0) return null;

  return (
    <Fragment>
      <h2>Lyrics</h2>
      <p className="letra">{song}</p>
    </Fragment>
  );
};

Song.propTypes = {
  song: PropTypes.string.isRequired,
};

export default Song;
