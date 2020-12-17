import React from 'react';
import {Container,Table} from 'reactstrap';

const FromToTable = (props) => {
    const amountArr = [1,5,10,25,50,100,500,1000,5000,10000,50000];
    return(
        <Container>
            <Table>
      <thead>
        <tr>
          <th>{props.baseCurrency}</th>
          <th>{props.toCurrency}</th>
        </tr>
      </thead>
      <tbody>
        {amountArr.map(item => (
        <tr>
            <th scope="row">{item} {props.baseCurrency}</th>
            <td>{item * props.rate} {props.toCurrency}</td>
        </tr>
        ))}
      </tbody>
    </Table>
        </Container>
    )
}

export default FromToTable;