// AboutSection.tsx
import React from "react";
import { Divider } from "@mui/material";

import { Box, Grid, Paper, Typography, Avatar, Stack } from "@mui/material";

const features = [
  {
    icon: "/assets/icons/goal.png",
    text: "Goal-based investing",
  },
  {
    icon: "/assets/icons/risk.png",
    text: "Instent risk profiling",
  },
  {
    icon: "/assets/icons/upi.png",
    text: "100% secured payments with UPI",
  },
  {
    icon: "/assets/icons/report.png",
    text: "Daily report for your investment",
  },
];

const AboutSection = () => {
  return (
    <div
      style={{
        background: `
            radial-gradient(circle at 10% 40%, #5AC8FA38, transparent 200px),
            radial-gradient(circle at 90% 35%, #FF950030, transparent 200px),
            #ffffff
          `,
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#0F0F0F",
          mx: 15,
          my: 8,
          py: 5,
          px: 2,
          borderRadius: 4,
        }}
      >
        <Grid
          container
          spacing={4}
          alignItems="flex-start"
          justifyContent="center"
        >
          <Grid size={{ xs: 12, sm: 6, md: 9 }} display={"flex"} gap={10}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                background: "linear-gradient(90deg, #C4FF00, #FFFFFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 2,
              }}
            >
              What is Mutual Fund Wala
            </Typography>
            <Box>
              <Typography variant="body1" color="#CCCCCC" mb={4}>
                MutualFund Wala is a household name in mutual fund investments,
                committed to empowering every investor, regardless of risk
                appetite or investment size, to build wealth and achieve
                financial freedom.
              </Typography>

              <Box
                sx={{
                  mt: "47px",
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
                    src="../../assets/AMFI.svg"
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
                      src="../../assets/man.svg"
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
                      src="../../assets/girl.svg"
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
                    src="../../assets/bag.svg"
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
                      src="../../assets/sbi.svg"
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
                      src="../../assets/hdfc.svg"
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
            </Box>
          </Grid>

          <Grid container spacing={3}>
            {features.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    backgroundColor: "#1E1D1D",
                    border: "1px solid #0C0C0C",
                    borderRadius: 3,
                    textAlign: "center",
                    padding: 3,
                    height: "188",
                    width: "230",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      backgroundColor: "#D1FF00",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    <img
                      src={item.icon}
                      alt="icon"
                      style={{ width: 32, height: 32 }}
                    />
                  </Box>
                  <Typography
                    variant="body1"
                    fontWeight="600"
                    color="white"
                    sx={{ lineHeight: 1.4, fontSize: "16px" }}
                  >
                    {item.text}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AboutSection;
