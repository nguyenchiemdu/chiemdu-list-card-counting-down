import React from "react";
import "./TableUser.scss";

class TableUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: [
        { id: 1, firstName: "Phan", lastName: "Tuan", age: 22 },
        { id: 2, firstName: "Tung", lastName: "MTP", age: 30 },
      ],
      user: {},
      userForUpdate: {},
      isOpenUpdate: false,
    };
  }
  //   ADD(POST) UPDATE(PUT) DELETE(DELETE) GET
  // restful API

  handleChange = (e) => {
    this.setState({
      user: { ...this.state.user, [e.target.name]: e.target.value },
    });
  };
  handleChangeForUpdate = (e) => {
    this.setState({
      userForUpdate: {
        ...this.state.userForUpdate,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleAdd = () => {
    this.setState({
      listUser: [...this.state.listUser, this.state.user],
    });
  };
  handleUpdate = () => {
    this.setState({
      listUser: this.state.listUser.map((item) =>
        item.id === this.state.userForUpdate.id
          ? this.state.userForUpdate
          : item
      ),
      isOpenUpdate: false,
    });
  };
  handleClickUpdate = (item) => () => {
    this.setState({ isOpenUpdate: true, userForUpdate: item });
  };
  // DELETE
  handleDeleteItem = (id) => () => {
    this.setState({
      listUser: this.state.listUser.filter((item) => item.id !== id),
    });
  };
  render() {
    const { userForUpdate } = this.state;
    return (
      <>
        <div className="table-user">
          <div className="ctn-add">
            <p>Phần thêm dữ liệu</p>
            <input
              onChange={this.handleChange}
              placeholder="Firstname"
              name="firstName"
            />
            <input
              onChange={this.handleChange}
              placeholder="Lastname"
              name="lastName"
            />
            <input onChange={this.handleChange} placeholder="Age" name="age" />
            <button onClick={this.handleAdd}>Add</button>
          </div>
          {this.state.isOpenUpdate === false ? null : (
            <div className="ctn-update">
              <p>Phần cập nhật dữ liệu</p>
              <input
                onChange={this.handleChangeForUpdate}
                placeholder="Firstname"
                name="firstName"
                value={userForUpdate.firstName}
              />
              <input
                onChange={this.handleChangeForUpdate}
                placeholder="Lastname"
                name="lastName"
                value={userForUpdate.lastName}
              />
              <input
                onChange={this.handleChangeForUpdate}
                placeholder="Age"
                name="age"
                value={userForUpdate.age}
              />
              <button onClick={this.handleUpdate}>Update</button>
            </div>
          )}

          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <th>#</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
              {this.state.listUser.map((item, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.age}</td>
                  <td>
                    <button onClick={this.handleClickUpdate(item)}>
                      Update
                    </button>
                    <button onClick={this.handleDeleteItem(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default TableUser;
