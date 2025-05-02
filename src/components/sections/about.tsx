import { Divider, Paper, Typography, Box, useMediaQuery } from "@mui/material";

const features = [
  {
    icon: "assets/rupee.svg",
    text: "Goal-based investing",
  },
  {
    icon: "assets/clock.svg",
    text: "Instent risk profiling",
  },
  {
    icon: "assets/upi.svg",
    text: "100% secured payments with UPI",
  },
  {
    icon: "assets/text.svg",
    text: "Daily report for your investment",
  },
];

const AboutSection = () => {
  const isSmallScreen = useMediaQuery("(max-width:1000px)");
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
          mx: { xs: 2, sm: 6, md: 15 },
          my: 8,
          py: { xs: 4, sm: 8, md: 8 },
          px: { xs: 4, sm: 4, md: 8 },
          borderRadius: 4,
        }}
      >
        {/* Header and Description */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 3,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              background: "linear-gradient(90deg, #E9FF9D 0%, #FFFFFE 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            What is Mutual Fund Wala
          </Typography>

          <Box sx={{ px: { xs: 0, sm: 4, md: 8 } }}>
            <Typography variant="body1" color="#CCCCCC">
              MutualFund Wala is a household name in mutual fund investments,
              committed to empowering every investor, regardless of risk
              appetite or investment size, to build wealth and achieve financial
              freedom.
            </Typography>
            <Box
              sx={{
                mt: 6,
                display: "grid",
                flexWrap: "nowrap",
                gridTemplateColumns: {
                  xs: "repeat(3, auto)",
                  sm: "auto",
                  md: "repeat(7, auto)",
                },
                gap: 2,
                color: "#AAA9A9",
                fontSize: "14px",
                lineHeight: 1,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img src="assets/AMFI.svg" alt="AMFI" width="36" height="36" />
                <Box sx={{ ml: 1 }}>
                  <Typography sx={{ fontSize: "14px" }}>AMFI</Typography>
                  <Typography sx={{ fontSize: "14px" }}>Registered</Typography>
                </Box>
              </Box>

              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  borderColor: "#555",
                  borderStyle: "dashed",
                }}
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
                sx={{
                  borderColor: "#555",
                  display: { xs: "none", sm: "block" },
                  borderStyle: "dashed",
                }}
              />
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img src="assets/bag.svg" alt="Legacy" width="36" height="36" />
                <Box sx={{ ml: 1 }}>
                  <Typography sx={{ fontSize: "14px" }}>20+ Years</Typography>
                  <Typography sx={{ fontSize: "14px" }}>of Legacy</Typography>
                </Box>
              </Box>

              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  borderColor: "#555",
                  borderStyle: "dashed",
                }}
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
          </Box>
        </Box>

        {!isSmallScreen && (
          <Box
            sx={{
              mt: 6,
              display: "flex",
              flexWrap: "nowrap",
              gap: 3,
              justifyContent: "center",
            }}
          >
            {features.map((item, index) => (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  backgroundColor: "#1E1D1D",
                  border: "1px solid #0C0C0C",
                  borderRadius: 3,
                  textAlign: "center",
                  padding: 3,
                  width: { xs: "100%", sm: "45%", md: "230px" },
                  minHeight: "188px",
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
            ))}
          </Box>
        )}
      </Box>
    </div>
  );
};

export default AboutSection;
