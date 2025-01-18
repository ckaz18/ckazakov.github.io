'use client';

import { Container, Paper, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Grid2 from "@mui/material/Grid2";
import Link from "next/link";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(3),
  height: '100%',
}));

const ContactItem = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));


const Resume = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid2 container spacing={2}>
         <Grid2 size={4} sx={{ xs: 12, md: 4,}}>
         <Item elevation={3}>
           <Typography variant='h4' gutterBottom>Contact Info</Typography>
           <ContactItem>
             <EmailIcon sx={{ mr: 2 }} />
             <Link href="mailto:ckazakov18@gmail.com">ckazakov18@gmail.com</Link>
           </ContactItem>
           <ContactItem>
             <LocalPhoneIcon sx={{ mr: 2 }} />
             1+(303)-503-5168
           </ContactItem>
           <ContactItem>
             <LinkedInIcon sx={{ mr: 2 }} />
             <Link href="https://www.linkedin.com/in/ckazakov/" target="_blank">LinkedIn Profile</Link>
           </ContactItem>
           <ContactItem>
             <GitHubIcon sx={{ mr: 2 }} />
             <Link href="https://github.com/ckaz18" target="_blank">GitHub Profile</Link>
           </ContactItem>
         </Item>
       </Grid2>
        <Grid2 size={8}>
        <Item>
          {/* Right column content */}

          </Item>
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default Resume;