import React from 'react';

import { Container } from './styles';
import ItemList from '../ItemList';

export default function List({ works }) {
    return (
        <Container>
            {works && works.map(work => <ItemList key={work.id} work={work} />)}
        </Container>
    );
}
