import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({ artist }) => {
  if (Object.keys(artist).length === 0) return null;
  const {
    strArtistThumb,
    strArtist,
    strGenre,
    strBiographyEN,
    strFacebook,
    strTwitter,
    strWebsite,
  } = artist;

  const facebook = strFacebook ? (
    <a
      href={`https://${strFacebook}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-facebook"></i>
    </a>
  ) : null;

  const twitter = strTwitter ? (
    <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
      <i className="fab fa-twitter"></i>
    </a>
  ) : null;

  const webSite = strWebsite ? (
    <a href={`https://${strWebsite}`} target="_blank" rel="noopener noreferrer">
      <i className="fas fa-globe"></i>
    </a>
  ) : null;

  return (
    <div className="card border-light bg-light">
      <div className="card-header bg-dark text-light">{strArtist}</div>
      <div className="card-body">
        <img src={strArtistThumb} alt="artist" />
        <p className="card-text">Genre: {strGenre}</p>
        <h2 className="card-text">Biography</h2>
        <p className="card-text mb-4">{strBiographyEN}</p>
        <p className="card-text text-center">
          {facebook}
          {twitter}
          {webSite}
        </p>
      </div>
    </div>
  );
};

Artist.propTypes = {
  artist: PropTypes.object.isRequired,
};

export default Artist;
