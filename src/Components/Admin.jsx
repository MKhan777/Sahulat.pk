import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import TablesPage from "./pages/TablesPage";
import MapsPage from "./pages/MapsPage";
import NotFoundPage from "./pages/NotFoundPage";
import SideNavigation from "./sideNavigation";
import TopNavigation from "./topNavigation";
import Footer from "./FooterPage";
import AdminItems from "./AdminItems";
import AdminView from "./AdminView";
import '../CSS/admin_page.css'
import AddProduct from "./AddProduct";

class Admin extends Component {
  render() {
    const {products,refreshProducts}=this.props;
    return (
      <div className="flexible-content">
        <TopNavigation />
        <SideNavigation />
        <main id="content" className="p-5">
          <Switch>
            <Route exact path="/admin" component={DashboardPage} />
            <Route path="/admin/dashboard" component={DashboardPage} />
            <Route path="/admin/products/addProduct" render={props=>(
              <AddProduct
              {...props}
              refreshProducts={refreshProducts}
              />
            )} />
            <Route
              exact
              path="/admin/products"
              render={props => (
                <AdminItems
                  {...props}
                  products={products}
                />
              )}
            />
            <Route
              path="/admin/product/:id"
              render={props => (
                <AdminView
                  {...props}
                  products={products}
                  refreshProducts={refreshProducts}
                />
              )}
            />
            <Route path="/admin/profile" component={ProfilePage} />
            <Route
              path="/admin/tables"
              render={props => (
                <TablesPage
                  {...props}
                  products={products}
                />
              )}
            />
            <Route path="/admin/maps" component={MapsPage} />
            <Route path="/admin/404" component={NotFoundPage} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Admin;
