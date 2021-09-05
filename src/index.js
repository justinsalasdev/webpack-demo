import _ from "lodash";
import "./style.css";
import imageSample from "./image.png";
import Data from "./data.xml";
import Notes from "./data.csv";
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
