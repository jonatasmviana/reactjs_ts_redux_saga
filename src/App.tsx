import React from "react";
import { Provider } from "react-redux";
import RepositoryList from "./components/RepositoryList";
import store from "./store";

const App = () => <Provider store={store}><RepositoryList /></Provider>;

// class App extends Component {
//   render() {
//     return <div className="App"></div>;
//   }
// }

export default App;
