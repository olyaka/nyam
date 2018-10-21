import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

function Comment(props) {
  const status = props.status;
  const comment = props.comment;
  const ingredient = props.description.ingredient;
  if (status === "default") {
    return <DefaultComment comment={comment.default} />;
  } else if (status === "disabled") {
    return <DisabledComment ingredient={ingredient} />;
  } else if (status === "selected") {
    return <SelectedComment comment={comment.selected} />;
  }
}

function DefaultComment(props) {
  return (
    <div className="comment">
      {props.comment.text}
      <a>{props.comment.link}</a>
    </div>
  );
}

function DisabledComment(props) {
  return (
    <div className="comment disabled">
      Печалька, {props.ingredient} закончился
    </div>
  );
}

function SelectedComment(props) {
  return <div className="comment selected">{props.comment}</div>;
}

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.status
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.state.status !== "disabled") {
      this.setState(state => ({
        status: state.status === "default" ? "selected" : "default"
      }));

      const ctx = this.refs.canvas.getContext("2d");

      ctx.strokeStyle === "#1698d9"
        ? (ctx.strokeStyle = "rgb(217, 22, 103)")
        : (ctx.strokeStyle = "#1698d9");
      ctx.stroke();

      e.currentTarget.addEventListener("mouseout", function() {
        if (this.classList.contains("selected")) {
          this.classList.add("out");
        }
      });
    }
  }
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    debugger;
    const ctx = this.refs.canvas.getContext("2d");
    ctx.fillStyle = "rgb(242, 242, 242)";
    this.state.status === "default"
      ? (ctx.strokeStyle = "rgb(22, 152, 217)")
      : (ctx.strokeStyle = "#b3b3b3");
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(0, 45);
    ctx.lineTo(45, 0);
    ctx.lineTo(312, 0);
    ctx.lineTo(312, 472);
    ctx.lineTo(0, 472);
    ctx.closePath();

    ctx.fill();
    ctx.stroke();
  }

  render() {
    return (
      <div
        className={"item " + this.state.status}
        onClick={e => this.handleClick(e)}
      >
        <canvas id="canvas" ref="canvas" width="312" height="472" />
        <div className="overlay" />
        <div className="container">
          <p className="dish">{this.props.description.dish}</p>
          <div className="product-title">{this.props.description.title}</div>
          <div className="ingredient">{this.props.description.ingredient}</div>
          <div className="portions">
            {this.props.description.portions} порций
          </div>
          <div className="gift">{this.props.description.gift}</div>
          <div className="cat-pic-container" />
          <div className="weight">
            {this.props.weight}
            <br />
            <span>кг</span>
          </div>
          <Comment
            status={this.state.status}
            comment={this.props.comment}
            description={this.props.description}
          />
        </div>
      </div>
    );
  }
}

const App = ({ title, products }) => (
  <div className="bg">
    <div className="title">{title}</div>
    <div className="products">
      {products.map((product, i) => (
        <Product key={i} {...product} />
      ))}
    </div>
  </div>
);
export default App;
