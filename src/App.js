import React,{useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import FromToTable from './components/FromToTable';
import Topnav from './components/Topnav';
import Inputs from './components/Inputs';
import ToFromTable from './components/ToFromTable';
import axios from 'axios';

function App() {
  const [baseCurrency, setBaseCurrency] =useState('EUR');
  const [toCurrency, setToCurrency] = useState('CAD');
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(0);
  const [returnRate, setReturnRate] = useState();
  const [result, setResult] = useState();

  function fetchRates() {
    fetch( "https://api.exchangeratesapi.io/latest")
        .then(data => data.json())
        .then(res => {
            let rates = Object.entries(res.rates); 
            setCurrencies(rates);
            setReturnRate(rates[0][1])     
        })
        .catch(err => console.log(err))
};
    function convert() {
      const from = baseCurrency;
      const to = toCurrency;
      axios.get(`https://api.exchangeratesapi.io/latest?base=${from}&symbols=${to}`)
      .then((res) => {
          const rate = Object.values(res.data.rates).pop();
          setReturnRate(rate); 
      })
      .catch((err) => console.log(err))
      
      setResult(amount * returnRate);
    }

    useEffect(() => {
      fetchRates();
    }, []);

  return (
    <div className="App">
      <Topnav />
      <Row className='mt-5'>
        <Inputs 
          baseCurrency={baseCurrency} 
          setBaseCurrency={setBaseCurrency} 
          toCurrency={toCurrency} 
          setToCurrency={setToCurrency} 
          currencies={currencies} 
          setCurrencies={setCurrencies}
          amount = {amount}
          setAmount = {setAmount}
          returnRate = {returnRate}
          setReturnRate = {setReturnRate}
          result = {result}
          setResult = {setResult}
          fetchRates={fetchRates}
          convert = {convert}
        />
      </Row>
      <Row className='mt-5'>
        <Col className="ml-2">
          <FromToTable rate={returnRate} baseCurrency={baseCurrency} toCurrency={toCurrency}/>
        </Col>
        <Col className='mr-2'>
          <ToFromTable rate ={returnRate} baseCurrency={baseCurrency} toCurrency={toCurrency}/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
