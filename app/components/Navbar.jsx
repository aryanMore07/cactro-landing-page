"use client";
import { Box, Button, IconButton, Stack, styled } from "@mui/material";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { navbar_context } from "@/utils/textUtils";
import SearchIcon from "@mui/icons-material/Search";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1230px",
  width: "90%",
  margin: "auto",
  height: "65px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const LeftContainer = styled(Box)(({ theme }) => ({
  width: "fit-content",
  height: "100%",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

const RightContainer = styled(Box)(({ theme }) => ({
  width: "fit-content",
  height: "100%",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

const Logo = styled(Image)(({ theme }) => ({
  width: "100px",
  height: "auto",
}));

const NextLink = styled(Link)(({ theme }) => ({
  width: "100px",
  height: "auto",
  display: "flex",
  alignItems: "center",
  color: "#000",
  fontFamily: "Poppins",
  textDecoration: "none",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "normal",
  "&:hover": {
    textDecoration: "underline",
  },
}));

function Navbar() {
  return (
    <Container>
      <InnerContainer>
        <LeftContainer>
          <Logo src={navbar_context.app_logo} alt="Slack Crop." />
          <Stack direction="row" spacing={1}>
            {navbar_context.left_navlinks.map((link) => {
              return (
                <NextLink href={link.path} key={link._id}>
                  {link.title} {link?.icon}
                </NextLink>
              );
            })}
          </Stack>
        </LeftContainer>
        <RightContainer>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button variant="text" sx={{ color: "#000" }}>
            Sign In
          </Button>
          <Button variant="outlined" color="secondary">
            Talk To Sales
          </Button>
          <Button variant="contained" color="secondary">
            Try For Free
          </Button>
        </RightContainer>
      </InnerContainer>
    </Container>
  );
}

export default Navbar;
