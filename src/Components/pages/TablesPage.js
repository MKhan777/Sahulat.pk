import React from "react";
import { MDBDataTable } from "mdbreact";

class TablesPage extends React.Component {
  state = {  }
  render() { 
    const { products } = this.props;
    const data = {
      columns: [
        {
          label: "ID",
          field: "_id",
          sort: "asc",
          width: 100
        },
        {
          label: "Title",
          field: "title",
          sort: "asc",
          width: 300
        },
        {
          label: "Value",
          field: "value",
          sort: "asc",
          width: 30
        },
        
        {
          label: "Amount",
          field: "amount",
          sort: "asc",
          width: 50
        },
        {
          label: "Price",
          field: "price",
          sort: "asc",
          width: 200
        },
        {
          label: "Category",
          field: "category",
          sort: "asc",
          width: 100
        },
        {
          label: "Sub Category",
          field: "sub_category",
          sort: "asc",
          width: 100
        },
        {
          label: "Image Url",
          field: "imageUrl",
          sort: "asc",
          width: 100
        },
      ],
      rows: products
    };
  
    return (
      <React.Fragment>
        <h1 className="featured-heading-text text-center sigmar">
          Products Table
        </h1>
        <MDBDataTable striped hover data={data} />
      </React.Fragment>
    );
  }
}
 
export default TablesPage;
