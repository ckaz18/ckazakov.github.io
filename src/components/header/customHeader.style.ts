import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.grey[50],
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  },
  padding: '8px',
  margin: '4px',
}));