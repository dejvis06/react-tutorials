import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept.jsx";

function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept
            key={
              conceptItem.title
            } /* avoid unique item console error, every item has different title */
            title={conceptItem.title}
            description={conceptItem.description}
            image={conceptItem.image}
          />
        ))}
      </ul>
    </section>
  );
}
export default CoreConcepts;
