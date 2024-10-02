import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";

const RegistrationSectionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  zIndex: 20,
  marginBottom: "192.68px",
  [theme.breakpoints.down("lg")]: {
    marginBottom: "140px",
  },
  [theme.breakpoints.down("md")]: {
    marginBottom: "80px",
  },
}));

const SecondTitle = styled("h2")(({ theme }) => ({
  textAlign: "left",
  color: "#FFF",
  fontFamily: "var(--second-family)",
  fontSize: "34px",
  fontWeight: 800,
  lineHeight: "100%",
  marginBottom: "54px",
  position: "relative",
  zIndex: 20,
  [theme.breakpoints.down("sm")]: {
    margin: "0 0 30px",
    textAlign: "center",
  },
}));
export const RegistrationSection: React.FC = () => {
  return (
    <RegistrationSectionContainer>
      <SecondTitle>
        Відвідати <br /> онлайн-конференцію
      </SecondTitle>
      <RegistrationForm />
    </RegistrationSectionContainer>
  );
};
