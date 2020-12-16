import React, {useState, useEffect} from 'react';
import { Container, InputGroup, InputGroupAddon,  Input, Button, DropdownItem, DropdownToggle, DropdownMenu, Row, Col } from 'reactstrap';
const axios = require('axios').default;

const Inputs = (props) => {
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

    return(
        <Container className="mt-4">
            <Row>
                <Col>
                <InputGroup size="lg">
                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                    <Input placeholder="Amount" value={amount} min={0} max={100000} type="number" step="1" onChange={e => setAmount(e.currentTarget.value)}/>
                </InputGroup>
                </Col>
                <Col>
                <InputGroup size="lg">
                    <Input type="select" value={baseCurrency} onChange={e => setBaseCurrency(e.currentTarget.value)}>
                        <option>{baseCurrency}</option>
                        {currencies.map(item => (
                        <option value={item[0]}>{item[0]}</option>
                        ))}
                    </Input>
                </InputGroup>
                </Col>
                <Col>
                
                <InputGroup size="lg">
                    <Input type="select" value={toCurrency} onChange={e => setToCurrency(e.currentTarget.value)}>
                        {currencies.map(item => (
                        <option value={item[0]}>{item[0]}</option>
                        ))}
                    </Input>
                </InputGroup>
                </Col>
                <Col className="align-items-center justify-content-center">
                    <Button onClick={() => convert()}>Convert</Button>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center align-items-center my-3">
                    <h4>{amount} {baseCurrency} = {result} {toCurrency}</h4>
                </Col>
            </Row>
        </Container>
    )
}

export default Inputs;