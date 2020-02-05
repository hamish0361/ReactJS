import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TopMenu from "./Component/TopMenu/TopMenu";
import Header from "./Component/Header/Header";
import Content from "./Component/Content/Content";
import Footer from "./Component/Footer/Footer";

export default class App extends Component {
  render() {
    return (
      <div className="_013">
        <TopMenu />
        <Header />
        <div className="container">
          <div className="row pt-5">
            <Content
              title="HI MY FRIENDS"
              picture="img/04.jpg"
              quote="Im Shin -.-"
            />
            <Content
              title="HI MY FRIENDS"
              picture="img/04.jpg"
              quote="Im Shin -.-"
            />
            <Content
              title="HI MY FRIENDS"
              picture="img/04.jpg"
              quote="Im Shin -.-"
            />

            <Content
              title="HI MY FRIENDS"
              picture="img/04.jpg"
              quote="Im Shin -.-"
            />
            <Content
              title="HI MY FRIENDS"
              picture="img/04.jpg"
              quote="Im Shin -.-"
            />
            <Content
              title="HI MY FRIENDS"
              picture="img/04.jpg"
              quote="Im Shin -.-"
            />
            <Content
              title="HI MY FRIENDS"
              picture="img/04.jpg"
              quote="Im Shin -.-"
            />
            <Content
              title="HI MY FRIENDS"
              picture="img/04.jpg"
              quote="Im Shin -.-"
            />
            <Content
              title="HI MY FRIENDS"
              picture="img/04.jpg"
              quote="Im Shin -.-"
            />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
