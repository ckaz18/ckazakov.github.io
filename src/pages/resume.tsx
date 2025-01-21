'use client';

import { Box, List, ListItem, styled, Typography } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import Link from "next/link";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useEffect, useState } from "react";
import { ContactItem, Item } from "features/resume/resume.styles";

const StyledList = styled(List)(() => ({
  marginLeft: '1.3rem',
  listStyleType: 'disc',
}));
const StyledListItem = styled(ListItem)(() => ({
  display: 'list-item',
  marginBottom: '-0.5rem',
}));

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

    setContactInfo({
      email,
      phone,
      linkedIn,
      github
    });
    setIsLoading(false);
  }, []);

  return (
    <Box sx={{ mt: 4, mb: 4, display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }} >
      {isLoading ? <>Loading...</> :
        <Grid2 container spacing={2}>
          <Grid2 size={3} sx={{ xs: 12, md: 4, }}>
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
          <Grid2 size={9}>
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

                <Typography variant='h6' gutterBottom sx={{ fontWeight: 400 }} >
                  Software Engineer (Frontend Focus), Physna Inc
                </Typography>
                <Typography variant='body1' sx={{ fontStyle: 'italic', fontSize: '0.75rem', fontWeight: 350 }} >
                  June 2023 - October 2024
                </Typography>
                <Typography variant='body1' gutterBottom >
                  <StyledList>
                    <StyledListItem >
                      Developed a Chrome Extension integrating with Unity.com for 3D asset management,
                      enabling image search, asset comparisons, and user configuration.
                    </StyledListItem>
                    <StyledListItem >
                      Spearheaded React, TypeScript, NextJS web app development, replacing legacy systems and
                      driving substantial performance improvements.
                    </StyledListItem>
                    <StyledListItem>
                      Collaborated on 2D-to-3D model search capabilities and implemented asset collections for
                      various file types.
                    </StyledListItem>
                  </StyledList>
                </Typography>

                <Typography variant='h6' gutterBottom sx={{ fontWeight: 400 }} >
                  Sr. Software Engineer, Illuma Labs
                </Typography>
                <Typography variant='body1' sx={{ fontStyle: 'italic', fontSize: '0.75rem', fontWeight: 350 }} >
                  February 2023 - June 2023
                </Typography>
                <Typography variant='body1' gutterBottom >
                  <StyledList>
                    <StyledListItem >
                      Streamlined agile processes, including sprint organization, story writing, and testing, while
                      setting up performance testing frameworks for Lambda functions and improving WebSocket
                      reliability through enhanced logging and debugging.
                    </StyledListItem>
                  </StyledList>
                </Typography>

                <Typography variant='h6' gutterBottom sx={{ fontWeight: 400 }} >
                  Sr. Software Engineer, World Wide Technology
                </Typography>
                <Typography variant='body1' sx={{ fontStyle: 'italic', fontSize: '0.75rem', fontWeight: 350 }} >
                  October 2019 - January 2023
                </Typography>
                <Typography variant='body1' gutterBottom >
                  <StyledList>
                    <StyledListItem >
                      Led technical requirement gathering and architectural discussions for a large-scale
                      streaming platform, improving search algorithms with AWS Elasticsearch, Kafka, and
                      Kubernetes.
                    </StyledListItem>
                    <StyledListItem >
                      Developed APIs using NodeJS, TypeScript, and NestJS for web and mobile interfaces, and
                      configured Kafka Consumers to ingest data into Elasticsearch.
                    </StyledListItem>
                    <StyledListItem>
                      Transformed complex Excel application into efficient Python script, drastically reducing
                      processing time and rectifying calculation errors, showcasing problem-solving skills.
                    </StyledListItem>
                    <StyledListItem>
                      Built telecom applications using NodeJS, Python, and Ansible for real-time test execution
                      and logging on routers and modems utilizing webhooks.
                    </StyledListItem>
                    <StyledListItem>
                      Designed a Python API with AWS Lambda, S3, and DynamoDB to provide snow data for
                      Colorado Winter Resorts.
                    </StyledListItem>
                  </StyledList>
                </Typography>


                <Typography variant='h6' gutterBottom sx={{ fontWeight: 400 }} >
                  Software Engineer, Xentity Corporation (formerly Crestone Digital)
                </Typography>
                <Typography variant='body1' sx={{ fontStyle: 'italic', fontSize: '0.75rem', fontWeight: 350 }} >
                  July 2016 - September 2019
                </Typography>
                <Typography variant='body1' gutterBottom >
                  <StyledList>
                    <StyledListItem >
                      Pioneered multi-tenant voice apps with NLP , integrating diverse databases. Boosted
                      automated testing coverage to 70%, enhancing code reliability.
                    </StyledListItem>
                    <StyledListItem>
                      Developed iOS/Android apps with geospatial data, AWS Push Notifications, and offline
                      capabilities collaborating directly with CPW Fishing and Wildlife. Additionally provided customer support.
                    </StyledListItem>
                    <StyledListItem>
                      Created the Douglas County Alexa Skill as a proof of concept using NodeJS and open data.
                    </StyledListItem>
                  </StyledList>
                </Typography>
              </Box>
            </Item>
          </Grid2>
        </Grid2>
      }
    </Box>
  );
}

export default Resume;