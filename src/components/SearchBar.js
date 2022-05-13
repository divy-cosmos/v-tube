import React from "react";

export default class SearchBar extends React.Component {
  state = { searchKey: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.searchKey);
  };
  render() {
    // console.log(this.state.searchKey);
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <input
            type="text"
            value={this.state.searchKey}
            onChange={(e) => {
              this.setState({ searchKey: e.target.value });
              // console.log('changing text');
            }}
            placeholder="Search for vedios..."
          />
        </form>
      </div>
    );
  }
}
