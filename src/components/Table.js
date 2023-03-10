import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Table() {
  const { data, filterByNumericValues } = useContext(MyContext);

  const filtrarPorValor = () => {
    let myFilter = data;
    filterByNumericValues.forEach((filtro) => {
      myFilter = myFilter.filter((item) => {
        if (filtro.comparison === 'maior que') {
          return Number(item[filtro.column]) > Number(filtro.value);
        } if (filtro.comparison === 'menor que') {
          return Number(item[filtro.column]) < Number(filtro.value);
        } if (filtro.comparison === 'igual a') {
          return Number(item[filtro.column]) === Number(filtro.value);
        }
        return item;
      });
    });
    return myFilter;
  };
  const results = filtrarPorValor();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {results ? results.map(({
            name,
            rotation_period: rotationPeriod,
            orbital_period: orbitalPeriod,
            diameter,
            climate,
            gravity,
            terrain,
            surface_water: surfaceWater,
            population,
            residents,
            films,
            created,
            edited,
            url,
          }, i) => (
            <tr key={ i }>
              <td>{name}</td>
              <td>{rotationPeriod}</td>
              <td>{orbitalPeriod}</td>
              <td>{diameter}</td>
              <td>{climate}</td>
              <td>{gravity}</td>
              <td>{terrain}</td>
              <td>{surfaceWater}</td>
              <td>{population}</td>
              <td>{residents}</td>
              <td>{films}</td>
              <td>{created}</td>
              <td>{edited}</td>
              <td>{url}</td>
            </tr>
          )) : null}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
