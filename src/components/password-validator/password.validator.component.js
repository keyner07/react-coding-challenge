import React, { useState, useCallback } from 'react';
import { Container, PasswordField, RequirementItem, RequirementList, Title } from './Password-Validator.styled';
import IconWrapper from '../Icon-Wrapper/Icon-Wrapper.component';
import { PasswordPlaceholder, TitleMessage, requirementsMapMessage } from './Password-Validator.message';

const requirementsMap = {
    specialChar: /[@#$%^&*!]/,
    number: /\d/,
    uppercase: /[A-Z]/,
    noConsecutiveLetters: /^(?!.*(.)(?=\1)).+$/i,
};

const PasswordValidator = ({ options= [] }) => {
    const [password, setPassword] = useState('');

    const validatePassword = useCallback(
        (value, option) => requirementsMap[option].test(value),
        []
    );

    return (
        <Container>
            <Title variant='h2'>{TitleMessage}</Title>
            <PasswordField
                type="password"
                placeholder={PasswordPlaceholder}
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