import { Container } from "@mui/material";
import Header from "components/header/header";
import Link from "next/link";

export default function Page() {
  return (
    <Container >
      <h1>
        Christi Kazakov
      </h1>
      <Link
      href={{
        pathname: '/resume',
      }}
    >
      Resume
    </Link>
    </Container>
  );
}