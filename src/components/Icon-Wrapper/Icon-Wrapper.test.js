import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import IconWrapper from './Icon-Wrapper.component';

describe('IconWrapper Component', () => {
    test('renders icon wrapper component when isValid prop is true', () => {
        render(<IconWrapper isValid={true} />);

        const iconWrapper = screen.getByTestId('CheckCircleIcon');


        expect(iconWrapper).toHaveStyle({ color: 'green' });
        expect(iconWrapper).toBeInTheDocument();
    });

    test('renders icon wrapper component when isValid prop is false', () => {
        render(<IconWrapper isValid={false} />);

        const iconWrapper = screen.getByTestId('CancelIcon');


        expect(iconWrapper).toHaveStyle({ color: 'red' });
        expect(iconWrapper).toBeInTheDocument();
    });
})