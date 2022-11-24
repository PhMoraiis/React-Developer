import Button from "../../components/Button";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container, LoginContainer, Column, Spacing, Title } from "./styles";
import { defaultValues, IFormLogin } from "./types";

const schema = yup.object({
  email: yup.string().email('E-mail inválido').required('Campo Obrigatório'),
  password: yup.string().min(8, 'No minimo 8 caracteres').required('Campo Obrigatório'),
})
.required();

const Login = () => {

  const { control, formState: { errors } } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues,
    reValidateMode: 'onChange',
  });


  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <Input name="email" placeholder="Email" control={control} errorMessage={errors?.email?.message} />
          <Spacing />
          <Input type="password" name="password" placeholder="Senha" control={control} errorMessage={errors?.password?.message} />
          <Spacing />
          <Button title="Entrar" />
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;
