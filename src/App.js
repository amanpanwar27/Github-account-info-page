import react from "react";
import Submitform from "./submitform";
class App extends react.Component {
  render() {
    const { store } = this.props;
    // console.log(store);
    return (
      <div>
        <h1>Welcome to whore house (abhay randi)</h1>
        <Submitform store={store} />
      </div>
    );
  }
}
export default App;
