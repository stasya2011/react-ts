import React, { useState, useEffect, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Cards from "./components/Cards/Cards";
import { ICard } from "./types/types";
import Context from "./Context/Context";
import "./App.css";
const apiKey = "398b5da7fc05d04a6b0ed75e69d3bce4";
function App() {
  const [cards, setCards] = useState<ICard[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  const onFetch = useCallback((): void => {
    setLoading(() => true);
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters?limit=10&offset=9&apikey=${apiKey}`
    )
      .then((res) => res.json())
      .then((res) => {
        setCards(() => [...res.data.results]);
        setLoading(() => false);
      })
      .catch((e) => console.log(e));
  }, [cards]);

  useEffect(() => {
    onFetch();
  }, []);

  const onFilter = (searchedValue: string): void => {
    if (!searchedValue) {
      return onFetch();
    }

    setCards((cards) => {
      const filterCards = cards.filter((element) =>
        element.name.indexOf(searchedValue) !== -1 ? element : null
      );
      return filterCards;
    });
  };

  return (
    <Context.Provider value={{ cards, onFilter }}>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={isLoading ? "Loading..." : <Cards />} />
            <Route path="/about" element={<h2>About</h2>} />
            <Route path="*" element={<h2>Error</h2>} />
          </Routes>
        </main>
      </div>
    </Context.Provider>
  );
}

export default App;
