import Card from './components/Card'
import Card2 from './components/Card2'
import Definitions from './components/Definitions'

function App() {
    const definitions = [
        {dt: 'one', dd: 'two', id: 1},
        {dt: 'another term', dd: 'another description', id: 2},
    ];

    return (
        <div className="App">
            <Card/>
            <Card2 title='hi'/>
            <Card2 text='how are you?'/>
            <Card2 title='hi' text='how are you?'/>

            <hr/>
            <Definitions data={definitions} />

        </div>
    );

}

export default App;
