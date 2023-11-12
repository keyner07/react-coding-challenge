import React, { useState } from 'react';
import { Container, PasswordField } from './password-validator.styled';

const PasswordValidator = () => {
    const [password, setPassword] = useState('');

    return (
        <Container>
            <PasswordField
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            ></PasswordField>
        </Container>
    )
};

export default PasswordValidator;