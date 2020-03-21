import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Avatar from 'react-avatar';
import {
    Container,
    ContainerHeader,
    ContainerContent,
    TitleCompany,
    Period,
    Function,
    ContainerDetail,
    ContainerAvatar,
} from './styles';
import { viewDetail } from '~/store/modules/actions/actions';
import Tag from '~/components/Tag';

export default function DetailItem() {
    const dispatch = useDispatch();
    const view = useSelector(state => state.actions.view);
    const work = useSelector(state => state.actions.work);

    function onClickCloseDetail() {
        const data = {
            view: false,
            work: {},
        };
        dispatch(viewDetail(data));
    }

    return (
        <Container view={view}>
            <ContainerHeader>
                <button type="button" onClick={onClickCloseDetail}>
                    Close
                </button>
            </ContainerHeader>
            <ContainerContent>
                <ContainerAvatar>
                    <Avatar name={work.company} src={work.img} round />
                    <TitleCompany>{work.company}</TitleCompany>
                    {work.freela && <Tag msg="Freelancers" />}
                </ContainerAvatar>
                <ContainerDetail>
                    <Function>{work.function}</Function>
                    <Period>
                        {work.dateBegin} • {work.dateEnd}
                    </Period>
                    <Period>{work.period}</Period>
                </ContainerDetail>
            </ContainerContent>
        </Container>
    );
}
