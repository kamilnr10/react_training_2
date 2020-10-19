class App3 extends React.Component {
  state = {
    status: true,
  };

  componentDidMount() {
    // console.log("Aplikacja zamontowana");
  }

  componentDidUpdate() {
    // console.log("Aplikacja aktualizowana");
  }
  render() {
    // console.log("renderowanie aplikacji");
    return (
      <div>
        <button onClick={() => this.setState({ status: !this.state.status })}>
          Przełącz
        </button>
        <Child1 status={this.state.status} />
        {this.state.status && <Child2 />}
      </div>
    );
  }
}

class Child1 extends React.Component {
  componentDidMount() {
    // console.log("Child1 zamontowana");
  }

  componentDidUpdate() {
    // console.log("Child1 aktualizowana");
  }
  render() {
    return <div>{String(this.props.status)}</div>;
  }
}

class Child2 extends React.Component {
  componentDidMount() {
    console.log("Child2 zamontowana");
  }

  componentDidUpdate() {
    console.log("Child2 aktualizowana");
  }
  componentWillUnmount() {
    console.log("komponent odmontowany");
  }
  render() {
    return <div>Komponent Child2 zamontowany</div>;
  }
}
