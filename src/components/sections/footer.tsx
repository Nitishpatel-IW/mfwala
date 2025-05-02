import { Box, Divider, Typography } from "@mui/material";


function Footer() {
  return (
    <Box
      style={{
        padding: "40px 0 0 150px",
        backgroundColor: "#0D0D0D",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "100px",
        height: "560px",
      }}
    >
      <Box>
        <Typography sx={{ color: "#AAA9A9", fontSize: "15px" }}>
          Contact us @
        </Typography>
        <Typography sx={{ color: "#EFEDED", fontSize: "40px" }}>
          Support@mutualfundwala.com
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Typography sx={{ color: "#AAA9A9", fontSize: "15px" }}>
            ©Copyright 2025
          </Typography>
          <Divider orientation="vertical" sx={{ color: "red" }}></Divider>
          <Typography sx={{ color: "#AAA9A9", fontSize: "15px" }}>
            Privacy Policy
          </Typography>
          <Divider sx={{ color: "#AAA9A9" }} orientation="vertical"></Divider>
          <Typography sx={{ color: "#AAA9A9", fontSize: "15px" }}>
            Terms & Condition
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box sx={{ display: "flex", gap: 2 ,px:6}}>
          <img
            src="../../assets/facebook.svg"
            alt="logo"
            style={{ maxHeight: "500px" }}
          />
          <img
            src="../../assets/instagram.svg"
            alt="logo"
            style={{ maxHeight: "500px" }}
          />
          <img
            src="../../assets/twitter.svg"
            alt="logo"
            style={{ maxHeight: "500px" }}
          />
        </Box>

      </Box>
    </Box>
  );
}

export default Footer;
