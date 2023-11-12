import styled from "@emotion/styled";
import { TextField, List, ListItem, Typography } from '@mui/material';


export const PasswordField = styled(TextField)(() => ({
    marginBottom: '10px',
    padding: '8px',
    fontSize: '16px'
}));

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

export const RequirementList = styled(List)(() => ({
    marginBottom: '10px',
    padding: '8px',
    fontSize: '16px'
}));

export const RequirementItem = styled(ListItem)();

export const Title = styled(Typography)(() => ({
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '24px',
    lineHeight: '42px',
    color: 'black',
}));