import React from "react";
import "./styles.css";
import { getFakeAPIData } from "./getFakeAPIData";
const linkcss = {
  background: "#efefef",
  margin: "2px",
  padding: "2px",
  width: "99%",
  align: "center"
};
const acss = {
  color: "#333",
  textDecoration: "none"
};

function LinklistItem({ item }) {
  return (
    <div style={linkcss}>
      <a href={item.link} style={acss}>
        <h4> {item.title} </h4>
      </a>
    </div>
  );
}

function ProcessLinklist(tempitem) {
  return <LinklistItem item={tempitem} key={tempitem.id} />;
}

function Linklist({ linklist }) {
  return linklist.map(ProcessLinklist);
}

const data = getFakeAPIData();

export default function App() {
  return (
    <div className="App">
      <h1>LinkStore</h1>
      <h4>Put your important links at one place!</h4>
      <Linklist linklist={data} />
    </div>
  );
}
