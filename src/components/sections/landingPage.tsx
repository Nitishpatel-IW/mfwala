import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Container,
  AppBar,
  Toolbar,
  Divider,
  Grid,
  useMediaQuery,
} from "@mui/material";
import DotLayer from "../lib/component/DotLayer";

const navTextStyle = {
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "120%",
  letterSpacing: "2%",
  color: "#AAA9A9",
};
const amfiStyle = {
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "120%",
  letterSpacing: "2%",
  color: "#AAA9A9",
};

const LandingPage = () => {
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#0D0D0D",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        {!isSmallScreen && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              position: "absolute",
              width: "100%",
              top: -1,
              opacity: 0.5,
            }}
          >
            <Box sx={{ position: "relative", display: "inline-block" }}>
              <DotLayer position="left" direction="leftToRight" />
              <img
                src="assets/LLight.svg"
                alt="logo"
                style={{ maxHeight: "500px" }}
              />
            </Box>
            <Box sx={{ position: "relative", display: "inline-block" }}>
              <DotLayer position="right" direction="rightToLeft" />
              <img
                src="assets/RLight.svg"
                alt="logo"
                style={{ maxHeight: "500px" }}
              />
            </Box>
          </Box>
        )}
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              mx: { xs: 0, sm: 0, md: 7 },
              my: { xs: 0, sm: 2, md: 3 },
              backgroundColor: { xs: "white", md: "transparent" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 3,
                color: { xs: "black", md: "white" },
                py: { xs: 2, md: 0 },
              }}
            >
              {isSmallScreen ? (
                <img
                  src="assets/blackGroup.svg"
                  alt="logo"
                  style={{ maxHeight: "500px" }}
                />
              ) : (
                <Box>
                  <img
                    src="assets/Logo_name.svg"
                    alt="logo"
                    style={{ maxHeight: "500px" }}
                  />
                </Box>
              )}
            </Box>
            {!isSmallScreen && (
              <Box
                sx={{
                  display: "flex",
                  gap: 3,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="body1"
                  onClick={() => navigate("/")}
                  sx={{ cursor: "pointer", ...navTextStyle }}
                >
                  Home
                </Typography>
                <Divider
                  orientation="vertical"
                  sx={{ bgcolor: "#C1F900", height: "10px" }}
                ></Divider>
                <Typography variant="body1" sx={{ ...navTextStyle }}>
                  About us
                </Typography>
                <Divider
                  orientation="vertical"
                  sx={{ bgcolor: "#C1F900", height: "10px" }}
                ></Divider>
                <Typography variant="body1" sx={{ ...navTextStyle }}>
                  What is mfwala?
                </Typography>
                <Divider
                  orientation="vertical"
                  sx={{ bgcolor: "#C1F900", height: "10px" }}
                ></Divider>
                <Typography variant="body1" sx={{ ...navTextStyle }}>
                  Our highlight
                </Typography>
              </Box>
            )}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#C1F900",
                color: "#1A1A1A",
                fontSize: "14px",
                fontWeight: 700,
                px: { xs: 2, sm: 3, md: 4 },
                py: 1.8,
                textTransform: "none",
                borderRadius: "6px",
                whiteSpace: "nowrap",
                boxShadow: "none",
              }}
            >
              Download App
            </Button>
          </Toolbar>
        </AppBar>
        <Container
          sx={{
            mt: { xs: 6, sm: 4, md: 10 },
            pb: { xs: 0, sm: 2, md: 4 },
            px: { xs: 3, sm: 6, md: 3 },
          }}
        >
          <Grid container spacing={4} alignItems="flex-start">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  mt: { xs: 0, md: 2 },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "800",
                    color: "#fff",
                    fontSize: { xs: "40px", md: "64px" },
                    lineHeight: { xs: "44px", md: "70px" },
                  }}
                >
                  Invest in
                  <br />
                  Mutual Funds
                  <br />
                  <Typography
                    variant="h3"
                    sx={{
                      background:
                        "linear-gradient(89.69deg, #E9FF9D 1.68%, #FFFFFF 78.21%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize: { xs: "24px", md: "64px" },
                      fontWeight: "800",
                      lineHeight: { xs: "44px", md: "70px" },
                    }}
                  >
                    under 5 minutes
                  </Typography>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#B1B1B1",
                    mt: 2,
                    pr: { xs: 0, md: 8 },
                    lineHeight: { xs: "24px", md: "26px" },
                    fontWeight: "500",
                    fontFamily: "Manrope",
                    fontSize: { xs: "14px", md: "auto" },
                  }}
                >
                  Invest in 3 Simple Steps – Choose a Goal, Select a risk
                  profile based basket of funds, Complete payment to invest
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 4,
                    backgroundColor: "#C1F900",
                    color: "#1A1A1A",
                    fontSize: "14px",
                    px: 4,
                    py: 1.5,
                    textTransform: "none",
                    borderRadius: "6px",
                    fontWeight: "800",
                  }}
                >
                  Start Investing Today
                </Button>
              </Box>
              {!isSmallScreen && (
                <Box
                  sx={{
                    mt: 20,
                    mb: 2,
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: { xs: "center", md: "flex-start" },
                    gap: 2,
                    color: "#AAA9A9",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="assets/AMFI.svg"
                      alt="AMFI"
                      width="36"
                      height="36"
                    />
                    <Box sx={{ ml: 1 }}>
                      <Typography
                        sx={{
                          ...amfiStyle,
                        }}
                      >
                        AMFI
                      </Typography>
                      <Typography
                        sx={{
                          ...amfiStyle,
                        }}
                      >
                        Registered
                      </Typography>
                    </Box>
                  </Box>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ borderColor: "#555", borderStyle: "dashed" }}
                  />
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{
                        position: "relative",
                        width: "50px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src="assets/man.svg"
                        alt="Investor1"
                        width="36"
                        height="36"
                        style={{
                          borderRadius: "50%",
                          position: "absolute",
                          left: 0,
                        }}
                      />
                      <img
                        src="assets/girl img.png"
                        alt="Investor2"
                        width="36"
                        height="36"
                        style={{
                          borderRadius: "50%",
                          position: "absolute",
                          left: 18,
                          objectFit: "cover",
                          objectPosition: "top",
                        }}
                      />
                    </Box>
                    <Box sx={{ ml: 2 }}>
                      <Typography
                        sx={{
                          ...amfiStyle,
                        }}
                      >
                        8,000+
                      </Typography>
                      <Typography
                        sx={{
                          ...amfiStyle,
                        }}
                      >
                        Investors
                      </Typography>
                    </Box>
                  </Box>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ borderColor: "#555", borderStyle: "dashed" }}
                  />

                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="assets/bag.svg"
                      alt="Legacy"
                      width="36"
                      height="36"
                    />
                    <Box sx={{ ml: 1 }}>
                    <Typography
                        sx={{
                          ...amfiStyle,
                        }}
                      >
                        20+ Years
                      </Typography>
                      <Typography
                        sx={{
                          ...amfiStyle,
                        }}
                      >
                        of Legacy
                      </Typography>
                    </Box>
                  </Box>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ borderColor: "#555", borderStyle: "dashed" }}
                  />

                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{
                        position: "relative",
                        width: "50px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          background: "#fff",
                          borderRadius: "50%",
                          width: "32px",
                          height: "32px",
                          position: "absolute",
                          left: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src="assets/sbi.svg"
                          alt="Investor1"
                          width="19.8"
                          height="19.8"
                        />
                      </Box>
                      <Box
                        sx={{
                          background: "#fff",
                          borderRadius: "50%",
                          width: "32px",
                          height: "32px",
                          position: "absolute",
                          left: 18,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src="assets/hdfc.svg"
                          alt="Investor2"
                          width="19.8"
                          height="19.8"
                        />
                      </Box>
                    </Box>
                    <Box sx={{ ml: 1 }}>
                    <Typography
                        sx={{
                          ...amfiStyle,
                        }}
                      >Top 35</Typography>
                      <Typography
                        sx={{
                          ...amfiStyle,
                        }}
                      >AMCs</Typography>
                    </Box>
                  </Box>
                </Box>
              )}
            </Grid>
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                component="img"
                src="assets/thumbUp.svg"
                sx={{
                  maxWidth: "100%",
                  maxHeight: "540px",
                  borderRadius: "20px",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default LandingPage;
