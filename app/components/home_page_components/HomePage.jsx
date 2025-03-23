"use client";
import { home_page_context } from "@/utils/textUtils";
import { Box, Button, Grid2, Snackbar, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import React, { useState } from "react";
import google_icon from "@/app/assets/google_icon.png";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "calc(100vh - 65px)",
  display: "flex",
  justifyContent: "center",
  padding: `${theme.spacing(10)} 0px`,
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1230px",
  width: "90%",
  margin: "auto",
  height: "100%",
}));

const DemoImage = styled(Image)(({ theme }) => ({
  width: "80%",
  height: "auto",
  borderRadius: "20px",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "48px",
  fontWeight: 600,
  lineHeight: "56px",
}));

const SecondSectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  fontWeight: 600,
  lineHeight: "36px",
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: 500,
  lineHeight: "26px",
}));

const SecondSectionDescription = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "26px",
}));

const LeftSideContainer = styled(Box)(({ theme }) => ({
  width: "70%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  rowGap: theme.spacing(2),
}));

const Googlebtn = styled(Button)(({ theme }) => ({
  width: "auto",
  height: "100%",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#2d85f0",
  color: "#fff",
}));

const Glogo = styled(Image)(({ theme }) => ({
  width: "25px",
  height: "25px",
}));

const GlogoContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(1),
  boxShadow: "border-box",
  display: "flex",
  justifyContent: "center",
  marginRight: theme.spacing(1),
}));

const ClientLogo = styled(Image)(({ theme }) => ({
  width: "100px",
  height: "auto",
}));

const ClientLogoContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: `${theme.spacing(5)} 0px`,
}));

function HomePage() {
  const [open, setOpen] = useState(true);
  const [allowCookiePopup, setAllowCookiePopup] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const cookiesAction = (
    <Stack justifyContent="center" alignItems="center" width="100%">
      <Button
        onClick={() => {
          setAllowCookiePopup(false);
        }}
        variant="contained"
        color="secondary"
      >
        Allow all cookies
      </Button>
    </Stack>
  );

  return (
    <>
      <Snackbar
        sx={{
          "& .MuiSnackbarContent-root": {
            borderRadius: "50px !important",
            backgroundColor: "#0064A0",
          },
          "& .MuiSnackbarContent-message": {
            width: "90%",
          },
        }}
        open={open}
        message="Slack is your Digital HQ. Meet the new features keeping teams connected in a work-from-anywhere world. Let'Go"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        action={action}
      />
      <Snackbar
        sx={{
          "& .MuiSnackbarContent-root": {
            width: "100px",
            borderRadius: "10px !important",
            backgroundColor: "#ffffff",
            color: "#000",
            fontWeight: 500,
          },
          "& .MuiSnackbarContent-action": {
            width: "100%",
          },
        }}
        open={allowCookiePopup}
        message="This website uses cookies to enhance user experience and to analyze performance and traffic on our website. We also share information about your use of our site with our social media, advertising and analytics partners. More Info"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        action={cookiesAction}
      />
      <Container>
        <InnerContainer>
          <Grid2 container>
            <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
              <LeftSideContainer>
                <Title>{home_page_context.left_side_context.title}</Title>
                <Description>
                  {home_page_context.left_side_context.description}
                </Description>
                <Stack direction="row" spacing={1}>
                  <Button color="secondary" variant="contained" size="large">
                    Try For Free
                  </Button>
                  <Googlebtn>
                    <GlogoContainer>
                      <Glogo src={google_icon} alt="Google INC." />
                    </GlogoContainer>
                    Sign Up With Goggle
                  </Googlebtn>
                </Stack>
              </LeftSideContainer>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
              <DemoImage
                src={home_page_context.right_side_image}
                alt="Image Representing Slack UI"
              />
            </Grid2>
          </Grid2>

          <ClientLogoContainer>
            <Grid2 container columns={{ xs: 14, sm: 14, md: 14 }}>
              {home_page_context.our_clients.map((data) => {
                return (
                  <Grid2 key={data._id} size={{ md: 2 }}>
                    <Stack
                      height="100%"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <ClientLogo src={data.src} alt={data.alt_text} />
                    </Stack>
                  </Grid2>
                );
              })}
            </Grid2>
          </ClientLogoContainer>
          <Grid2 container>
            <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
              <DemoImage
                src={home_page_context.second_section_context.image}
                alt="Image Representing Slack UI"
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
              <LeftSideContainer>
                <SecondSectionTitle>
                  {home_page_context.second_section_context.title}
                </SecondSectionTitle>
                <SecondSectionDescription>
                  {home_page_context.second_section_context.description}
                </SecondSectionDescription>
                <Stack direction="row" spacing={1}>
                  <Button color="secondary" variant="outlined" size="large">
                    Watch Video
                  </Button>
                </Stack>
              </LeftSideContainer>
            </Grid2>
          </Grid2>
        </InnerContainer>
      </Container>
    </>
  );
}

export default HomePage;
