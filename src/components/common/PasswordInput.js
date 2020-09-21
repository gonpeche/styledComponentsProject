import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from './Input';

const PasswordInputStyled = styled(Input).attrs(() => ({
    type: 'password',
    placeholder: 'Password',
}))`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
`;

export function PasswordInput(props) {
    const [showPassword, setShowPassord] = useState(false)
    return (
        <PasswordInputStyled {...props} />
    )
}