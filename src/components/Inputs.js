import React, {useState} from 'react';
import { Container, InputGroup, InputGroupAddon, Label, Input, Button, Row, Col } from 'reactstrap';

const Inputs = (props) => {
    const [showResults, SetShowResults] = useState(false);
    let results;
    if (showResults) {
        results = <h3>{props.amount} {props.baseCurrency} = {props.result} {props.toCurrency}</h3>

    }

    return(
        <Container className="mt-4">
            <Row>
                <Col>
                <InputGroup size="lg">
                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                    <Input placeholder="Ex. 100" id="amount" value={props.amount} min={0} max={100000} type="number" step="1" onChange={e => props.setAmount(e.currentTarget.value)}/>
                </InputGroup>
                </Col>
                <Col>
                <InputGroup size="lg">
                    <Input type="select" id='base' value={props.baseCurrency} onChange={e => props.setBaseCurrency(e.currentTarget.value)}>
                        <option>{props.baseCurrency}</option>
                        {props.currencies.map(item => (
                        <option key={item[0]} value={item[0]}>{item[0]}</option>
                        ))}
                    </Input>
                </InputGroup>
                </Col>
                <Col>
                
                <InputGroup size="lg">
                    <Input type="select" id='toCurrency' value={props.toCurrency} onChange={e => props.setToCurrency(e.currentTarget.value)}>
                        {props.currencies.map(item => (
                        <option key={item[0]} value={item[0]}>{item[0]}</option>
                        ))}
                    </Input>
                </InputGroup>
                </Col>
                <Col className="align-items-center justify-content-center">
                    <Button onClick={() => {props.convert(); SetShowResults(true)}}>Convert</Button>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center align-items-center my-3">
                      <div>{results}</div>           
                </Col>
            </Row>
        </Container>
    )
}

export default Inputs;