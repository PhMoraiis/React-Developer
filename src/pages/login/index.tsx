import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { api } from '../../services/api';

import { CriarText, EsqueciText, SubTitleLogin, TitleLogin, Row, Column, Wrapper, Title, Container } from './styles';
import { IFormData } from './types';

const schema = yup.object({
    email: yup.string().email('Email inválido').required('Email obrigatório'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Senha obrigatória'),
}).required();

const Login = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({

        resolver: yupResolver(schema),
        mode: 'onChange',
    });


    const onSubmit = async (formData: IFormData) => {
        try {
            const { data } = await api.get(`users?email${formData.email}&password=${formData.password}`);
            if (data.length === 1) {
                navigate('/feed');
            } else {
                alert('Email ou senha incorretos');
            }
        } catch {
            alert('Erro ao fazer login');
        }
    }



    const handleClickSignIn = () => {
        navigate('/feed');
    }

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="Email" />
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" />
                        <Button title="Entrar" variant="secondary" onClick={handleClickSignIn} type="submit" />
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>);
}

export { Login };