import React from "react";
import "./TableUser.scss";

class TableUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: [],
      user: {},
      userForUpdate: {},
      isOpenUpdate: false,
      loading: false,
    };
  }

  // GET
  componentDidMount() {
    this.setState({ loading: true });
    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        this.setState({ loading: false, listUser: result.data });
      });
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

  // POST
  handleAdd = () => {
    fetch("http://dummy.restapiexample.com/api/v1/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.user),
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        const { id, name, salary, age } = result.data;
        this.setState({
          listUser: [
            ...this.state.listUser,
            {
              id: id,
              employee_name: name,
              employee_salary: salary,
              employee_age: age,
              profile_image: "",
            },
          ],
        });
      });
  };

  // PUT
  handleUpdate = () => {
    // template string
    fetch(
      `http://dummy.restapiexample.com/api/v1/update/${this.state.userForUpdate.id}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.userForUpdate),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        if (result.status === "success") {
          const { id, name, salary, age } = this.state.userForUpdate;
          this.setState({
            listUser: this.state.listUser.map((item) =>
              item.id === this.state.userForUpdate.id
                ? {
                    id: id,
                    employee_name: name,
                    employee_salary: salary,
                    employee_age: age,
                    profile_image: "",
                  }
                : item
            ),
            isOpenUpdate: false,
          });
        }
      });
  };
  handleClickUpdate = (item) => () => {
    const {
      id,
      employee_name,
      employee_salary,
      employee_age,
      profile_image,
    } = item;
    this.setState({
      isOpenUpdate: true,
      userForUpdate: {
        id,
        name: employee_name,
        salary: employee_salary,
        age: employee_age,
        profile_image,
      },
    });
  };

  // DELETE
  handleDeleteItem = (id) => () => {
    fetch(`http://dummy.restapiexample.com/api/v1/delete/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        this.setState({
          listUser: this.state.listUser.filter((item) => item.id !== id),
        });
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
              placeholder="name"
              name="name"
            />
            <input
              onChange={this.handleChange}
              placeholder="salary"
              name="salary"
            />
            <input onChange={this.handleChange} placeholder="Age" name="age" />
            <button onClick={this.handleAdd}>Add</button>
          </div>
          {this.state.isOpenUpdate === false ? null : (
            <div className="ctn-update">
              <p>Phần cập nhật dữ liệu</p>
              <input
                onChange={this.handleChangeForUpdate}
                placeholder="name"
                name="name"
                value={userForUpdate.name}
              />
              <input
                onChange={this.handleChangeForUpdate}
                placeholder="salary"
                name="salary"
                value={userForUpdate.salary}
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
                {/* <th>#</th> */}
                <th>id</th>
                <th>employee_age</th>
                <th>employee_name</th>
                <th>employee_salary</th>
                <th>Actions</th>
              </tr>
              {this.state.loading === false ? (
                this.state.listUser.map((item, idx) => (
                  <tr key={idx}>
                    {/* <td>{idx + 1}</td> */}
                    <td>{item.id}</td>
                    <td>{item.employee_age}</td>
                    <td>{item.employee_name}</td>
                    <td>{item.employee_salary}</td>
                    <td>
                      <button onClick={this.handleClickUpdate(item)}>
                        Update
                      </button>
                      <button onClick={this.handleDeleteItem(item.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr> Loading...</tr>
              )}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default TableUser;
