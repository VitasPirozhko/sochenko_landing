import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const RegistrationPromoLine = styled(Box)(({ theme }) => ({
width: '100%',
  height: '46px',
  display: 'flex',
  justifyContent: 'center',
  background: 'rgb(69, 42, 244)',
  position: 'fixed',
  left: 0,
  bottom: 0,
  zIndex: 50,
  [theme.breakpoints.down('sm')]: {
    height: '56px',
    flexDirection: 'column',
  },
}));

const Dash = styled(Box)({
  display: 'block',
  width: '37.41px',
  height: '1.55px',
  margin: '0 21.5px 0 21.17px',
  background: 'rgb(255, 255, 255)',
});

export const RegistrationPromo = () => {
  return (
    <RegistrationPromoLine>
      <Typography
        variant="body1"
        sx={{
          display: 'flex',
          height: 'inherit',
          alignItems: 'center',
          fontFamily: 'var(--font-family)',
          fontWeight: 600,
          fontSize: '16px',
          lineHeight: '88%',
        }}
      >
        Безкоштовна онлайн-конференція
        <Dash />
        30 квітня о 10:00
      </Typography>
    </RegistrationPromoLine>
  );
};

 