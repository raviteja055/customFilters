import "./App.css";
import { WelcomeHeader } from "./components/common/welcome-header";
import { FilterList } from "./components/filter-list/filterList";
import FilterSection from "./components/filterSection/filterSection"
import MenuWithSections from "./components/test"
function App() {
  return (
    <div className="App">
      <div className="container">
        <WelcomeHeader></WelcomeHeader>
        <FilterSection></FilterSection>
        {/* <MenuWithSections /> */}
      </div>
    </div>
  );
}

export default App;
