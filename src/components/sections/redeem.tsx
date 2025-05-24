import { Box, Button, Typography } from "@mui/material";

function Redeem() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "140px 20px 20px 0",
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
          gap: 15,
          justifyContent: "center",
          alignItems: "flex-start"
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src="assets/mutualFund.svg"
            sx={{
              width: { xs: "300px", sm: "60%", md: "380px" },
              height: "auto",
              maxWidth: "100%",
            }}
            alt="Mutual Fund"
          />
        </Box>
        <Box sx={{ flexWrap: "wrap", maxWidth: "470px", pt: 3 }} >
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: "800",
              pr: { xs: 0, md: 8 },
              lineHeight: "48px",
            }}
          >
            Redeem your Mutual Fund investments under 5 mins
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              my: 2,
              color: "#666666",
              pr: { xs: 0, md: 14 },
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
              px: 4,
              py: 1.4,
              textTransform: "none",
              borderRadius: "6px",
              whiteSpace: "nowrap",
              fontWeight: "600",
              boxShadow: "none",
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
