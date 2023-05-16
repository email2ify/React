import logo from './logo.svg';
import './App.css';
import StatefulGreetingIncremental from './components/StatefulGreetingIncremental';
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
import RenderingLists from "./components/RenderingLists";
import Clock from './components/Clock';
import ControlledForm from './components/ControlledForm copy';
import UncontrolledForm from './components/UncontrolledForm';
import SearchBar from './components/SearchBar';
import HooksCounter from './components/HooksCounterIncremental';
import ControlledFormHooks from './components/ControlledFormHooks';
import UseStateWithArrays from './components/UseStateWithArrays';
import UseEffectCounter from './components/UseEffectCounter';
import HTTPGet from './components/HTTPGet';
import HTTPPost from './components/HTTPPost';
import HTTPHooks from './components/HTTPHooks';



function App() {
  return (
//  <div className={css.App}>
    <div className="App">
      <Clock />
      <UseStateWithArrays />
      <SearchBar />
      <ControlledFormHooks />
      <UncontrolledForm />  
      <ControlledForm />
      <RenderingLists />
      <NavBarForm />
      <MethodsAsPropsChild />
      <MethodsAsPropsParent/>
      <NestingComponents />
      <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={false} />
      <UseEffectCounter />
      <EventBinding />
      <EventClass />
      <HooksCounter />
      <EventFunctional />
      <StatefulGreetingIncremental greeting=""/>
      <FunctionalGreetingWithProps name="Mike" message="I see you're" age="32 years old," greeting="Nice to meet you!!"/>
      <HTTPGet />
      <HTTPPost />
      <HTTPHooks />
    </div>
  );
}

export default App;