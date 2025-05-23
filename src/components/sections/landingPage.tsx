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
  fontWeight: 500,
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
          backgroundColor: "#000",
          minHeight: "100vh",
          color: "#fff",
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
              top: -10,
              opacity: 0.5,
            }}
          >
            <Box sx={{ position: "relative", display: "inline-block" }}>
              <DotLayer position="left" direction="leftToRight" />
              <img
                src="assets/LLight.svg"
                alt="logo"
                style={{ maxHeight: "500px",}}
              />
            </Box>
            <Box sx={{ position: "relative", display: "inline-block" }}>
              <DotLayer position="right" direction="rightToLeft" />
              <img
                src="assets/RLight.svg"
                alt="logo"
                style={{ maxHeight: "500px",}}
              />
            </Box>
          </Box>
        )}
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              mx: { xs: 0, sm: 4, md: 8 },
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
                <Box sx={{ position: "relative", display: "inline-block" }}>
                  <Box
                    sx={{
                      border: "1px solid white",
                      borderRadius: "50%",
                      width: "6px",
                      height: "6px",
                      fontSize: "5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      top: "-4px",
                      left: "53%",
                      // transform: "translateX(-50%)",
                      zIndex: 1,
                    }}
                  >
                    R
                  </Box>
                  <img
                    src="assets/Group 1000005422.svg"
                    alt="logo"
                    style={{ maxHeight: "500px" }}
                  />
                </Box>
              )}
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", lineHeight: 1 }}
              >
                <span style={{ display: "block" }}>mutual</span>
                <span style={{ display: "block" }}>fund</span>
                <span style={{ display: "block" }}>wala</span>
              </Typography>
            </Box>
            {!isSmallScreen && (
              <Box sx={{ display: "flex", gap: 3 }}>
                <Typography
                  variant="body1"
                  onClick={() => navigate("/")}
                  sx={{ cursor: "pointer", ...navTextStyle }}
                >
                  Home
                </Typography>
                <Divider
                  orientation="vertical"
                  sx={{ bgcolor: "#C1F900" }}
                  flexItem
                ></Divider>
                <Typography variant="body1" sx={{ ...navTextStyle }}>
                  About us
                </Typography>
                <Divider
                  orientation="vertical"
                  sx={{ bgcolor: "#C1F900" }}
                  flexItem
                ></Divider>
                <Typography variant="body1" sx={{ ...navTextStyle }}>
                  What is mfwala?
                </Typography>
                <Divider
                  orientation="vertical"
                  sx={{ bgcolor: "#C1F900" }}
                  flexItem
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
                px: 4.5,
                py: 1.1,
                textTransform: "none",
                borderRadius: "6px",
                whiteSpace: "nowrap",
              }}
            >
              Download App
            </Button>
          </Toolbar>
        </AppBar>
        <Container
          sx={{
            mt: { xs: 6, sm: 4, md: 5 },
            pb: { xs: 1, sm: 2, md: 2 },
            px: { xs: 4, sm: 6, md: 8 },
          }}
        >
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                sx={{
                  mt: { xs: 0, md: 10 },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "580",
                    color: "#fff",
                    fontSize: "64px",
                    lineHeight: "70px",
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
                      fontWeight: "580",
                      lineHeight: "65px",
                    }}
                  >
                    under 5 minutes
                  </Typography>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#aaa", mt: 2, pr: { xs: 0, md: 8 } }}
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
                    px: 4.5,
                    py: 1.1,
                    textTransform: "none",
                    borderRadius: "6px",
                    fontWeight: "600",
                  }}
                >
                  Start Investing Today
                </Button>
              </Box>
              {!isSmallScreen && (
                <Box
                  sx={{
                    mt: 10,
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: { xs: "center", md: "flex-start" },
                    gap: 2,
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
                      <Typography sx={{ fontSize: "14px" }}>AMFI</Typography>
                      <Typography sx={{ fontSize: "14px" }}>
                        Registered
                      </Typography>
                    </Box>
                  </Box>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ borderColor: "#555" }}
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
                        width="32"
                        height="32"
                        style={{
                          borderRadius: "50%",
                          position: "absolute",
                          left: 0,
                        }}
                      />
                      <img
                        src="assets/girl.svg"
                        alt="Investor2"
                        width="32"
                        height="32"
                        style={{
                          borderRadius: "50%",
                          position: "absolute",
                          left: 18,
                        }}
                      />
                    </Box>
                    <Box sx={{ ml: 1 }}>
                      <Typography sx={{ fontSize: "14px" }}>8,000+</Typography>
                      <Typography sx={{ fontSize: "14px" }}>
                        Investors
                      </Typography>
                    </Box>
                  </Box>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ borderColor: "#555" }}
                  />

                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="assets/bag.svg"
                      alt="Legacy"
                      width="36"
                      height="36"
                    />
                    <Box sx={{ ml: 1 }}>
                      <Typography sx={{ fontSize: "14px" }}>
                        20+ Years
                      </Typography>
                      <Typography sx={{ fontSize: "14px" }}>
                        of Legacy
                      </Typography>
                    </Box>
                  </Box>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ borderColor: "#555" }}
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
                        src="assets/sbi.svg"
                        alt="Investor1"
                        width="32"
                        height="32"
                        style={{
                          borderRadius: "50%",
                          position: "absolute",
                          left: 0,
                        }}
                      />
                      <img
                        src="assets/hdfc.svg"
                        alt="Investor2"
                        width="32"
                        height="32"
                        style={{
                          borderRadius: "50%",
                          position: "absolute",
                          left: 18,
                        }}
                      />
                    </Box>
                    <Box sx={{ ml: 1 }}>
                      <Typography sx={{ fontSize: "14px" }}>Top 35</Typography>
                      <Typography sx={{ fontSize: "14px" }}>AMCs</Typography>
                    </Box>
                  </Box>
                </Box>
              )}
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ textAlign: "center" }}>
                <Box
                  component="img"
                  src="assets/thumbUp.svg"
                  sx={{
                    maxWidth: "100%",
                    maxHeight: "540px",
                    borderRadius: "20px",
                  }}
                />
                {/* <img
                  src="assets/thumbUp.svg"
                  alt="Thumbs Up Guy"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "540px",
                    borderRadius: "20px",
                    
                  }}
                /> */}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default LandingPage;
