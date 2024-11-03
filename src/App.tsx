import "./App.css";
import { Container } from "./components/Container/Container";
import { Table } from "./components/Table/Table";
import { Navigations } from "./components/Navigations/Navigations";
import { MainSearch } from "./components/MainSearch/MainSearch";

function App() {
  return (
    <>
      <Container>
        <MainSearch />
        <div className="mt-[12px]">
          <Table />
          <Navigations />
        </div>
      </Container>
    </>
  );
}

export default App;
