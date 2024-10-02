import { useEffect, useState } from "react";
import { styled } from "@mui/system";
import { Typography, Box } from "@mui/material";
import uspacy from "../../assets/imgs/uspacy.png";
import arrow from "../../assets/imgs/arrow.svg";
import { MainButton } from "../Button/Button";

const RegistrationContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1920px",
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

const RegistrationTop = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "1130px",
  marginBottom: "56px",
  animation: "slideUp 1s ease-out",
  "@keyframes slideUp": {
    "0%": { opacity: 0, transform: "translateY(20px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  },
  [theme.breakpoints.down("sm")]: {
    width: "calc(320px + (1130 - 320) * ((100vw - 360px) / (1200 - 360)))",
    marginBottom: "30px",
  },
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  maxWidth: "986px",
  textAlign: "center",
  color: "#FFF",
  fontFamily: "var(--second-family)",
  fontSize: "120px",
  fontWeight: 900,
  lineHeight: "88%",
  letterSpacing: "-7%",
  marginBottom: "56px",
  [theme.breakpoints.down("md")]: {
    fontSize: "calc(36px + (120 - 36) * ((100vw - 360px) / (1920 - 360)))",
  },
}));

const RegistrationBottom = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  minHeight: "361px",
  position: "relative",
  zIndex: 20,
  animation: "slideUp 1s ease-out",
  "@keyframes slideUp": {
    "0%": { opacity: 0, transform: "translateY(20px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));
const SecondTitle = styled("h2")(({ theme }) => ({
  textAlign: "left",
  color: "#FFF",
  fontFamily: "var(--second-family)",
  fontSize: "34px",
  fontWeight: 800,
  lineHeight: "100%",
  marginRight: "54px",
  position: "relative",
  zIndex: 20,
  [theme.breakpoints.down("sm")]: {
    margin: "0 0 30px",
    textAlign: "center",
  },
}));

const Content = styled(Typography)(({ theme }) => ({
  width: "692px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  fontFamily: "var(--font-family)",
  fontSize: "24px",
  lineHeight: "150%",
  marginBottom: "44px",
  position: "relative",
  zIndex: 20,
  [theme.breakpoints.down("md")]: {
    width: "592px",
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    width: "360px",
    fontSize: "16px",
  },
}));

export const RegistrationInfo = () => {
  const words: string[] = [
    "підприємництво",
    "мрію",
    "перемогу",
    "сенси",
    "майбутнє",
    "лідерство",
    "місію",
    "бізнес",
    "візію",
    "допомогу",
  ];

  const [currentWord, setCurrentWord] = useState<string>(words[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => {
        const currentIndex = words.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <RegistrationContainer>
      <RegistrationTop>
        <Typography variant="body1" color="white" mb={2}>
          Онлайн-конференція <span style={{ margin: "0 10px" }}>|</span> 30
          квітня о 10:00
        </Typography>

        <MainTitle variant="h1">
          Ми віримо у <br />
          <span>{currentWord}</span>
        </MainTitle>

        <MainButton
          backgroundColor="rgb(69, 42, 244)"
          textcolor="rgb(255, 255, 255)"
          btnmargin="0 0 30px 0"
        >
          Зареєструватися
        </MainButton>
      </RegistrationTop>
      <RegistrationBottom>
        <SecondTitle>
          Про що ця <br /> онлайн-конференція
        </SecondTitle>
        <Content>
          Щодня ми ходимо на роботу, зустрічаємося з друзями, донатимо на
          Перемогу, робимо рутинні речі. Але чи замислюємося ми щодня навіщо це
          все? Чи є у цьому сенс? Чи бачимо ми своє майбутнє? Чи мріємо ми?
          <img
            src={arrow}
            style={{
              width: "26px",
              height: "54px",
            }}
            alt="arrow down"
          />
        </Content>
        <img
          src={uspacy}
          alt="company name"
         className="contact-info__img-background"
        />
      </RegistrationBottom>
    </RegistrationContainer>
  );
};
