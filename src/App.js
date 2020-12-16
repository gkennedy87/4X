import React,{useState} from 'react';
import {Container, Row, Col} from 'reactstrap';
import RatesTable from './components/RatesTable';
import Topnav from './components/Topnav';
import Inputs from './components/Inputs';

function App() {
  return (
    <div className="App">
      <Topnav />
      <Row>
        <Inputs />
      </Row>
      <Row>
        <RatesTable />
      </Row>
    </div>
  );
}

export default App;
