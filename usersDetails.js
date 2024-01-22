import React from "react";

class UsersDetails extends React.Component {
    render() {
        return (
            <>
                <div id="info-content">
                    <div><b>User selected:</b> {`${this.props.activeUsersData.firstName}  ${this.props.activeUsersData.lastName} `}</div>
                    <div>
                        <b>Description: </b>
                        <textarea cols="50" rows="5" readOnly>
                            {this.props.activeUsersData.description}
                        </textarea>
                    </div>
                    <div><b>Address:</b> {this.props.activeUsersData.address.streetAddress}</div>
                    <div><b>City:</b>{this.props.activeUsersData.address.city}</div>
                    <div><b>State:</b> {this.props.activeUsersData.address.state}</div>
                    <div><b>Zip:</b> {this.props.activeUsersData.address.zip}</div>
                </div>
            </>
        )
    }
}
export default UsersDetails