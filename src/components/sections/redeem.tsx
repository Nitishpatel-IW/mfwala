import { Box, Button, Typography } from "@mui/material";

function Redeem() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "20px 20px 20px 0",
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
        <Box sx={{ display: "flex", justifyContent: "center",pl: { xs: 3, md: 0 } }}>
          <img src="assets/mutualFund.svg" width={390} height={420} />
        </Box>
        <Box sx={{ flexWrap: "wrap", maxWidth: "470px",pt:3 }}>
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "500",
              pr: { xs: 8, md: 18 },
              lineHeight: 1.3,
            }}
          >
            Redeem your Mutual Fund investments under 5 mins
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              my: 2,
              color: "#666666",
              pr: { xs: 4, md: 2 },
            }}
          >
            Invest in Liquid Funds with MutualFund Wala and redeem upto INR
            50,000 or 90% of your investment, whichever is less, under 5 mins to
            your bank account. The balance follows on T+1.
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

export default Redeem;
