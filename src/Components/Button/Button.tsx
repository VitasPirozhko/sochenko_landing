import { Button } from "@mui/material";
import { styled } from "@mui/system";

interface MainButtonProps {
  type?: "button" | "submit" | "reset";
  backgroundColor?: string;
  textcolor?: string;
  btnmargin?: string;
  children?: string;
  onClick?: () => void;
}

const RoundButton = styled(Button)<MainButtonProps>(
  ({ theme, backgroundColor, textcolor, btnmargin }) => ({
    width: "213px",
    height: "58px",
    padding: "22px 38px 22px 38px",
    borderRadius: "100px",
    fontFamily: "var(--font-family)",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "88.5%",
    backgroundColor: backgroundColor || "#fff",
    color: textcolor || "#070707",
    textTransform: "none",
    border: "none",
    boxShadow: "none",
    margin: btnmargin || "0px",
    "&:hover": {
      backgroundColor: "rgb(252, 176, 45)",
      color: "#fff",
    },
    "&:focus": {
      backgroundColor: "rgb(252, 176, 45)",
      color: "#fff",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      width: "163px",
      height: "45px",
    },
  })
);

export const MainButton: React.FC<MainButtonProps> = ({
  backgroundColor,
  textcolor,
  btnmargin,
  type = "button",
  children,
  onClick,
}) => {
  return (
    <RoundButton
      variant="contained"
      backgroundColor={backgroundColor}
      textcolor={textcolor}
      btnmargin={btnmargin}
      type={type}
      onClick={onClick}
    >
      {children}
    </RoundButton>
  );
};
