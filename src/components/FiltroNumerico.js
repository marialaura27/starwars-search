import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FiltroNumerico() {
  const { handleFilter, filtrar, filterByNumericValues } = useContext(MyContext);
  const opcoesColuna = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const colunasFiltro = filterByNumericValues.map((filtro) => filtro.column);
  return (
    <div>
      <label htmlFor="filtro-coluna">
        <select
          data-testid="column-filter"
          name="column"
          id="filtro-coluna"
          onChange={ handleFilter }
        >
          {opcoesColuna.filter((item) => !colunasFiltro.includes(item)).map(
            (item) => (
              <option key={ item } value={ item }>
                {item}
              </option>
            ),
          )}
        </select>
      </label>
      <label htmlFor="FiltroComparacao">
        <select
          data-testid="comparison-filter"
          name="comparison"
          id="filtro-comparacao"
          onChange={ handleFilter }
        >
          <option key="1" name="maior que" value="maior que">maior que</option>
          <option key="2" name="menor que" value="menor que">menor que</option>
          <option key="3" name="igual a" value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="filtro-valor">
        <input
          type="number"
          data-testid="value-filter"
          name="value"
          defaultValue="0"
          id="input-valor"
          onChange={ handleFilter }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ filtrar }
      >
        filtrar
      </button>
    </div>
  );
}

export default FiltroNumerico;
