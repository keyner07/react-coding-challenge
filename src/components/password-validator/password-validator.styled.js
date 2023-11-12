import styled from "@emotion/styled";
import { TextField, Box, List, ListItem, Typography } from '@mui/material';

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

export const RequirementList = styled(List)(() => ({
    marginBottom: '10px',
    padding: '8px',
    fontSize: '16px'
}));

export const RequirementItem = styled(ListItem, { shouldForwardProp: (prop) => prop !== 'isValid'})(({ isValid }) => ({
    color: isValid ? 'green' : 'red'
}));

export const Title = styled(Typography)(() => ({
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '24px',
    lineHeight: '42px',
    color: 'black',
}));