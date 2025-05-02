import React, { useState } from "react";

const faqData = [
  {
    question: "Is It Safe To Invest In Mutual Funds Through MutualFund Wala?",
    answer: `Yes. MutualFund Wala is an AMFI-registered platform that follows all SEBI regulations. 
    Your investments are processed through secure payment gateways and routed directly to the fund houses. 
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
      <div
        style={{
          padding: "100px 0",
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
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "100px 20px 100px 0",
          background: `
        radial-gradient(circle at 10% 40%, #5AC8FA38, transparent 200px),
        radial-gradient(circle at 90% 35%, #FF950030, transparent 200px),
        #ffffff
      `,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
      >
        <img src="assets/terms.svg" width={1170} height={374} />
      </div>
    </>
  );
}

export default Faq;
