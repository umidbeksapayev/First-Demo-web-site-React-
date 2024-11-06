import React from 'react'
import {useState} from 'react'
import { EXAMPLES } from '../data'
import TabButton from './TabButton.jsx'
import Section from './Section.jsx'
import Tabs from './Tabs.jsx'

function Examples() {
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
    <Section title = "Example" id='examples'>
      <Tabs
        buttons={<>
            <TabButton isSelected={selectedTopic === "components"} OnSelect={()=>handleSelected("components")} lable = "Components"/>
            <TabButton isSelected={selectedTopic === "jsx"} OnSelect={()=>handleSelected("jsx")} lable = "JSX"/>
            <TabButton isSelected={selectedTopic === "props"} OnSelect={()=>handleSelected("props")} lable = "Props"/>
            <TabButton isSelected={selectedTopic === "state"} OnSelect={()=>handleSelected("state")} lable = "State"/>
        </>}
      >{TabContent}
      </Tabs>

          {/* {!selectedTopic ?( <p>Please select a topic</p> ):(<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>) } */}
    </Section>
  )
}

export default Examples