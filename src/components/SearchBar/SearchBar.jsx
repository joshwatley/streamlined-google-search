import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import {
  AiOutlineSearch,
  AiFillRedditCircle,
  AiOutlineAmazon,
  AiOutlineGoogle,
} from "react-icons/ai";
import { ImStackoverflow } from "react-icons/im";
import "./SearchBar.css";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [radioValue, setRadioValue] = useState("");

  const radios = [
    {
      name: "Reddit",
      value: "1",
      icon: "AiFillRedditCircle",
      link: "reddit.com",
    },
    {
      name: "Stack Overflow",
      value: "2",
      icon: "ImStackoverflow",
      link: "stackoverflow.com",
    },
    {
      name: "Amazon",
      value: "3",
      icon: "AiOutlineAmazon",
      link: "amazon.co.uk",
    },
    { name: "Google", value: "4", icon: "AiOutlineGoogle", link: "google.com" },
    // add an additional field for search term
  ];

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const handleClick = () => {
    // on click then get then search
    //   pass a data set with 2 items, one is the site, and one is the date
    // if searching straight google:
    if (radios.find((e) => e.value === radioValue).name === "Google") {
      window.location.href = "https://www.google.com/search?q=" + input;
    } else {
      window.location.href =
        "https://www.google.com/search?q=" +
        input +
        "+" +
        "site:" +
        radios.find((e) => e.value === radioValue).link;
    }
    console.log(radios.find((e) => e.value === radioValue).name);
  };

  return (
    <div className="SearchContainer">
      <div className="SearchBarContainer">
        <div className="input-group">
          <input
            onChange={handleChange}
            type="text"
            className="form-control search-bar"
          ></input>
          <button
            onClick={handleClick}
            type="button"
            className="btn btn-primary search-icon"
          >
            <AiOutlineSearch />
          </button>
        </div>
      </div>

      <div className="SearchButtonsContainer">
        <ButtonGroup className="SearchButtonsContainer">
          {radios.map((radio, idx) => (
            <ToggleButton
              className="m-2 search-btn"
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant="outline-primary"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {(radio.icon === "AiFillRedditCircle" && (
                <div className="">
                  <AiFillRedditCircle />
                  <p> {radio.name}</p>
                </div>
              )) ||
                (radio.icon === "ImStackoverflow" && (
                  <div className="">
                    <ImStackoverflow />
                    <p> {radio.name}</p>
                  </div>
                )) ||
                (radio.icon === "AiOutlineAmazon" && (
                  <div className="">
                    <AiOutlineAmazon />
                    <p> {radio.name}</p>
                  </div>
                )) ||
                (radio.icon === "AiOutlineGoogle" && (
                  <div className="">
                    <AiOutlineGoogle />
                    <p> {radio.name}</p>
                  </div>
                ))}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
    </div>
  );
};

export default SearchBar;
