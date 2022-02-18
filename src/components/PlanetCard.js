import PropTypes from 'prop-types';
import React, { Component } from 'react';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;

    return (
      <div data-testid="planet-card" className="planet-card">
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
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
