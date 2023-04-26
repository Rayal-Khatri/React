import React from "react";

class AddContact extends React.Component {
    render() {
        return (
            <div className="main">
                <h2>Add Contact</h2>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Enter Name"/>
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="text" className="form-control" placeholder="Contact Number"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }

}
export default AddContact