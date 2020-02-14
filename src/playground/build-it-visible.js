const app = {
  title: "Visibility Toggle"
};

const appRoot = document.getElementById("app");
let buttonClicked = false;
const toggle = () => {
  buttonClicked = !buttonClicked;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={toggle}>
        {!buttonClicked ? "Show Details" : "Hide Details"}
      </button>
      {buttonClicked && <p>Hey! This is some information you can now see</p>}
    </div>
  );
  ReactDOM.render(template, appRoot);
};
render();
