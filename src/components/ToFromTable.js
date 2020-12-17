import React from 'react';
import {Container,Table} from 'reactstrap';

const toFromTable = (props) => {
    const amountArr = [1,5,10,25,50,100,500,1000,5000,10000,50000];
    const bc = props.baseCurrency;
    const tc = props.toCurrency;

    return(
        <Container>
            <Table>
                <thead>
                    <tr>
                    <th>{tc}</th>
                    <th>{bc}</th>
                    </tr>
                </thead>
                <tbody>
                    {amountArr.map(item => (
                    <tr>
                        <th scope="row">{item} {tc}</th>
                        <td>{item * props.rate} {bc}</td>
                    </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default toFromTable;