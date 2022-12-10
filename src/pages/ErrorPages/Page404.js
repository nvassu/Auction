import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import { Button, Typography, Container } from "@mui/material";
// components
import Page from "../../components/Page";
// import Page from "../."

// ----------------------------------------------------------------------

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 700,
  margin: "auto",
  minHeight: "70vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
}));

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <Page title="404 Page Not Found">
      <Container>
        <ContentStyle sx={{ textAlign: "center", alignItems: "center" }}>
          <Typography variant="h3" paragraph>
            This page is under construction
          </Typography>

          <Typography sx={{ color: "text.secondary" }}>
            We are currently working hard on this page!
          </Typography>

          <Button
            to="/Home"
            size="large"
            variant="contained"
            component={RouterLink}
            sx={{ mt: 5 }}
          >
            Go to Home
          </Button>
        </ContentStyle>
      </Container>
    </Page>
  );
}
