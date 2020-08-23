import React, { useState, useEffect } from "react";
import "./styles.css";
import Card from "./Components/Card";
import axios from "axios";

const App = () => {
  const [filterData, setfilterData] = useState([]);
  const [data, setData] = useState([]);
  const [pre, setPre] = useState(null);
  const [next, setNext] = useState(null);

  useEffect(() => {
    getData("https://rickandmortyapi.com/api/episode/");
  }, []);

  const getData = (url) => {
    axios(url)
      .then(({ data }) => {
        setData(data.results);
        setPre(data.info.prev);
        setNext(data.info.next);
      })
      .catch((err) => {
        alert("Record not found..!!");
      });
  };
  const handleOnChange = (event) => {
    const input = event.target.value;
    setfilterData(input);
  };
  const handleOnClick = () => {
    let url =
      "https://rickandmortyapi.com/api/episode/" + "?name=" + filterData;
    getData(url);
  };

  return (
    <div>
      <div className="header">
        <h1>The Rick and Morty Show</h1>
        <input onChange={handleOnChange} placeholder="Enter Episode Name.." />
        <button onClick={handleOnClick}>Search</button>
      </div>
      <div className="all-episodes">
        {data.map((episode) => (
          <Card
            name={episode.name}
            air_date={episode.air_date}
            episode={episode.episode}
          />
        ))}
      </div>
      <div className="btn">
        {pre ? <button onClick={() => getData(pre)}>Pre</button> : null}
        {next ? <button onClick={() => getData(next)}>Next</button> : null}
      </div>
    </div>
  );
};

export default App;
