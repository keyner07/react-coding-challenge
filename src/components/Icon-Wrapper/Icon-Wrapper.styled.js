import styled from "@emotion/styled";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export const CheckIcon = styled(CheckCircleIcon)(() => ({
    color: 'green'
}));

export const CloseIcon = styled(CancelIcon)(() => ({
    color: 'red'
}));