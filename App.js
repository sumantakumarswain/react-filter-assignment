
import React from "react";
import axios from "axios"
import "./App.css"
import TableRow from "./tableRow";
import UsersDetails from "./usersDetails";

class App extends React.Component {
  state = {
    usersData: [],
    activeIndex: 2,
    filteredUser: [],
    filteredText: ""
  }

  componentDidMount() {
    axios.get("http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D")
      .then((res) => {
        console.log(res)
        this.setState({ usersData: res.data })
      })
  }

  changeActive = (index) => {
    this.setState({ activeIndex: index })
  }

  searchByFirstName = (e) => {
    var filteredText = e.target.value.toLowerCase()
    var filteredUser = this.state.usersData.filter((users, i) => {
      if (users.firstName.toLowerCase().includes(filteredText)) {
        return true
      }
    })

    this.setState({ filteredUser, filteredText , activeIndex : filteredUser.length - 1})
  }


  render() {
    return (
      <>
        <div id="overlay">
          <img src="./img/preloader.gif" alt="Preloader icon" />
        </div>

        <main>

          <div id="table-section">

            <form action="/">
              <img src='./img/search-icon.svg' alt="Search Icon" />
              <input type="text" placeholder="Enter something" name="search-box" id="search-box"
                onChange={(e) => { this.searchByFirstName(e) }} />
            </form>

            <div id="table-wrapper">

              <div id="table-headers">
                <table>
                  <thead>
                    <tr>
                      <th className="column1">Id</th>
                      <th className="column2">FirstName</th>
                      <th className="column3">LastName</th>
                      <th className="column4">Email</th>
                      <th className="column5">Phone</th>
                    </tr>
                  </thead>
                </table>
              </div>

              <div id="table-data">
                <table>
                  <tbody>
                    {this.state.filteredText.length > 0
                      ?
                      this.state.filteredUser.map((usersData, i) => {
                        return <TableRow
                          usersData={usersData}
                          activeIndex={this.state.activeIndex}
                          index={i}
                          changeActive={this.changeActive} />

                      })
                      :
                      this.state.usersData.map((usersData, i) => {
                        return <TableRow
                          usersData={usersData}
                          activeIndex={this.state.activeIndex}
                          index={i}
                          changeActive={this.changeActive} />

                      })
                    }

                  </tbody>
                </table>
              </div>

            </div>

          </div>

          <div id="info-wrapper">
            <h1>Details</h1>
            <p>Click on a table item to get detailed information</p>

            {
              this.state.filteredText.length > 0 ?

                this.state.filteredUser.length > 0 ?
                  <UsersDetails
                    activeUsersData={this.state.filteredUser[this.state.activeIndex]}
                  />
                : ""

              :
              this.state.usersData.length > 0 ?
                  <UsersDetails
                    activeUsersData={this.state.usersData[this.state.activeIndex]}
                  />
                : ""
            }
          </div>

        </main>

      </>
    )
  }
}


export default App;

