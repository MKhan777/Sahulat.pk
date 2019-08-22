import React, { Component } from "react";
class Tag extends Component {
  render() {
    const { brand } = this.props;
    return <img src={brand.url} alt="brand" className="tag-img"/>;
  }
}

export default Tag;
