import React, {useState, useEffect} from 'react'
import { animated, Transition } from 'react-spring/renderprops'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'

export const App = () => {
  const [ showPage3, setShowPage3 ] = useState( false )
  const toggle = () => {
      setShowPage3(!showPage3)
  }
  useEffect( () => {
    setShowPage3(!showPage3)
  },[])
  return (
    
      <React.Fragment>
        <div className="container-fluid">
          
        <Page2 toggle={ toggle}/>
        <Transition
          native
          items={ showPage3 }
          from={ { opacity: 0 } }
          enter={ { opacity: 1 } }
          leave={{opacity: 0}}
        >
          { show => show && ( props => (
            <animated.div>
            
              <Page3/>
              <Page4 />
              <Page1/>
            </animated.div> 
          ))}
        </Transition>
        </div>
      </React.Fragment>
   
  )
}


export default App