import React from "react";
import { Link } from "react-router-dom";

type Transport = {
  name: string,
  h: number,
  m: number,
  shortened: boolean,
}

const tp : Transport[] = [
  { h: 5, m: 41, name: "", shortened: false},
  { h: 6, m: 11, name: "", shortened: false},
  { h: 6, m: 33, name: "", shortened: false},
  { h: 7, m: 11, name: "", shortened: false},
  { h: 7, m: 26, name: "", shortened: false},
  { h: 7, m: 43, name: "", shortened: false},
  { h: 8, m: 26, name: "", shortened: false},
  { h: 9, m: 26, name: "", shortened: false},
  { h: 9, m: 26, name: "", shortened: false},
]

const tpByTime = tp.sort().map((item) => (
  <>
    <span>{item.h}</span><br></br>
  </>
));


class HomePage extends React.Component {
  render() {
    return (
      <>
        <h1>{tpByTime}</h1>
      </>
    );
  }
}

export default HomePage;
