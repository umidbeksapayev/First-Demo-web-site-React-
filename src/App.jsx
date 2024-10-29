import { useState} from 'react'
import { EXAMPLES } from './data.js';


import Header from './components/Header/Header.jsx';
import {CORE_CONCEPTS} from './data.js'
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
let tabContent = "sjdnasdakdnb";

function App() {
  const [ selectedTopic, setSelectedTopic] = useState()
  function handleSelected(selectedBotton){
    setSelectedTopic(selectedBotton)
    console.log(selectedBotton);
    
  }
  let TabContent = <p>Please select a topic</p>

  if (selectedTopic){
    TabContent = (
      <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
    )
  }

  return (
    <div>
    <Header/>
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=> <CoreConcept key={conceptItem.title } {...conceptItem} />)}
          {/* <CoreConcept
            title={CORE_CONCEPTS[0].title} 
            description={CORE_CONCEPTS[0].description}
            image = {CORE_CONCEPTS[0].image}
          />
          <CoreConcept{...CORE_CONCEPTS[1]}/>
          <CoreConcept{...CORE_CONCEPTS[2]}/>
          <CoreConcept{...CORE_CONCEPTS[3]}/> */}
          </ul>
        </section>
        <section id='examples'>
          <h2>Example</h2>
          <menu>
            <TabButton isSelected={selectedTopic === "components"} OnSelect={()=>handleSelected("components")} lable = "Components"/>
            <TabButton isSelected={selectedTopic === "jsx"} OnSelect={()=>handleSelected("jsx")} lable = "JSX"/>
            <TabButton isSelected={selectedTopic === "props"} OnSelect={()=>handleSelected("props")} lable = "Props"/>
            <TabButton isSelected={selectedTopic === "state"} OnSelect={()=>handleSelected("state")} lable = "State"/>
          </menu>
          {TabContent}
          {/* {!selectedTopic ?( <p>Please select a topic</p> ):(<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>) } */}
        </section>

      </main>
    </div>
  );
}

export default App;
