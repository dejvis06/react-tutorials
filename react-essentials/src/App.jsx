import reactCoreConceptsImage from "./assets/react-core-concepts.png";
import componentsImage from "./assets/components.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];
function generateRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[generateRandomInt(2)];

  return (
    <header>
      <img src={reactCoreConceptsImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title}></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title="Components"
              description="The core UI building block"
              image={componentsImage}
            />
            <CoreConcept title="Props" />
            <CoreConcept />
            <CoreConcept />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
