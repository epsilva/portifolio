import React from 'react';

import { Container } from './styles';
import List from './components/List';
import basis from '~/assets/images/basis.jpg';
import cts from '~/assets/images/cts.png';
import ctis from '~/assets/images/ctis.jpg';
import cast from '~/assets/images/cast.png';
import dbc from '~/assets/images/dbc.jpeg';
import recrutei from '~/assets/images/recrutei.png';

import DetailItem from './components/DetailItem';

export default function Work() {
    const works = [
        {
            id: 1,
            company: 'Basis Tecnolgy',
            function: 'Software developer',
            dateBegin: 'Aug 2013',
            dateEnd: 'Dec 2015',
            period: '2 years and 5 mouths',
            freela: false,
            img: basis,
        },
        {
            id: 2,
            company: 'Grupo ICTS',
            function: 'Software developer',
            dateBegin: 'Dec 2015',
            dateEnd: 'Apr 2018',
            period: '2 years and 5 mouths',
            freela: false,
            img: cts,
        },
        {
            id: 3,
            company: 'CTIS Tecnolgia',
            function: 'Software developer',
            dateBegin: 'Apr 2018',
            dateEnd: 'Oct 2018',
            period: '7 mouths',
            freela: false,
            img: ctis,
        },
        {
            id: 4,
            company: 'Cast Group',
            function: 'System Analyst',
            dateBegin: 'Oct 2018',
            dateEnd: 'Oct 2019',
            period: '1 year and 1 mouth',
            freela: false,
            img: cast,
        },
        {
            id: 5,
            company: 'DBC Company',
            function: 'Software developer',
            dateBegin: 'Oct 2019',
            dateEnd: '-',
            period: 'now',
            freela: false,
            img: dbc,
        },
        {
            id: 6,
            company: 'Recrutei',
            function: 'Software developer',
            dateBegin: 'Jan 2020',
            dateEnd: '-',
            period: 'now',
            freela: true,
            img: recrutei,
        },
    ];

    return (
        <Container id="Work">
            <List works={works} />
            <DetailItem />
        </Container>
    );
}
