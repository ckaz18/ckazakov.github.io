import { FC } from "react";
import selfie from '../../../public/selfie.jpg';
import Image from "next/image";
import { Box, Typography, useTheme } from "@mui/material";

const Homepage: FC = () => {
  const theme = useTheme();

  return (
    <Box 
      alignItems='center'
      flexDirection='column'
      height='100vh'
      paddingTop='5%'
      sx={{ background: `linear-gradient(90deg, ${theme.palette.primary.dark} 10%, ${theme.palette.primary.light} 90%)` }}
      textAlign='center'
      borderRadius='3px'

    >
    <Typography variant='h1' style={{backgroundColor: 'transparent important!', color: theme.palette.grey[300]}}>
      Hi, I'm Christi Kazakov
    </Typography>
    <Typography variant='h4' paddingTop='1em' style={{color: theme.palette.grey[300]}} >
      Full Stack Engineer | React | Node | Typescript 
    </Typography>
    <Image src={selfie} alt='Selfie' width={250} style={{ margin: '1.75rem', borderRadius: '25%', height: 'auto' }} ></Image>
    <Typography variant='h5' marginBottom='2rem' style={{color: theme.palette.grey[300]}} >This is a work in progress...</Typography>
  </Box>
  );
};

export default Homepage;
