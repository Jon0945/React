class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggleVisibility() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility == false ? "Show Details" : "Hide Details"}
        </button>
        {this.state.visibility == true && (
          <p>Hey! This is some information you can now see</p>
        )}
      </div>
    );
  }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

