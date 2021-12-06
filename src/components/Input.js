import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Input() {
  const { handleChange } = useContext(MyContext);
  return (
    <div>
      <form>
        <label htmlFor="name">
          <input
            name="name"
            id="name"
            onChange={ handleChange }
            data-testid='name-filter'
          />
        </label>
      </form>
    </div>
  );
}

export default Input;
