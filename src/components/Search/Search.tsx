import React, { useRef, useContext } from "react";
import Context from "../../Context/Context";
import "./search.scss";

const Search: React.FC = () => {
  const myRef = useRef<HTMLInputElement>(null);
  const { onFilter } = useContext(Context);

  return (
    <form>
      <input ref={myRef} type="text" />
      <button
        onClick={(e) => {
          console.log("searching...");
          e.preventDefault();
          onFilter(myRef.current ? myRef.current.value : "");
        }}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
