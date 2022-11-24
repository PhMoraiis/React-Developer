import styled from 'styled-components';


export const InputContainer = styled.div`
    width: 100%;
    height: 42px;
    color: #f0ffffde;
    border-radius: 10px;
    overflow: hidden;
    padding: 0 10px;
    background: #514869;
    box-shadow: 0px 10px 40px #00000056;
    outline: none;
    
    & input {
        width: 100%;
        height: 42px;
        border-radius: 21px;
        background: #514869;
        border: 0;
        outline: none;
    }

`

export const ErrorMessage = styled.p`
    color: red;
    font-size:12px;
    margin-top:8px;
    margin-left:10px;
`