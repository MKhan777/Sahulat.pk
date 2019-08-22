import React, { Component } from "react";
import axios from "axios";
class Sample extends Component {
  constructor(props) {
    super(props);
    this.fetchData();
  }
  state = {
    arr: [
      {
        _id: "",
        Name: "",
        des: ""
      }
    ]
  };

  fetchData = e => {
    axios.get("http://localhost:5000/api/sampleApi/Akif").then(response => {
      console.log("Yha agya ho");
      this.setState({ arr: response.data });
    });
  };
  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { arr } = this.state;

    return (
      <React.Fragment>
        {arr.map(data => {
            const{_id ,Name,des}=arr;
          return <div><h1>{data._id}</h1>
          <h1>{data.Name}</h1>
          <h1>{data.des}</h1></div>;
        })}
      </React.Fragment>
    );
  }
}

export default Sample;
