import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

var title = "Ты сегодня покормил кота?";
var data = [
  {
    status: "default",
    description: {
      dish: "Сказочное заморское яство",
      title: "Нямушка",
      ingredient: "с фуа-гра",
      portions: 10,
      gift: "мышь в подарок"
    },
    weight: 0.5,
    comment: {
      default: {
        text: "Чего сидишь? Порадуй котэ, ",
        link: "купи."
      },
      selected: "Печень утки разварная с артишоками."
    }
  },
  {
    status: "default",
    description: {
      dish: "Сказочное заморское яство",
      title: "Нямушка",
      ingredient: "с рыбой",
      portions: 40,
      gift: "2 мыши в подарок"
    },
    weight: 2,
    comment: {
      default: {
        text: "Чего сидишь? Порадуй котэ, ",
        link: "купи."
      },
      selected: "Головы щучьи с чесноком да свежайшая сёмгушка."
    }
  },
  {
    status: "disabled",
    description: {
      dish: "Сказочное заморское яство",
      title: "Нямушка",
      ingredient: "с курой",
      portions: 100,
      gift: "5 мышей в подарок"
    },
    weight: 5,
    comment: {
      default: {
        text: "Чего сидишь? Порадуй котэ, ",
        link: "купи."
      },
      selected: "Филе из цыплят с трюфелями в бульоне."
    }
  }
];

ReactDOM.render(
  <App title={title} products={data} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
