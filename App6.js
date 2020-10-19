// const Person = (props) => {
//   return (
//     <li>
//       <span>{props.name}</span>
//       <button onClick={props.delete}>Usuń</button>
//     </li>
//   );
// };

const Person = (props) => {
  return (
    <li>
      <span>{props.name}</span>
      <button onClick={() => props.delete(props.name)}>Usuń</button>
    </li>
  );
};

class App2 extends React.Component {
  state = {
    people: [
      {
        id: 1,
        name: "Jan K.",
      },
      {
        id: 2,
        name: "Tom P.",
      },
      {
        id: 3,
        name: "Ana K.",
      },
    ],
  };

  // handleDelete = (id) => {
  //   console.log(this, id);
  //   const people = [...this.state.people];
  //   const index = people.findIndex((person) => person.id === id);
  //   console.log(index);
  //   people.splice(index, 1);
  //   console.log(people);
  //   this.setState({
  //     people: people,
  //   });
  // };

  handleDelete = (name) => {
    let people = Array.from(this.state.people);
    // let people = this.state.people.slice();
    people = people.filter((person) => name !== person.name);
    this.setState({
      people,
    });
  };

  render() {
    // const people = this.state.people.map((person) => (
    //   <Person
    //     key={person.id}
    //     name={person.name}
    //     delete={this.handleDelete.bind(this, person.id)}
    //   />
    // ));
    // const people = this.state.people.map((person) => (
    //   <Person
    //     key={person.id}
    //     name={person.name}
    //     delete={this.handleDelete.bind(this, person.name)}
    //   />
    // ));
    const people = this.state.people.map((person) => (
      <Person key={person.id} name={person.name} delete={this.handleDelete} />
    ));
    return (
      <React.Fragment>
        <ul>{people}</ul>
      </React.Fragment>
    );
  }
}
