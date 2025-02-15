import { Typography } from "@mui/material";

const Hero = () => {
  return (
    <>
      <Typography
        variant="h3"
        sx={{ fontWeight: 700, textAlign: "center", mt: 25 }}
      >
        Welcome to Phonebook 📞
      </Typography>
      <Typography variant="h6" sx={{ textAlign: "center", mt: 2, }}>
        Save and manage your contacts easily and securely!
      </Typography>
    </>
  );
};

export default Hero;
