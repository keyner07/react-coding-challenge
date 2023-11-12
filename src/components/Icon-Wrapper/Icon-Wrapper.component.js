import React from 'react';
import { CheckIcon, CloseIcon } from './Icon-Wrapper.styled';

const IconWrapper = ({ isValid }) => (
    <>
        {
            isValid ?
            (
                <CheckIcon />
            )
            :
            (
                <CloseIcon />
            )
        }
    </>
);

export default IconWrapper;