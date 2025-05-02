import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Container,
  AppBar,
  Toolbar,
  Divider,
  Grid,
  Drawer,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const LandingPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:800px)");

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <Box sx={{ backgroundColor: "#000", minHeight: "100vh", color: "#fff" }} >
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              margin: "28px 70px",
            }}
          >
            <Box sx={{ display: "flex", gap: 3 }}>
              <img
                src="assets/Group 1000005422.svg"
                alt="logo"
                style={{ maxHeight: "500px", borderRadius: "20px" }}
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", lineHeight: 1 }}
              >
                <span style={{ display: "block" }}>mutual</span>
                <span style={{ display: "block" }}>fund</span>
                <span style={{ display: "block" }}>wala</span>
              </Typography>
            </Box>
            {!isSmallScreen ? (
              <Box sx={{ display: "flex", gap: 3 }}>
                <Typography variant="body1">Home</Typography>
                <Typography variant="body1">About us</Typography>
                <Typography variant="body1">What is mfwala?</Typography>
                <Typography variant="body1">Our highlight</Typography>
              </Box>
            ) : (
              <IconButton onClick={toggleDrawer} sx={{ color: "#fff" }}>
                <MoreHorizIcon />
              </IconButton>
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
              }}
            >
              Download App
            </Button>
          </Toolbar>
        </AppBar>

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "#000",
              color: "#fff",
            },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}>
            <Typography variant="body1">Home</Typography>
            <Typography variant="body1">About us</Typography>
            <Typography variant="body1">What is mfwala?</Typography>
            <Typography variant="body1">Our highlight</Typography>
          </Box>
        </Drawer>

        <Container sx={{ mt: 8 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ mt: 10, textAlign: { xs: "center", md: "left" } }}>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", color: "#fff" }}
                >
                  Invest in Mutual Funds
                  <br />
                  <span style={{ color: "#D0FF00" }}>under 5 minutes</span>
                </Typography>
                <Typography variant="body1" sx={{ color: "#aaa", mt: 2 }}>
                  Invest in 3 Simple Steps – Choose a Goal, Select a risk
                  profile based basket of funds, Complete payment to invest
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 4.5,
                    backgroundColor: "#C1F900",
                    color: "#1A1A1A",
                    fontSize: "14px",
                    px: 4.5,
                    py: 1.1,
                    textTransform: "none",
                    borderRadius: "6px",
                  }}
                >
                  Start Investing Today
                </Button>
              </Box>
              <Box
                sx={{
                  mt: "147px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  flexWrap: "no-wrap",
                  gap: 2,
                  maxWidth: "100%",
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
                    <Typography sx={{ fontSize: "14px" }}>Investors</Typography>
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
                    <Typography sx={{ fontSize: "14px" }}>20+ Years</Typography>
                    <Typography sx={{ fontSize: "14px" }}>of Legacy</Typography>
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
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box>
                <img
                  src="assets/thumbUp.svg"
                  alt="Thumbs Up Guy"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "500px",
                    borderRadius: "20px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default LandingPage;