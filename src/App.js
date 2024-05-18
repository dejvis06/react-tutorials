import "./App.css";
import LearnReact from "./components/LearnReact.js";
import Header from "./components/header/Header.js";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <Header
        logo={logo}
        paragraph={[
          "Edit ",
          <code key="code">src/App.js</code>,
          " and save to reload.",
        ]}
        link={{
          href: "https://reactjs.org",
          text: "Learn React",
        }}
      />
      <LearnReact />
    </div>
  );
}

export default App;
