import "./App.css";
import { Container } from "./components/Container/Container";
import { Search } from "./components/Search/ Search";
import { Table } from "./components/Table/Table";
import { Navigations } from "./components/Navigations/Navigations";

function App() {
  return (
    <>
      <Container>
        <Search />
        <div className="mt-[12px]">
          <Table />
          <Navigations />
        </div>
      </Container>
    </>
  );
}

export default App;
