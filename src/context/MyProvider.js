import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [temporario, setTemporario] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0 });
  const filteredByName = planets ? planets.filter(
    (planet) => planet.name.toLowerCase().includes(filterByName.name.toLocaleLowerCase()),
  ) : null;
  const listaPlanetas = filterByName.name ? filteredByName : planets;

  const handleChange = ({ target }) => {
    setFilterByName({
      name: target.value,
    });
  };

  const handleFilter = ({ target }) => {
    setTemporario(
      {
        ...temporario,
        [target.name]: target.value,
      },
    );
  };

  const filtrar = () => {
    setFilterByNumericValues([
      ...filterByNumericValues,
      temporario,
    ]);
  };

  useEffect(() => {
    async function fetchResults() {
      const { results } = await fetch('https://swapi-trybe.herokuapp.com/api/planets/').then((response) => response.json());
      setPlanets(results);
    }

    fetchResults();
  }, []);

  return (
    <MyContext.Provider
      value={ {
        handleChange,
        handleFilter,
        filtrar,
        data: listaPlanetas,
        filterByNumericValues,
      } }
    >
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default MyProvider;
