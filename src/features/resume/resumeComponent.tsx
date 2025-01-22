import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import Link from "next/link";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { FC, useEffect, useState } from "react";
import { ContactItem, Item, StyledList, StyledListItem } from "features/resume/resume.styles";
import { experienceInformation } from "./resume.types";

const ResumeComponent: FC = () => {
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

    setContactInfo({
      email,
      phone,
      linkedIn,
      github
    });
    setIsLoading(false);
  }, []);

  return (
    <Box sx={{ mt: 4, mb: 4, display: 'flex', flexDirection: 'column', flexWrap: 'wrap', }} >
      {isLoading ? <>Loading...</> :
        <Grid2 container spacing={3} >
          <Grid2 sx={{ width: '21rem', paddingBottom: '1rem' }} >
            <Item elevation={1}>
              <Box sx={{ borderBottom: '1px solid #ccc' }} >
                <Typography variant='h5' gutterBottom >Contact Info</Typography>
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
              </Box>

              <Box sx={{ borderBottom: '1px solid #ccc' }}>
                <Typography variant='h5' gutterBottom >Education</Typography>
                <Typography variant='h6' gutterBottom sx={{ fontWeight: 400 }} > Metropolitan State University of Denver</Typography>
                <Typography variant='body1' sx={{ fontStyle: 'italic', fontSize: '0.75rem', fontWeight: 350 }} >
                  2012 - 2016
                </Typography>
                <Typography variant='body1' gutterBottom >Bachelor of Science in Computer Science</Typography>
                <Typography variant='body2' gutterBottom  >Minor in Mathematics</Typography>
              </Box>
            </Item >
          </Grid2>
          <Grid2 size="grow" sx={{ minWidth: '21rem', paddingBottom: '1rem' }}>
            <Item elevation={1}>
              {/* Right column content */}

              <Box sx={{ borderBottom: '1px solid #ccc' }} >
                <Typography variant='h5' gutterBottom >Summary</Typography>
                <Typography variant='body1' gutterBottom >
                  Full-stack software engineer with 7+ years of experience building web applications integrated with cloud
                  technologies. Proficient in TypeScript, Node.js, React, Python, AWS, and GCP. Known for injecting levity into high-pressure environments,
                  I build trust through transparent communication and collaborative problem-solving.
                </Typography>
              </Box>

              <Box sx={{ borderBottom: '1px solid #ccc' }} >
                <Typography variant='h5' gutterBottom  >Skills</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                  <Typography variant='body1' gutterBottom >
                    Typescript, Javascript, Node.js, ReactJS, Test Driven Development, Git, Lambda
                  </Typography>
                  <Typography variant='body1' gutterBottom >
                    GCP, AWS, PostgresSQL, Docker, Material UI, Express.js, NestJS
                  </Typography>
                  <Typography variant='body1' gutterBottom >
                    Python, Flask, MySQL, TypeORM, Elasticsearch, Jest, Mocha, Playwright,
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ borderBottom: '1px solid #ccc' }}>
                <Typography variant='h5' gutterBottom >Experience</Typography>
                {experienceInformation.map((experience) => (
                  <>
                    <Typography variant='h6' gutterBottom sx={{ fontWeight: 400 }} >
                      {experience.title}
                    </Typography>
                    <Typography variant='body1' sx={{ fontStyle: 'italic', fontSize: '0.75rem', fontWeight: 350 }} >
                      {experience.date}
                    </Typography>
                    <Typography variant='body2' gutterBottom >
                      <StyledList>
                        {experience.skills.map((skill) => (
                          <StyledListItem >
                            {skill}
                          </StyledListItem>
                        ))}
                      </StyledList>
                    </Typography>
                  </>
                ))}
              </Box>
            </Item>
          </Grid2>
        </Grid2>
      }
    </Box>
  );
}

export default ResumeComponent;