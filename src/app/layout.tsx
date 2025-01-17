"use client";

import { ThemeProvider } from "@emotion/react"
import { Container } from "@mui/material";
import CustomHeader from "components/header/customHeader";
import theme from 'theme';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
        <CustomHeader />
          <Container sx={{ margin: '8 10 20 10'}}>
          {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  )
}