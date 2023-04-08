import './App.css'

function App() {
  return (
  <>
  <div className='simple'>     
    <ol>
      <li>BFE.dev</li>
      <li>JavaScript</li>
      <li>CSS</li>
      <li>System Design</li>
    </ol>
  </div>
  <div className='nested'>
      <ol>
        <li>BFE.dev</li>
        <li>
          JavaScript
        <ol>
          <li>TypeScript</li>
          <li>Quiz</li>
          <li>
            Framework
          <ol>
            <li>React</li>
            <li>Vue.js</li>
        </ol>
      </li>
    </ol>
  </li>
  <li>CSS</li>
  <li>System Design</li>
</ol></div>
    </>
    

  );
}

export default App
