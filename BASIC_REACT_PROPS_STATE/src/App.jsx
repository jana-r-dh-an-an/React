import { useState } from 'react';
import Card from './components/Header/Card'
import Header from './components/Header/Header'
import Nested from './components/Header/Nested';
import { CORE_CONCEPTS } from './components/Header/data';
import { EXAMPLES } from './components/Header/Example';
import Box from './components/Header/Box';
import RoundBox from './components/Header/RoundBox';


function App() {
const[selectedTopic, selectedArea]=useState('components')
  function handleSelect(data){
    selectedArea(data);
    // console.log(data);
  }
  const [boxes, setBoxes] = useState([]);


  const addBox = () => {
    const newBox = {
      id: boxes.length + 1
    };
    setBoxes([...boxes, newBox]);
  };

  const [box1, setRoundBox]=useState([]);

  const addBox1 = () => {
    const newBox1 = {
      id: box1.length + 1
    };
    setRoundBox([...box1, newBox1]);
  };

  


 
  return (
    <div>
     <Header/>
      <main>
        <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
        <Card {...CORE_CONCEPTS[0]}/>
        <Card {...CORE_CONCEPTS[1]}/>
        <Card {...CORE_CONCEPTS[2]}/>
        <Card {...CORE_CONCEPTS[3]}/>
        </ul>
        </section>

        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <Nested onSelect={()=>handleSelect('components')}>Components</Nested>
            <Nested onSelect={()=>handleSelect('jsx')}>JSX</Nested>
            <Nested onSelect={()=>handleSelect('props')}>Props</Nested>
            <Nested onSelect={()=>handleSelect('state')}>State</Nested>

          </menu>
          <div id='tab-content'>
            <h2>{EXAMPLES[selectedTopic].title}</h2>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>

          </div>

        </section>

        <section>
        <div>
      <div>
        
        <button onClick={addBox}>Add Box</button>
        
      </div>
      <div>
        {boxes.map((box) => (
          <Box key={box.id} id={box.id} />
        ))}
        {<Box id="newBox" />}
      </div>
    </div>
        </section>


        <section>
          <div>
          <button onClick={addBox1}>Add-Box</button>
          </div>
          <div>
        {box1.map((box) => (
          <RoundBox key={box.id} id={box.id} />
        ))}
        {<RoundBox id="newBox" />}
      </div>
        </section>
      </main>
      
    </div>
  );
}

export default App;
