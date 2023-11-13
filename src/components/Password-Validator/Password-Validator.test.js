import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PasswordValidator from './Password.Validator.component';
import { PasswordPlaceholder, TitleMessage, requirementsMapMessage } from './Password-Validator.message';

describe('PasswordValidator component', () => {
  test('renders password input and requirement list', () => {
    render(<PasswordValidator options={['specialChar', 'number']} />);
    
    const passwordInput = screen.getByText(TitleMessage);
    const requirementList = screen.getAllByRole('list');

    expect(passwordInput).toBeInTheDocument();
    expect(requirementList).toHaveLength(1);
  });

  test('updates password state on input change', () => {
    render(<PasswordValidator options={['specialChar', 'number']} />);

    const passwordInput = screen.getByPlaceholderText(PasswordPlaceholder);

    fireEvent.change(passwordInput, { target: { value: 'Test123!' } });

    expect(passwordInput.value).toBe('Test123!');
  });

  test('validates password with special character', () => {
    render(<PasswordValidator options={['specialChar']} />);

    const passwordInput = screen.getByPlaceholderText(PasswordPlaceholder);
    fireEvent.change(passwordInput, { target: { value: 'Test123!' } });

    const requirementItem = screen.getByText(requirementsMapMessage['specialChar']);
    const iconWrapper = screen.getByTestId('CheckCircleIcon');


    expect(iconWrapper).toHaveStyle({ color: 'green' });
    expect(requirementItem).toBeInTheDocument();
  });

  test('validates password with number', () => {
    render(<PasswordValidator options={['number']} />);

    const passwordInput = screen.getByPlaceholderText(PasswordPlaceholder);
    fireEvent.change(passwordInput, { target: { value: 'Test123!' } });

    const requirementItem = screen.getByText(requirementsMapMessage['number']);
    const iconWrapper = screen.getByTestId('CheckCircleIcon');

    expect(iconWrapper).toHaveStyle({ color: 'green' });
    expect(requirementItem).toBeInTheDocument();
  });

  test('does not validates password without number', () => {
    render(<PasswordValidator options={['number']} />);

    const passwordInput = screen.getByPlaceholderText(PasswordPlaceholder);
    fireEvent.change(passwordInput, { target: { value: 'Test!' } });

    const requirementItem = screen.getByText(requirementsMapMessage['number']);
    const iconWrapper = screen.getByTestId('CancelIcon');

    expect(iconWrapper).toHaveStyle({ color: 'red' });
    expect(requirementItem).toBeInTheDocument();
  });

  test('does not validates password with missing special character', () => {
    render(<PasswordValidator options={['specialChar']} />);

    const passwordInput = screen.getByPlaceholderText(PasswordPlaceholder);
    fireEvent.change(passwordInput, { target: { value: 'Test123' } });

    const requirementItem = screen.getByText(requirementsMapMessage['specialChar']);
    const iconWrapper = screen.getByTestId('CancelIcon');


    expect(iconWrapper).toHaveStyle({ color: 'red' });
    expect(requirementItem).toBeInTheDocument();
  });
});
