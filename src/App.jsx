import { useState } from "react";
import "./App.css";
import EmployeeList from "./components/EmployeeList/EmployeeList.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <div>
        <Header onClick={loginHandler} loginStatus={isLoggedIn} />
        <main>
          {isLoggedIn ? <EmployeeList /> : <p>Please log in to start</p>}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
