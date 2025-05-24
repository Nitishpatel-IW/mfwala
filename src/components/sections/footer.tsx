import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Footer() {
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundColor: "#0D0D0D",
        px: { xs: 2, md: 0 },
        pt: { xs: 4, md: 12.5 },
        pb: { xs: 4, md: 4 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "center", md: "flex-start" },
        gap: { xs: 4, md: 10 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          pl: { xs: 0, md: 15 },
          lineHeight: "120%",
          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        <Typography
          sx={{
            color: "#808080",
            fontSize: "18px",
            textAlign: { xs: "center", md: "left" },
            fontWeight: 400,
            lineHeight: "120%",
          }}
        >
          Contact us @
        </Typography>
        <Typography
          sx={{
            color: "#EFEDED",
            fontSize: { xs: "18px", md: "40px" },
            textAlign: { xs: "center", md: "left" },
            fontWeight: 200,
            lineHeight: "120%",
          }}
        >
          Support@mutualfundwala.com
        </Typography>
        {isSmallScreen && (
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mt: 2,
            }}
          >
            <img src="assets/facebook.svg" alt="facebook" width={20} />
            <img src="assets/instagram.svg" alt="instagram" width={20} />
            <img src="assets/twitter.svg" alt="twitter" width={20} />
          </Box>
        )}
        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "#2c2c2c",
            display: { xs: "block", md: "none" },
            my: 3,
          }}
        />

        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: "center",
            mt: { xs: 0, md: 8 },
          }}
        >
          <Typography sx={{ color: "#808080", fontSize: "15px" }}>
            ©Copyright 2025
          </Typography>
          <Divider
            orientation="vertical"
            sx={{ bgcolor: "#C1F900", height: "12px" }}
          ></Divider>
          <Typography sx={{ color: "#808080", fontSize: "15px" }}>
            Privacy Policy
          </Typography>
          <Divider
            orientation="vertical"
            sx={{ bgcolor: "#C1F900", height: "12px" }}
          ></Divider>
          <Typography
            onClick={() => {
              navigate("/terms");
              window.scrollTo(0, 0);
            }}
            sx={{ color: "#808080", fontSize: "15px", cursor: "pointer" }}
          >
            Terms & Condition
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          mt: { xs: 4, md: 2 },
          display: { xs: "block", md: "flex" },
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 9,
        }}
      >
        {!isSmallScreen && (
          <Box
            sx={{
              display: "flex",
              gap: 3,
              mt: 2.5,
              pl: { xs: 0, md: 5 },
            }}
          >
            <img src="assets/facebook.svg" alt="facebook" width={20} />
            <img src="assets/instagram.svg" alt="instagram" width={20} />
            <img src="assets/twitter.svg" alt="twitter" width={20} />
          </Box>
        )}
        <Box
          sx={{
            maxHeight: { xs: "162px", md: "300px" },
            maxWidth: { xs: "162px", md: "303px" },
          }}
        >
          <Box
            component="img"
            src="assets/Logo.svg"
            alt="MW Logo"
            sx={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
