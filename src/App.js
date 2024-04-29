import { createContext, useContext, useState } from 'react';
import { Header } from "./components/Header/Header";
import { Search } from "./components/Search/Search";
import { Events } from "./components/Events/Events";

export const AppContext = createContext(null);

function App() {
  const [keyword, setKeyword] = useState("");

  return (
    <>
      <Header/>
      <AppContext.Provider value={{ keyword, setKeyword }}>
        <Search/>
        <Events/>
      </AppContext.Provider>
    </>
  );
}

export default App;
