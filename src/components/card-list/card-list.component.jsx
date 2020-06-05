import React from 'react';
import Card from '../card/card.component';
import './card-list.styles.scss';

const CardList = ({ contents }) => (
    contents.map(({ name, output, status }, index) => (
        <Card key={index} serial={index} name={name} message={output} status={status} />
    ))
);

export default CardList;