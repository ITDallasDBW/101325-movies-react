import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

//API CREDS
const BASE_URL = `https://www.omdbapi.com/`;
const API_KEY = "c393ced6";

const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const [resData, setResData] = useState("");

  //onclick
  const handleSubmit = () => {
    console.log("Submitted value:", inputValue);
    fetchData(inputValue);
    //Perform actions with the input value
  };
  //onEnter
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(); //Call the same submit function
    }
  };
  //onTyping
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
//call api
  async function fetchData(inputValue) {
    const { data } = await axios.get(
      `${BASE_URL}?s=${inputValue}&apikey=${API_KEY}`
    );
    setResData(data.Search);
  }


  
  return (
    <div>
      <section className="search">
        <div className="search__wrapper">
          <input
            type="text"
            className="search__input"
            id="idBox"
            placeholder="What movie are you looking for?"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            autoFocus
          />
          <div className="search__icon" id="idBtn" onClick={handleSubmit}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
        {/* message box prn */}
        {/* <div className="message-box__locator">
          <div className="message-box hidden">
            <div className="message-text">
              Look for <span className="italic">THAT</span> movie
            </div>
          </div>
        </div> */}
      </section>

      <section id="main">
        {/* <div className="container">
          <div className="loading hide__spinner">
            <i className="fa-solid fa-gear" aria-hidden="true"></i>
          </div>
          <div className="row hidden">
            <div className="results__wrapper">
              <h3 className="results__message">Search Results</h3>
              <label>Sort these results:

              <select name="filter" defaultValue={""}>
                <option value="">
                  Sort Movies
                </option>
                <option value="A_Z">Alphabetically A-Z</option>
                <option value="Z_A">Alphabetically Z-A</option>
                <option value="LOW_TO_HIGH">Oldest to Newest</option>
                <option value="HIGH_TO_LOW">Newest to Oldest</option>
              </select>
              </label>
            </div>
            <div className="results">
              <div className="movie">
                <figure className="poster__wrapper">
                  Poster
                  <img src="." alt="" className="poster" />
                </figure>
                <div className="movie__description">
                  <div className="movie__director">Directed by:</div>
                  <div className="movie__actors">Starring:</div>
                </div>
                <div className="movie__title">Title</div>
                <div className="movie__year">Released</div>
                <div className="movie__imdb">IMDB:</div>
                <hr />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maiores aliquam numquam officia, eos quae enim vel doloremque
                rerum incidunt in.
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Main;
