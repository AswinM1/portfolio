
import Contents from './components/Contents'
import Navabar from './components/Navabar'
import './App.css'

import Project from './components/Project'
import Results from './components/Results'

import Tech from './components/Tech'


function App() {
 

  return (
    <>
      <div style={{backgroundColor:'black'}}>
      <Navabar></Navabar>
    
      <Contents></Contents>
     
     
   <Project></Project>
      <Results></Results>
   
     
 
       </div>
    </>
  )
}

export default App
