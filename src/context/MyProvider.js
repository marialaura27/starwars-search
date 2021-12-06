import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const filtered = planets ? planets.filter(
    (planet) => planet.name.toLowerCase().includes(filterByName.toLowerCase()),
  ) : null;

  const handleChange = ({ target }) => {
    setFilterByName({
      name: target.value,
    });
  };

  useEffect(() => {
    async function fetchResults() {
      const { results } = await fetch('https://swapi-trybe.herokuapp.com/api/planets/').then((response) => response.json());
      setPlanets(results);
    }

    fetchResults();
  });

  return (
    <MyContext.Provider
      value={ { handleChange, data: filterByName.name ? filtered : planets } }
    >
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default MyProvider;
