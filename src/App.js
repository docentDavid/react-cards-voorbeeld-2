import { library } from "@fortawesome/fontawesome-svg-core";
import { faComments, faClock } from "@fortawesome/free-solid-svg-icons";

import Cards from "./Cards";

library.add(faComments, faClock);

const App = () => {
  return (
    <div className="App">
      <Cards />
    </div>
  );
};

export default App;
