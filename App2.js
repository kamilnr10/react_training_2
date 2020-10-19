const ListItems = (props) => {
  const items = props.toDoItems;
  const listItems = items.map((item) => {
    return (
      <div id={item.id}>
        <li>
          {item.text}
          <button onClick={() => props.delete(item.id)}>Delete</button>
        </li>
      </div>
    );
  });
  return <div>{listItems}</div>;
};

class App2 extends React.Component {
  state = {
    toDoItems: [],
    currentItem: {
      id: "",
      text: "",
    },
  };

  handleInputChange = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        id: Date.now(),
      },
    });
    // console.log(this.state.currentItem.text);
  };

  addToDoItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    // console.log(newItem);
    if (newItem.text !== "") {
      const newItems = [...this.state.toDoItems, newItem];
      this.setState({
        toDoItems: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
    console.log(this.state.toDoItems);
    // const toDoItems = [...this.state.toDoItems];
    // toDoItems.push(this.state.value);
    // this.setState({
    //   value: "",
    //   toDoItems: toDoItems,
    // });
    // console.log(this.state.toDoItems);
  };

  handleDelete = (id) => {
    console.log(this, id);
    // console.log(toDoItems);
    let items = [...this.state.toDoItems];
    console.log(items);

    items = items.filter((item) => id !== item.id);
    this.setState({
      toDoItems: items,
    });
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <input
            type="text"
            value={this.state.currentItem.text}
            onChange={this.handleInputChange}
          />
          <button onClick={this.addToDoItem}>Dodaj</button>
        </div>
        <ListItems
          toDoItems={this.state.toDoItems}
          delete={this.handleDelete}
        />
        {/* <ul>
          {this.state.toDoItems.map((item) => (
            <Item text={item} />
          ))}
        </ul> */}
      </React.Fragment>
    );
  }
}
