import logo from './logo.svg';
import './App.css';
import StatefulGreeting from './components/StatefulGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting=""/>
      <FunctionalGreetingWithProps name="Mike" message="I see you're" age="32 years old," greeting="Nice to meet you!!"/>

    </div>
  );
}

export default App;