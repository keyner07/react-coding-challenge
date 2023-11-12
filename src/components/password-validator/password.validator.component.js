import React, { useState, useCallback } from 'react';
import { Container, PasswordField, RequirementItem, RequirementList, Title } from './password-validator.styled';

const requirementsMap = {
    specialChar: /[@#$%^&*!]/,
    number: /\d/,
    uppercase: /[A-Z]/,
    noConsecutiveLetters: /(.)\1/,
};

const PasswordValidator = ({ options= [] }) => {
    const [password, setPassword] = useState('');

    const validatePassword = useCallback(
        (value, option) => requirementsMap[option].test(value),
        []
    );

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
                    <RequirementItem key={index} isValid={validatePassword(password, option)}>{option}</RequirementItem>
                ))}
            </RequirementList>
        </Container>
    )
};

export default PasswordValidator;