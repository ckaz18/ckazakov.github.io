import { List, ListItem, Paper, styled } from "@mui/material";


export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(3),
  height: '100%',
}));

export const ContactItem = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

export const StyledList = styled(List)(() => ({
  marginLeft: '1.3rem',
  listStyleType: 'disc',
}));

export const StyledListItem = styled(ListItem)(() => ({
  display: 'list-item',
  marginBottom: '-0.5rem',
}));
