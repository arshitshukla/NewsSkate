import React, {useState } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { Route ,Routes} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'


const App=()=> {
  const [progress,SetProgress]=useState(0);

  const setProgress=(progress)=>{
    SetProgress(progress);
  }

    return (
      <>
        <LoadingBar
        color='#f11946'
        progress={progress}
        />
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} key='general' page={12} category='general'/>}></Route>
          <Route path='/business' element={<News setProgress={setProgress} key='business' page={12} category='business'/>}></Route>
          <Route path='/entertainment' element={<News setProgress={setProgress} key='entertainment' page={12} category='entertainment'/>}></Route>
          <Route path='/sports' element={<News setProgress={setProgress} key='sports' page={12} category='sports'/>}></Route>
          <Route path='/health' element={<News setProgress={setProgress} key='health' page={12} category='health'/>}></Route>
          <Route path='/science' element={<News setProgress={setProgress} key='science' page={12} category='science'/>}></Route>
          <Route path='/technology' element={<News setProgress={setProgress} key='technology' page={12} category='technology'/>}></Route>
        </Routes>
      </>
    )
}

export default App;