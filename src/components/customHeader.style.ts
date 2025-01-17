import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.light,
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.grey[700],
  },
  padding: '8px',
  margin: '4px',
}));