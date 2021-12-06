import React from 'react';
import './App.css';
import MyProvider from './context/MyProvider';
import Table from './components/Table';
import Input from './components/Input';

function App() {
  return (
    <MyProvider>
      <span>
        <Input />
        <Table />
      </span>
    </MyProvider>
  );
}

export default App;
