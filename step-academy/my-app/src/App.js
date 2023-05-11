import React from "react";
import FunctionComponent from "./components/FunctionComponent";
import ClassComponent from "./components/ClassComponent";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import LifeCycle from "./components/LifeCycle";
import Clock from "./components/Clock";
import ClassForm from "./components/ClassForm";
import User from "./components/User";
import MemoComponent from "./components/MemoComponent";

function App() {
  return (
      <div>
          {/*<button id="unmountBtn">Unmount</button>*/}
          {/*<FunctionComponent name="Alice" age="25" />*/}
          {/*<ClassComponent name="Mary" age="50"/>*/}
          {/*<Counter />*/}
          {/*<ClassCounter number="2"/>*/}
          {/*<LifeCycle />*/}
          {/*<Clock />*/}
          {/*<User />*/}
          {/*<ClassForm name="Anna" age="30"/>*/}
          <MemoComponent/>


      </div>
  );
}

export default App;
