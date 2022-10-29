import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';


import { Container, Title, TitleHighlight, Column } from './styles';

const Feed = () => {
    return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                    <UserInfo percentual={82} nome="Philipe Morais" image="https://avatars.githubusercontent.com/u/101151994?s=400&u=265589e40c6b8724dbd5db89342b090e959b0f9a&v=4" />
                    <UserInfo percentual={50} nome="Philipe Morais" image="https://avatars.githubusercontent.com/u/101151994?s=400&u=265589e40c6b8724dbd5db89342b090e959b0f9a&v=4" />
                    <UserInfo percentual={70} nome="Philipe Morais" image="https://avatars.githubusercontent.com/u/101151994?s=400&u=265589e40c6b8724dbd5db89342b090e959b0f9a&v=4" />
                    <UserInfo percentual={100} nome="Philipe Morais" image="https://avatars.githubusercontent.com/u/101151994?s=400&u=265589e40c6b8724dbd5db89342b090e959b0f9a&v=4" />
                    <UserInfo percentual={98} nome="Philipe Morais" image="https://avatars.githubusercontent.com/u/101151994?s=400&u=265589e40c6b8724dbd5db89342b090e959b0f9a&v=4" />
            </Column>
        </Container>
    </>
    )
}

export { Feed };