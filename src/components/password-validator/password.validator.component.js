import React, { useState } from 'react';
import { Container, PasswordField, RequirementItem, RequirementList, Title } from './password-validator.styled';

const PasswordValidator = ({ options= [] }) => {
    const [password, setPassword] = useState('');

    return (
        <Container>
            <Title>Password Component</Title>
            <PasswordField
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            ></PasswordField>
            <RequirementList>
                {options.map((option, index) => (
                    <RequirementItem key={index}></RequirementItem>
                ))}
            </RequirementList>
        </Container>
    )
};

export default PasswordValidator;