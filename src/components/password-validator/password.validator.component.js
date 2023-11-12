import React, { useState, useCallback } from 'react';
import { Container, PasswordField, RequirementItem, RequirementList, Title } from './Password-Validator.styled';
import IconWrapper from '../Icon-Wrapper/Icon-Wrapper.component';

const requirementsMap = {
    specialChar: /[@#$%^&*!]/,
    number: /\d/,
    uppercase: /[A-Z]/,
    noConsecutiveLetters: /^(?!.*(.)(?=\1)).+$/i,
};

const requirementsMapMessage = {
    specialChar: 'Has one or more of these special characters: !@#$%^&*',
    number: 'Has a number / digit',
    uppercase: 'Has an uppercase letter',
    noConsecutiveLetters: 'Has NO consecutive letters*** (stretch goal)',
}

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
                    <RequirementItem key={index}>
                        <IconWrapper isValid={validatePassword(password, option)} />
                        {requirementsMapMessage[option]}
                    </RequirementItem>
                ))}
            </RequirementList>
        </Container>
    )
};

export default PasswordValidator;