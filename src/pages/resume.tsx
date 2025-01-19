'use client';

import { Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import Link from "next/link";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { envVariable } from "helpers/privateKeys";
import { useEffect, useState } from "react";
import { ContactItem, Item } from "features/resume/resume.styles";


const Resume = () => {
  const [contactInfo, setContactInfo] = useState({
    email: '',
    phone: '',
    linkedIn: '',
    github: ''
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const email = process.env.NEXT_PUBLIC_EMAIL || '';
    const phone = process.env.NEXT_PUBLIC_PHONENUMBER || '';
    const linkedIn = process.env.NEXT_PUBLIC_LINKEDIN || '';
    const github = process.env.NEXT_PUBLIC_GITHUB || '';
    console.log({ email, phone, linkedIn, github }); // Debugging line

    setContactInfo({
      email,
      phone,
      linkedIn,
      github
    });
    setIsLoading(false);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {isLoading ? <>Loading...</> :
        <Grid2 container spacing={2}>
          <Grid2 size={4} sx={{ xs: 12, md: 4, }}>
            <Item elevation={3}>
              <Typography variant='h4' gutterBottom>Contact Info</Typography>
              <ContactItem>
                <EmailIcon sx={{ mr: 2 }} />
                <Link href={`mailto:${contactInfo.email}`}>{contactInfo.email}</Link>
              </ContactItem>
              <ContactItem>
                <LocalPhoneIcon sx={{ mr: 2 }} />
                {contactInfo.phone}
              </ContactItem>
              <ContactItem>
                <LinkedInIcon sx={{ mr: 2 }} />
                <a href={`${contactInfo.linkedIn}`} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
              </ContactItem>
              <ContactItem>
                <GitHubIcon sx={{ mr: 2 }} />
                <Link href={`${contactInfo.github}`} target="_blank">GitHub Profile</Link>
              </ContactItem>
            </Item>
          </Grid2>
          <Grid2 size={8}>
            <Item>
              {/* Right column content */}

            </Item>
          </Grid2>
        </Grid2>
      }
    </Container>
  );
}

export default Resume;