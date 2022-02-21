import PropTypes from 'prop-types';
import React, { Component } from 'react';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    const altText = `Planeta ${planetName}`;
    const plantStyle = `${planetName}-container`;

    return (
      <div data-testid="planet-card" className="planet-card">
        <div className="img-container">
          <img
            src={ planetImage }
            alt={ altText }
            className={ plantStyle }
          />
        </div>
        <p data-testid="planet-name">{planetName}</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};

export default PlanetCard;
