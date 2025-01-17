"use client";

import { ThemeProvider } from "@emotion/react"
import Header from "components/header/header";
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
        <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}