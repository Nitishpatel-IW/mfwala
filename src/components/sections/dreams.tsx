
import { Box, Typography, Button, Paper,useMediaQuery } from "@mui/material";

const goals = [
  {
    img: "assets/home.svg",
    iconColor: "#AF52DE",
    title: "Buy a",
    subtitle: "Dream House",
    bgColor: "#F3E8FF",
  },
  {
    img: "assets/graduate.svg",
    iconColor: "#FF9500",
    title: "Plan Your",
    subtitle: "Retirement",
    bgColor: "#FFF7ED",
  },
  {
    img: "assets/graduate.svg",
    iconColor: "#5AC8FA",
    title: "Save for",
    subtitle: "Child’s Education",
    bgColor: "#EFF6FF",
  },
  {
    img: "assets/vector.svg",
    iconColor: "#FF7C95",
    title: "Plan for",
    subtitle: "Child’s Marriage",
    bgColor: "#FFE4E6",
  },
];
function darkenHex(hex: string, amount: number = 30) {
  let color = hex.replace("#", "");
  if (color.length === 3) {
    color = color
      .split("")
      .map((c) => c + c)
      .join("");
  }

  const r = Math.max(0, parseInt(color.substring(0, 2), 16) - amount);
  const g = Math.max(0, parseInt(color.substring(2, 4), 16) - amount);
  const b = Math.max(0, parseInt(color.substring(4, 6), 16) - amount);

  return `#${[r, g, b]
    .map((val) => val.toString(16).padStart(2, "0"))
    .join("")}`;
}
function Dreams() {
  const isSmallScreen = useMediaQuery("(max-width:1000px)");
  return (
    <Box
      textAlign="center"
      pt={12}
      pb={4}
      px={{ xs: 4, sm: 8, md: 20 }}
      style={{
        background: `
            radial-gradient(circle at 10% 40%, #5AC8FA38, transparent 200px),
            radial-gradient(circle at 90% 65%, #FF950030, transparent 200px),
            #ffffff
          `,
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="500"
        gutterBottom
        fontSize={40}
        color="#1A1A1A"
      >
        Invest for Your Dreams
      </Typography>
      <Typography variant="subtitle1" color="#666666" mb={4} fontSize={16}>
        Never Lose Track Of Your Goals With Our Daily Reports On Your
        Investments
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          overflowX: isSmallScreen ? "auto" : "visible",
          flexWrap: isSmallScreen ? "nowrap" : "wrap",
          justifyContent: "center",
          gap: 3,
          py: 2,
          px: 1,
          scrollSnapType: isSmallScreen ? "x mandatory" : "none",
        }}
      >
        {goals.map((goal, idx) => (
          <Box
            key={idx}
            sx={{
              scrollSnapAlign: isSmallScreen ? "start" : "unset",
              minWidth: isSmallScreen ? "240px" : "auto",
              flex: "0 0 auto",
              width: isSmallScreen ? "auto" : { xs: "100%", sm: "47%", md: "22%" },
            }}
          >
            <Paper
              elevation={0}
              sx={{
                backgroundColor: goal.bgColor,
                borderRadius: 3,
                border: `1px solid ${darkenHex(goal.bgColor, 20)}`,
                padding: 3,
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  backgroundColor: goal.iconColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                }}
              >
                <img src={goal.img} alt={goal.title} style={{ width: 32, height: 32 }} />
              </Box>
              <Typography variant="body1" fontWeight="600">
                {goal.title}
              </Typography>
              <Typography variant="body1" fontWeight="600">
                {goal.subtitle}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Box>

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
          flexWrap:"nowrap"
        }}
      >
        Start Investing Today
      </Button>
    </Box>
  );
}

export default Dreams;
