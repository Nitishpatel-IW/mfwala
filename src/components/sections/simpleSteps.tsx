
function SimpleSteps() {
  return (
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
      <img src="assets/simpleSteps.svg" width={1000} height={420} />
    </div>
  );
}

export default SimpleSteps;
