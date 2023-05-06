import logo from './logo.svg';
import './App.css';
import StatefulGreeting from './components/StatefulGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import EventClass from './components/EventClass';
import EventFunctional from './components/EventFunctional';
import EventBinding from  './components/EventBinding';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';
import MethodsAsPropsChild from './components/MethodsAsPropsChild';
import NavBarForm from './components/NavBarForm';


function App() {
  return (
//  <div className={css.App}>
    <div className="App">
      <NavBarForm />
      <MethodsAsPropsChild />
      <MethodsAsPropsParent/>
      <NestingComponents />
      <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={false} />
      <EventBinding />
      <EventClass />
      <EventFunctional />
      <StatefulGreeting greeting=""/>
      <FunctionalGreetingWithProps name="Mike" message="I see you're" age="32 years old," greeting="Nice to meet you!!"/>

    </div>
  );
}

export default App;