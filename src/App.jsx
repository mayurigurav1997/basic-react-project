import { useState } from 'react';
import CoreConcept from './components/CoreConcept.jsx';
import Header from './components/Header/Header.jsx';
import TabButton from './components/TabButton.jsx';
import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js'


function App() {
  const [selectedTopic, setSelectedTopic] = useState()
  function handleSelect(selectedButton) {
    // console.log(selectedButton)
    setSelectedTopic(selectedButton)
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept)=>(
              <CoreConcept key={concept.title} {...concept} />
            ))
            }

          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic == 'components'} handleSelect={() => handleSelect('components')} label="Components" />
            <TabButton isSelected={selectedTopic == 'jsx'} handleSelect={() => handleSelect('jsx')} label="JSX" />
            <TabButton isSelected={selectedTopic == 'props'} handleSelect={() => handleSelect("props")} label="Props" />
            <TabButton isSelected={selectedTopic == 'state'} handleSelect={() => handleSelect('state')} label="State" />
            {/* <TabButton label="Components" /> */}
          </menu>
          {!selectedTopic ? <p>Please Select the topic</p> :
            <div className="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>{EXAMPLES[selectedTopic].code}</pre>
            </div>
          }

        </section>
      </main>
    </div>
  );
}

export default App;