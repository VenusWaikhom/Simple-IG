import "./App.css";
import SearchAppBar from "./elements/appbar/appbar";
import Second from "./elements/second/Second";
import Secondright from "./elements/second/right-box-user";
import Rightboxsuggest from "./elements/second/right-box-suggest";
import Card from "./elements/second/card";

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <div className="wraper">
        <div>
          <Second />
          <Card />
          <Card />
          <Card />
        </div>
        <div sx={{ width: 300 }}>
          <Secondright />
          <div className="text">
            <h5>Suggest For You</h5>
            <span>See All</span>
          </div>
          <Rightboxsuggest />
          <Rightboxsuggest />
          <Rightboxsuggest />
          <Rightboxsuggest />
          <Rightboxsuggest />
          <Rightboxsuggest />
        </div>
      </div>
    </div>
  );
}

export default App;
