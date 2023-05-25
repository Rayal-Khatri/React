import React from "react";

class AddContact extends React.Component {
    state = {
        Name: "",
        Ph_No: "",
    }
    add = (e) => {
        e.preventDefault();
        if (this.state.Name === "" || this.state.Ph_No === "") {
            alert("All the fields are manditory!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ Name: "", Ph_No: "" })
    };
    
    render() {
        return (
            <div className="main">
                <h2>Add Contact</h2>
                <form onSubmit={this.add}>
                    <div className="form-group">
                        <label>Name is </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Name"
                            value={this.state.Name}
                            onChange={(e) => this.setState({ Name: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="text"
                            className="form-control"
                            placeholder="Contact Number"
                            value={this.state.Ph_No}
                            onChange={(e) => this.setState({ Ph_No: e.target.value })} />
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </div>
        )
    }

}
export default AddContact