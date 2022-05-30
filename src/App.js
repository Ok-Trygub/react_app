import Card from './components/Card'
import Card2 from './components/Card2'

function App() {
  return (
      <div className="App">
        <Card />

          <Card2 title = 'hi' />
          <Card2 text = 'how are you?'/>
          <Card2 title = 'hi' text = 'how are you?'/>
      </div>
  );

}

export default App;
