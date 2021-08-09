import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Form from "react-bootstrap/Form";
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
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
  const [siteValue, setSiteValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [alert, setAlert] = useState(false);

  const sites = [
    {
      name: "Reddit",
      value: "1",
      icon: "AiFillRedditCircle",
      link: "reddit.com&tbs=qdr:m6",
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
    {
      name: "Google",
      value: "4",
      icon: "AiOutlineGoogle",
      link: "google.com",
    },
    // add an additional field for search term
  ];

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const handleClick = () => {
    if (input === "") {
      setAlert(true);
      return;
    }

    if (sites.find((e) => e.value === siteValue) === undefined) {
      // check for no site chosen
      if (dateValue === "") {
        // check for no date chosen
        let searchString =
          "https://www.google.com/search?q=" +
          input.replace(/\s+/g, "+").toLowerCase();
        window.location.href = searchString;
      } else {
        let searchString =
          "https://www.google.com/search?q=" +
          input.replace(/\s+/g, "+").toLowerCase() +
          dateValue;
        window.location.href = searchString;
      }
    } else if (sites.find((e) => e.value === siteValue).name === "Google") {
      // search google
      if (dateValue === "") {
        let searchString =
          "https://www.google.com/search?q=" +
          input.replace(/\s+/g, "+").toLowerCase();
        window.location.href = searchString;
      } else {
        // with chosen date
        let searchString =
          "https://www.google.com/search?q=" +
          input.replace(/\s+/g, "+").toLowerCase() +
          dateValue;
        window.location.href = searchString;
      }
    } else {
      // search all other sites
      if (dateValue === "") {
        // without date chosen
        let searchString =
          "https://www.google.com/search?q=" +
          input.replace(/\s+/g, "+").toLowerCase() +
          "+" +
          "site:" +
          sites.find((e) => e.value === siteValue).link;
        window.location.href = searchString;
      } else {
        // with date chosen
        let searchString =
          "https://www.google.com/search?q=" +
          input.replace(/\s+/g, "+").toLowerCase() +
          "+" +
          "site:" +
          sites.find((e) => e.value === siteValue).link +
          dateValue;
        window.location.href = searchString;
      }
    }

    setDateValue("");
    // //testing purposes
    // console.log(sites.find((e) => e.value === siteValue).name);
  };

  function AlertDismissibleExample() {
  
    if (alert) {
      return (
        <Alert variant="danger" onClose={() => setAlert(false)} dismissible>
          <Alert.Heading>Oh snap! This doesn't look right!</Alert.Heading>
          <p>
            Make sure you've entered a valid searchable term!
          </p>
        </Alert>
      );
    }
    return null;
  }

  return (
    <div className="SearchContainer">
      <div className="SearchBarContainer">
        {alert && (
          <AlertDismissibleExample />
        )}

        <div className="input-group">
          <input
            onChange={handleChange}
            type="text"
            className="form-control search-bar"
            placeholder="Enter your search ..."
          ></input>
          <button
            onClick={handleClick}
            type="button"
            className="btn btn-primary search-icon-btn"
          >
            <AiOutlineSearch />
          </button>
        </div>
      </div>

      {/* SITE BUTTONS SECTION */}

      <h4 className="section-header">Websites to search</h4>
      <div className="SearchButtonsContainer">
        <ButtonGroup className="SearchButtonsContainer">
          {sites.map((site, idx) => (
            <ToggleButton
              className="m-2 search-btn"
              key={idx}
              id={`site-${idx}`}
              type="radio"
              variant="outline-primary"
              name="site"
              value={site.value}
              checked={siteValue === site.value}
              onChange={(e) => setSiteValue(e.currentTarget.value)}
            >
              {(site.icon === "AiFillRedditCircle" && (
                <div className="">
                  <AiFillRedditCircle />
                  <p> {site.name}</p>
                </div>
              )) ||
                (site.icon === "ImStackoverflow" && (
                  <div className="">
                    <ImStackoverflow />
                    <p> {site.name}</p>
                  </div>
                )) ||
                (site.icon === "AiOutlineAmazon" && (
                  <div className="">
                    <AiOutlineAmazon />
                    <p> {site.name}</p>
                  </div>
                )) ||
                (site.icon === "AiOutlineGoogle" && (
                  <div className="">
                    <AiOutlineGoogle />
                    <p> {site.name}</p>
                  </div>
                ))}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>

      {/* DATE BUTTONS SECTION*/}
      <h4 className="section-header">Dates to filter by</h4>
      <div className="SearchDatesContainer">
        <Form>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                className="date-buttons"
                label="Anytime"
                name="dates"
                type={type}
                autoComplete="off"
                id={`inline-${type}-1`}
                onClick={(e) => setDateValue("")}
              />
              <Form.Check
                inline
                className="date-buttons"
                label="Past 24 Hours"
                name="dates"
                type={type}
                autoComplete="off"
                id={`inline-${type}-5`}
                onClick={(e) => setDateValue("&tbs=qdr:h24")}
              />
              <Form.Check
                inline
                className="date-buttons"
                label="Past Year"
                name="dates"
                type={type}
                autoComplete="off"
                id={`inline-${type}-2`}
                onClick={(e) => setDateValue("&tbs=qdr:y1")}
              />
              <Form.Check
                inline
                className="date-buttons"
                label="Past 6 Months"
                name="dates"
                autoComplete="off"
                type={type}
                id={`inline-${type}-3`}
                onClick={(e) => setDateValue("&tbs=qdr:m6")}
              />
              <Form.Check
                inline
                className="date-buttons"
                label="Past Month"
                autoComplete="off"
                name="dates"
                type={type}
                id={`inline-${type}-4`}
                onClick={(e) => setDateValue("&tbs=qdr:m1")}
              />
            </div>
          ))}
        </Form>
      </div>
    </div>
  );
};

export default SearchBar;
