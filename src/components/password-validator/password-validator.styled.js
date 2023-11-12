import styled from "@emotion/styled";
import { TextField, Box } from '@mui/material';

export const PasswordField = styled(TextField)(() => ({
    marginBottom: '10px',
    padding: '8px',
    fontSize: '16px'
}));

export const Container = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    fontFamily: 'Arial'
}));