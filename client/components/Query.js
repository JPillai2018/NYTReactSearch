import React from "react";

class Query extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //State change handling
  handleChange(event) {
    //console.log("State Change!!!!");
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
    // console.log("Current State=" + newState);
  }
  //Submit Button handling. After submission clears the form
  handleSubmit(event) {
    event.preventDefault();
    // console.log("Processing the Submit button!");
    // console.log("Search String is= " + this.state.term);
    this.props.setTerm(this.state.term);
    this.setState({ term: "" });
  }
  //Rendering the Form
  //Submit the form to trigger the search
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search</h3>
        </div>

        <div className="panel-body">
        <div class="form-container">
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="term">Enter Search String</label>
              <input
                type="text"
                className="form-control"
                id="term"
                value={this.state.term}
                onChange={this.handleChange}
                required
              />
              <label htmlFor="startdate">Start Year (YYYY)</label>
              <input
                type="text"
                className="form-control"
                id="startdate"
                value={this.state.startdate}
                onChange={this.handleChange}
                required
              />      
              <label htmlFor="enddate">End Year (YYYY)</label>
              <input
                type="text"
                className="form-control"
                id="enddate"
                value={this.state.enddate}
                onChange={this.handleChange}
                required
              />                       
              <br />
              <button
                type="submit"
                className="btn btn-primary"
              >
                Search
              </button>
            </div>
          </form>        
        </div>

        </div>
      </div>
    );
  }
}

export default Query;
