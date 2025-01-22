'use client';

import {Container } from "@mui/material";

import ResumeComponent from "features/resume/resumeComponent";

const Resume = () => {

  return (
    <Container disableGutters sx={{
      overflow: "hidden",
      textOverflow: 'ellipsis',
      wordBreak: 'break-word',
      width: '100%'
    }} >
      <ResumeComponent />
    </Container>
  );
}

export default Resume;