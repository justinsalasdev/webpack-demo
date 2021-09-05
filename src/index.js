import _ from "lodash";
import "./style.css";
import imageSample from "./image.png";
import Data from "./data.xml";
import Notes from "./data.csv";

import toml from "./data.toml";
import yaml from "./data.yaml";
import json from "./data.json5";

console.log(toml.title);
console.log(toml.owner.name);

console.log(yaml.title);
console.log(yaml.owner.name);

console.log(json.title);
console.log(json.owner.name);

//for JSON import, destructuring is not allowed

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  const myImage = new Image();
  myImage.src = imageSample;

  element.appendChild(myImage);

  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());
