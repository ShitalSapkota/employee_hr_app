import "./App.css";
import EmployeeList from "./components/EmployeeList/EmployeeList.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <EmployeeList />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
