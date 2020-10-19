class App extends React.Component {
  state = {
    options: ["first draw", "second draw", "third draw"],
    option: null,
    value: "",
  };

  handleShowOption = () => {
    const index = Math.floor(Math.random() * this.state.options.length);
    this.setState({
      option: this.state.options[index],
    });
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleAddOption = () => {
    if (this.state.value === "") return alert("Write something");
    const options = [...this.state.options];
    console.log(options);
    options.push(this.state.value);
    this.setState({
      options: options,
      value: "",
    });
    alert(`New omen has been added. Quantity of omens is: ${options.length}`);
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <button onClick={this.handleShowOption}>Show omen</button>
          <br />
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleAddOption}>Add omen</button>
          {this.state.option ? <h1>{this.state.option}</h1> : null}
        </div>
      </React.Fragment>
    );
  }
}
