import { Box, Button, Typography } from "@mui/material";

function SimpleSteps() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "70px 20px 20px 0",
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
          flexDirection: { xs: "column", md: "row-reverse" },
          gap: 20,
          justifyContent: "center",
          alignItems: "center",
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
            src="assets/Goal.svg"
            sx={{
              width: { xs: "300px", sm: "60%", md: "380px" },
              height: "auto",
              maxWidth: "100%",
            }}
            alt="Mutual Fund"
          />
        </Box>
        <Box sx={{ flexWrap: "wrap", maxWidth: "470px", pt: 3 }}>
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "500",
              pr: { xs: 2, md: 18 },
              pb: 3,
              lineHeight: 1.3,
            }}
          >
            Get started in just 3 simple steps.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
            <img
              src="assets/Stroke.svg"
              alt="check"
              style={{
                marginTop: 4,
                marginRight: 12,
                backgroundColor: "black",
                borderRadius: "60%",
                padding: "4px",
              }}
            />
            <Typography sx={{ fontSize: "14px", color: "#666" }}>
              <strong style={{ color: "#1A1A1A" }}>Set Your Goal :</strong>{" "}
              Choose a goal like a new house, your child’s future, or early
              retirement.
            </Typography>
          </Box>

          {/* Step 2 */}
          <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
            <img
              src="assets/Stroke.svg"
              alt="check"
              style={{
                marginTop: 4,
                marginRight: 12,
                backgroundColor: "black",
                borderRadius: "60%",
                padding: "4px",
              }}
            />
            <Typography sx={{ fontSize: "14px", color: "#666" }}>
              <strong style={{ color: "#1A1A1A" }}>Select A Basket:</strong>{" "}
              Pick a curated fund basket according to your risk profile.
            </Typography>
          </Box>

          {/* Step 3 */}
          <Box sx={{ display: "flex", alignItems: "flex-start", mb: 4 }}>
            <img
              src="assets/Stroke.svg"
              alt="check"
              style={{
                marginTop: 4,
                marginRight: 12,
                backgroundColor: "black",
                borderRadius: "60%",
                padding: "4px",
              }}
            />
            <Typography sx={{ fontSize: "14px", color: "#666" }}>
              <strong style={{ color: "#1A1A1A" }}>Make Payment :</strong>{" "}
              Complete your payment online. Your investment journey begins
              instantly.
            </Typography>
          </Box>
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

export default SimpleSteps;
