import React from 'react';
import './App.css';
import MyProvider from './context/MyProvider';
import Table from './components/Table';
import Input from './components/Input';
import FiltroNumerico from './components/FiltroNumerico';

function App() {
  return (
    <MyProvider>
      <span>
        <Input />
        <FiltroNumerico />
        <Table />
      </span>
    </MyProvider>
  );
}

export default App;
