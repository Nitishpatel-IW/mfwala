import { Box, Button, Typography } from "@mui/material";

function Kyc() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "80px 20px 20px 0",
        background: `
  radial-gradient(circle at 10% 40%, #5AC8FA38, transparent 200px),
  radial-gradient(circle at 90% 65%, #FF950030, transparent 200px),
  #ffffff
`,
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          maxWidth: "80%",
          display: { xs: "block", md: "flex" },
          gap: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pl: { xs: 3, md: 0 },
          }}
        >
          <img src="assets/pan.svg" width={370} height={420} />
        </Box>
        <Box sx={{ flexWrap: "wrap", maxWidth: "470px", pt: 3 }}>
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "500",
              pr: { xs: 8, md: 18 },
              lineHeight: 1.3,
            }}
          >
            100% Digital KYC + Onboarding
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              my: 2,
              color: "#666666",
              pr: { xs: 4, md: 2 },
            }}
          >
            New to mutual fund investing? No worries, we’ve got you covered.
            Complete your KYC and make your first investment in under 5 minutes
            with our fully digital onboarding process.
          </Typography>
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
            Start Investing Today
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Kyc;
