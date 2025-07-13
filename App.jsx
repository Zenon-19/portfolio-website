import React from "react";
import ExactComponent from "./ExactComponent";

const user = {
  avatar: "https://avatars.githubusercontent.com/u/9919?v=4",
  githubUrl: "https://github.com/lakshyalohani",
  githubUsername: "lakshyalohani",
  name: "Lakshya Lohani",
  tagline: "Full-Stack Developer & Open Source Enthusiast",
  portfolioUrl: "https://lakshyalohani.dev"
};

// Example pattern: 7 rows x 52 columns (like GitHub contributions)
const pattern = Array.from({ length: 7 }, () =>
  Array.from({ length: 52 }, () => Math.random() > 0.7)
);

function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#181928" }}>
      <ExactComponent user={user} pattern={pattern} />
    </div>
  );
}

export default App;
