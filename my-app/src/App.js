import logo from './logo.svg';
import './App.css';

import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
     
        <FunctionalGreetingWithProps name="Mike" message="I see you're" age="32 years old," greeting="Nice to meet you!!"/>

    </div>
  );
}

export default App;
