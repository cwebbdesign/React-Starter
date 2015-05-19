import React from "react";
import { count, vector } from "../common/mori";


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      const data = vector("a", "b", "c", 1, 2, 3);
      return (
        <div className="hello-world">
          Hello World.
          There are { count(data) } pieces of data.
        </div>
      );
  }
}

export default App;
