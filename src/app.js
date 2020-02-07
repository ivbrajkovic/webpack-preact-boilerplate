import "./style/style.css";

import { h, render, Fragment } from "preact";

import Navbar from "./components/navbar";
import Main from "./components/main";
import Footer from "./components/footer";

const App = () => (
  <>
    <Navbar />
    <Main />
    <Footer />
  </>
);

render(<App />, document.body);
