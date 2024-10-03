import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Box, FormControlLabel, Typography } from "@mui/material";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import { MainButton } from "../Button/Button";

interface FormData {
  name: string;
  surname: string;
  company: string;
  phone: string;
  email: string;
  message: string;
  color: string;
}

const InputField = styled(TextField)(() => ({
  width: "455px",
  height: "56px",
  marginBottom: "20px",
  color: "rgba(255, 255, 255, 0.4)",
  "& label": {
    color: "rgba(255, 255, 255, 0.4)",
    fontFamily: "var(--font-family)",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "115%",
    textAlign: "left",
  },
  "& label.Mui-focused": {
    color: "rgba(255, 255, 255)",
    fontSize: "12px",
    fontWeight: "500",
    lineHeight: "115%",
    display: "flex",
    alignItems: "center",
    padding: "2px 6px 4px 6px",
    borderRadius: "4px",
    background: "rgb(124, 105, 247)",
  },
  "& label.MuiFormLabel-filled": {
    color: "rgba(255, 255, 255)",
    fontFamily: "var(--font-family)",
    background: "rgb(124, 105, 247)",
    fontSize: "12px",
    padding: "2px 6px",
    borderRadius: "4px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      color: "rgba(255, 255, 255)",
      borderRadius: "4px",
      background: "rgba(255, 255, 255, 0.04)",
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "rgb(124, 105, 247)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgb(124, 105, 247)",
    },
    "&.Mui-error fieldset": {
      borderColor: "rgb(247, 105, 107)",
    },
  },
  "& label.Mui-error": {
    background: "rgb(247, 105, 107)",
    color: "rgba(255, 255, 255)",
    fontFamily: "var(--font-family)",
    fontSize: "12px",
    padding: "2px 6px",
    borderRadius: "4px",
    position: "absolute",
    left: 0,
    top: "-25px",
  },
  "& label.Mui-error.Mui-focused": {
    top: 0,
  },
  "& p.Mui-error": {
    color: "rgb(247, 105, 107)",
    fontFamily: "var(--font-family)",
    fontSize: "12px",
    fontWeight: "500",
    lineHeight: "100%",
    letterSpacing: "0%",
    textAlign: "right",
  },

  "& .MuiInputBase-input": {
    color: "white",
    fontFamily: "var(--font-family)",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "115%",
    "&::placeholder": {
      color: "rgba(255, 255, 255, 0.4)",
    },
  },
}));

const TextArea = styled(TextField)(() => ({
  width: "455px",
  marginBottom: "20px",
  "& label": {
    color: "rgba(255, 255, 255, 0.4)",
    fontFamily: "var(--font-family)",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "115%",
    textAlign: "left",
  },
  "& label.Mui-focused": {
    color: "rgba(255, 255, 255)",
    fontSize: "12px",
    fontWeight: "500",
    lineHeight: "115%",
    display: "flex",
    alignItems: "center",
    padding: "2px 6px 4px 6px",
    borderRadius: "4px",
    background: "rgb(124, 105, 247)",
  },
  "& label.MuiFormLabel-filled": {
    color: "rgba(255, 255, 255)",
    background: "rgb(124, 105, 247)",
    fontSize: "12px",
    padding: "2px 6px",
    borderRadius: "4px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      color: "rgba(255, 255, 255)",
      borderRadius: "4px",
      background: "rgba(255, 255, 255, 0.04)",
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "rgb(124, 105, 247)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgb(124, 105, 247)",
    },
  },
  "& .MuiInputBase-input": {
    color: "white",
    fontFamily: "var(--font-family)",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "115%",
    "&::placeholder": {
      color: "rgba(255, 255, 255, 0.4)",
    },
  },
}));

const BpIcon = styled("span")(() => ({
  borderRadius: 3,
  width: 24,
  height: 24,

  backgroundColor: "rgba(255, 255, 255, 0.04)",

  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: "rgba(255, 255, 255, 0.04)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(255, 255, 255, 0.04)",
  "&::before": {
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "rgba(255, 255, 255, 0.04)",
  },
});

function BpCheckbox(props: CheckboxProps) {
  return (
    <Checkbox
      sx={{ "&:hover": { bgcolor: "transparent" } }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
}

const FormPolicy = styled(Typography)(() => ({
  fontSize: "14px",
  color: "rgba(255, 255, 255, 0.6)",
}));

export const RegistrationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <InputField
          {...register("name", { required: "Імя є обов’язковим" })}
          label="Імя *"
          variant="outlined"
          error={!!errors.name}
          helperText={errors.name ? errors.name.message : ""}
        />
        <InputField
          {...register("surname", { required: "Прізвище є обов’язковим" })}
          label="Прізвище *"
          variant="outlined"
          error={!!errors.surname}
          helperText={errors.surname ? errors.surname.message : ""}
          fullWidth
        />
        <InputField
          {...register("company", { required: "Компанія є обов’язковою" })}
          label="Компанія *"
          variant="outlined"
          error={!!errors.company}
          helperText={errors.company ? errors.company.message : ""}
          fullWidth
        />
        <InputField
          {...register("phone", { required: "Номер телефону є обов’язковим" })}
          label="Мобільний телефон *"
          variant="outlined"
          error={!!errors.phone}
          helperText={errors.phone ? errors.phone.message : ""}
          fullWidth
        />
        <InputField
          {...register("email", {
            required: "Електронна пошта є обов’язковою",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Неправильний формат електронної пошти",
            },
          })}
          label="Email *"
          variant="outlined"
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ""}
          fullWidth
        />
        <TextArea
          {...register("message")}
          label="Ваше запитання"
          variant="outlined"
          multiline
          rows={4}
          placeholder="Якщо бажаєте, то поставте своє запитання та вкажіть кому саме ви б хотіли його поставити"
        />
        <Box display="flex" alignItems="center" maxWidth={455}>
          <FormControlLabel
            control={<BpCheckbox id="agriment" />}
            label={
              <Box
                className="signup_user-agriment-custom"
                display="flex"
                alignItems="center"
              >
                <FormPolicy>
                  Реєструючись, я повністю погоджуюся з&nbsp;
                  <a href="#" style={{ color: "rgb(252, 176, 45)" }}>
                    "Політикою конфіденційності Uspacy"
                  </a>
                </FormPolicy>
              </Box>
            }
          />
        </Box>
        <MainButton
          type="submit"
          backgroundColor="rgb(69, 42, 244)"
          textcolor="rgb(255, 255, 255)"
          btnmargin="0 0 30px 0"
        >
          Зареєструватися
        </MainButton>
      </Box>
    </form>
  );
};
