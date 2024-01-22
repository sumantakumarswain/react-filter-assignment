import React from "react"

class TableRow extends React.Component {
    render() {
        return (
            <>
                <tr key={this.props.index} className={`data-row ${this.props.index == this.props.activeIndex ? "active" : ""}`}
                    onClick={() => { this.props.changeActive(this.props.index) }} >
                    <td className="column1">{this.props.usersData.id}</td>
                    <td className="column2">{this.props.usersData.firstName}</td>
                    <td className="column3">{this.props.usersData.lastName}</td>
                    <td className="column4">{this.props.usersData.email}</td>
                    <td className="column5">{this.props.usersData.phone}</td>
                </tr>

            </>
        )
    }
}

export default TableRow