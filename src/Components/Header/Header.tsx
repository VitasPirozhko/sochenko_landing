import React from "react";
import { Toolbar } from "@mui/material";
import { styled } from "@mui/system";
import logo from "../../assets/imgs/logo_uspacy.svg";
import { MainButton } from "../Button/Button";

const HeaderContainer = styled("header")(({ theme }) => ({
  width: "100%",
  padding: "0 140px",
  margin: "74px 0 116px",
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
  backgound: "transparent",
  zIndex: 20,
  [theme.breakpoints.down("xl")]: {
    padding: "0 80px",
    margin: "54px 0 86px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0 20px",
    margin: "30px 0 60px",
  },
}));

const Logo = styled("a")({
  display: "block",
  width: "116px",
  height: "32.48px",
  "& img": {
    width: "100%",
    height: "100%",
  },
  "@media (max-width: 480px)": {
    width: "96px",
    height: "28px",
  },
});

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Toolbar
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Logo href="#">
          <img src={logo} alt="company logo" />
        </Logo>
        <MainButton>Зареєструватися</MainButton>
      </Toolbar>
    </HeaderContainer>
  );
};
