import { Box, Typography } from "@mui/material";
import { useState } from "react";

const faqData = [
  {
    question: "Is It Safe To Invest In Mutual Funds Through MutualFund Wala?",
    answer: `Yes. MutualFund Wala is an AMFI-registered platform that follows all SEBI regulations. 
    Your investmentsare processed through secure payment gateways and routed directly to the fund houses. 
    We don’t hold your money—your investments are always in your name and stay under your control.`,
  },
  {
    question: "Do I Need A Demat Account To Invest In Mutual Funds?",
    answer: "",
  },
  {
    question: "How Do I Choose The Right Mutual Fund For Me?",
    answer: "",
  },
  {
    question: "What Is The Minimum Amount I Can Start Investing With?",
    answer: "",
  },
  {
    question:
      "How Long Does It Take To Complete KYC And Make My First Investment?",
    answer: "",
  },
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index: any) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <>
      <Box
        style={{
          padding: "100px 20px",
          display: "flex",
          justifyContent: "center",
          background: `
      linear-gradient(to bottom, #EFFAFF, #ffffff)
    `,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            width: 770,
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "32px",
              marginBottom: "40px",
            }}
          >
            Faqs
          </h2>
          {faqData.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #e0e0e0",
                borderRadius: "12px",
                marginBottom: "16px",
                padding: "20px",
                backgroundColor: "#fff",
                boxShadow:
                  activeIndex === index ? "0 0 10px rgba(0,0,0,0.05)" : "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => toggleFaq(index)}
              >
                <p style={{ fontWeight: 600, fontSize: "16px", margin: 0 }}>
                  {item.question}
                </p>
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    backgroundColor: "#ccff00",
                    borderRadius: "50%",
                    textAlign: "center",
                    lineHeight: "24px",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  {activeIndex === index ? "−" : "+"}
                </div>
              </div>
              {activeIndex === index && (
                <p
                  style={{ marginTop: "12px", fontSize: "14px", color: "#555" }}
                >
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
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
              display:{ xs: "none", md: "block" },
              maxHeight: 180,
              maxWidth:180,
              position: "absolute",
              top: 0,
              right: 0,
            }}
          >
            <img
              src="assets/Logo_1.svg"
              alt="MW Logo"
              style={{ width: "100%", height: "auto", }}
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
    </>
  );
}

export default Faq;
