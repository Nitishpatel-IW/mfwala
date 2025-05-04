import {
  AppBar,
  Box,
  Button,
  useMediaQuery,
  Toolbar,
  Typography,
} from "@mui/material";
import Footer from "../../components/sections/footer";
import { useNavigate } from "react-router-dom";

function TermsPage() {
  const isSmallScreen = useMediaQuery("(max-width:1000px)");
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
              top: -40,
              opacity: 0.6,
            }}
          >
            <img
              src="assets/LLight.svg"
              alt="logo"
              style={{ maxHeight: "500px", borderRadius: "20px" }}
            />
            <img
              src="assets/RLight.svg"
              alt="logo"
              style={{ maxHeight: "500px", borderRadius: "20px" }}
            />
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
                  style={{ maxHeight: "500px", borderRadius: "20px" }}
                />
              ) : (
                <img
                  src="assets/Group 1000005422.svg"
                  alt="logo"
                  style={{ maxHeight: "500px", borderRadius: "20px" }}
                />
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
                  sx={{ cursor: "pointer" }}
                >
                  Home
                </Typography>
                <Typography variant="body1">About us</Typography>
                <Typography variant="body1">What is mfwala?</Typography>
                <Typography variant="body1">Our highlight</Typography>
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pt: 10,
          }}
        >
          <Typography sx={{ fontSize:{xs:"24px",md:"48px"}, fontWeight: "500" }}>
            Terms of Use
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          px: 2,
          mt: -50,
          mb: 8,
          zIndex: 2,
          position: "relative",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: 2,
            px: { xs: 3, md: 8 },
            py: { xs: 4, md: 8 },
            maxWidth: "900px",
            width: "100%",
            color: "#666666",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "500",
              mb: 3,
              color: "#1A1A1A",
              fontSize: "32px",
            }}
          >
            General Terms
          </Typography>
          <Typography
            variant="body2"
            sx={{ mb: 4, textAlign: "justify", lineHeight: 1.3 }}
          >
            These terms and conditions (“Terms”) contain important information
            pertaining to your mutual fund investment account with PP Mutual
            Fund Services Investment Services Private Limited (hereinafter
            referred to as “PP Mutual Fund Services”, “our” or “us”). The Terms
            govern the relationship between us and you, the user (“You” or
            “Client”). Investment in mutual funds is enabled through PP Mutual
            Fund Services Investment Services Private Limited, a mutual fund
            distributor registered with AMFI having ARN – 275889.
            <br />
            <br />
            The Platform is owned, operated and maintained by PP Mutual Fund
            Services Investment Services Private Limited, a Company incorporated
            under the Companies Act 2013 with CIN: U66301DL2023PTC418851, having
            its registered office at 602, Yamuna BLK Y-6, Sec-D, Pkt-6, Vasant
            Kunj, New Delhi - 110070
            <br />
            <br />
            These Terms shall govern the relationship between PP Mutual Fund
            Services and its clients (hereinafter “Client”, “you”, or “your”).
            Access to, and usage of your account and the Platform is subject to
            your compliance with the Terms set forth herein, read with the
            “Privacy Policy” and “Refund and Cancellation Policy”, and any other
            documents as may be applicable. This includes but is not limited to
            the various application forms and undertakings signed by you at the
            time of opening your account(s). Please note that the information
            contained herein is subject to change without notice. Please read
            this page carefully and retain it for future reference.
            <br />
            <br />
            You agree to any and all changes to the Terms without specific
            communication from PP Mutual Fund Services, by Your continuing usage
            of the Platform and/or continuing to hold an account with PP Mutual
            Fund Services.
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "500",
              mb: 3,
              color: "#1A1A1A",
              fontSize: "32px",
            }}
          >
            Disclaimer
          </Typography>
          <Typography
            variant="body2"
            sx={{ mb: 4, textAlign: "justify", lineHeight: 1.3 }}
          >
            The Client understands and agrees that all investment and/or
            investment decisions are based on the Client’s own investment
            objectives and evaluation of prevailing financial circumstances.
            This extends to all decisions made by the Client on the basis of any
            information that may be available on the Platform. The Client
            understands that PP Mutual Fund Services is merely a facilitator
            providing access to its Clients to participate in the mutual fund
            investments, and that PP Mutual Fund Services does not seek to
            influence or otherwise affect the decision-making process of its
            Clients in any way whatsoever. <br />
            <br />
            These terms and conditions (“Terms”) contain important information
            pertaining to your mutual fund investment account with PP Mutual
            Fund Services Investment Services Private Limited (hereinafter
            referred to as “PP Mutual Fund Services”, “our” or “us”). The Terms
            govern the relationship between us and you, the user (“You” or
            “Client”). Investment in mutual funds is enabled through PP Mutual
            Fund Services Investment Services Private Limited, a mutual fund
            distributor registered with AMFI having ARN – 275889.
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "500",
              mb: 3,
              color: "#1A1A1A",
              fontSize: "32px",
            }}
          >
            Representations and warranties
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "400",
              mb: 2,
              color: "#1A1A1A",
              fontSize: "20px",
              lineHeight: 1.2,
            }}
          >
            Clients represent and warrant to PP Mutual Fund
            <br /> Services the following:
          </Typography>
          <Typography sx={{ mb: 4, textAlign: "justify", lineHeight: 1.3 }}>
            They are capable of being a valid counterparty to these Terms,
            including but not limited to being of 18 years, and not barred by
            any law from accessing the Platform or any services offered by PP
            Mutual Fund Services, and that these Terms are not in contravention
            to the rights of any party with whom such Client has any agreements,
            at any time prior to agreeing to these Terms and while continuing to
            using the Platform and availing PP Mutual Fund Services services.
            <br />
            <br />
            They shall always provide PP Mutual Fund Services with valid and
            updated personal/corporate details about themselves that PP Mutual
            Fund Services may require, including documentary proof thereof.
            <br />
            <br /> The Client has made efforts to make themselves aware of the
            various risks associated with executing transactions on the various
            Exchanges, and in particular, the risks involved in online
            investments via the internet on the Platform. The Client agrees not
            to pursue any claims against PP Mutual Fund Services on account of
            any suspension, interruption, non-availability or malfunctioning of
            the online investment system of the Exchange, or of PP Mutual Fund
            Services’s Platform, for any reasons whatsoever.
            <br />
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "500",
              mb: 3,
              color: "#1A1A1A",
              fontSize: "32px",
            }}
          >
            Contact Us
          </Typography>
          <Typography variant="body2">
            Please reach out to{" "}
            <a href="mailto:support@mutualfundwala.com">
              support@mutualfundwala.com
            </a>{" "}
            if you have any questions or concerns regarding the Terms.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 15, px: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            pt: 5,
            px: 2,
            backgroundColor: "#C1F901",
            borderRadius: 3,
            flex: 1,
            maxWidth: 1170,
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              maxHeight: 180,
              maxWidth: 180,
              position: "absolute",
              top: 0,
              right: 0,
            }}
          >
            <img
              src="assets/Logo_1.svg"
              alt="MW Logo"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <img
              src="assets/Mobile.svg"
              alt="QR phone"
              width={300}
              style={{ maxWidth: "100%" }}
            />
          </Box>
          <Box sx={{ maxWidth: 400, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              sx={{
                fontSize: { xs: "24px", md: "40px" },
                fontWeight: "500",
                mb: 2,
              }}
            >
              Start your journey <br /> Download now
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: 2,
                flexWrap: "wrap",
                mt: 2,
              }}
            >
              <img
                src="assets/androidBtn.svg"
                alt="Google Play"
                width={140}
                style={{ height: "auto" }}
              />
              <img
                src="assets/appleBtn.svg"
                alt="App Store"
                width={140}
                style={{ height: "auto" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default TermsPage;
