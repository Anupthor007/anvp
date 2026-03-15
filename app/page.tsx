export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#0a0a0a",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Arial"
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
        Hi, I'm Anup
      </h1>

      <p style={{ fontSize: "20px", color: "#aaaaaa" }}>
        AI & Data Science Engineer
      </p>
    </main>
  );
}