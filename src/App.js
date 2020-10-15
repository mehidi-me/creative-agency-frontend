import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./Componets/Login/Login";
import Home from "./pages/Home";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import StorageIcon from "@material-ui/icons/Storage";
import RateReviewIcon from "@material-ui/icons/RateReview";
import Sidbar from "./Componets/Dashborad/Sidbar";
import OrderForm from "./Componets/Dashborad/OrderForm";
import ServiceList from "./Componets/Dashborad/ServiceList";
import Review from "./Componets/Dashborad/Review";
import ClientPrivate from "./Private/ClientPrivate";
import AdminPrivate from "./Private/AdminPrivate";
import ServiceAll from "./Componets/Dashborad/ServiceAll";
import ServiceAdd from "./Componets/Dashborad/ServiceAdd";
import MakeAdmin from "./Componets/Dashborad/MakeAdmin";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Poppins",
    subtitle1: {
      fontSize: "16px",
    },
    h2: {
      fontWeight: "600",
    },
    h3: {
      fontWeight: "600",
    },
    h5: {
      fontWeight: "600",
    },
    h6: {
      fontWeight: "600",
    },
  },
  palette: {
    primary: {
      main: "#FBD062",
    },
    secondary: {
      main: "#111430",
    },
  },
  text: {
    primary: "#111430",
  },
});
function App() {
  const sidbarClient = [
    {
      id: 1,
      icon: <LocalGroceryStoreIcon />,
      item: "Order",
      path: "/order"
    },
    {
      id: 2,
      icon: <StorageIcon />,
      item: "Service list",
      path: "/servicelist"
    },
    {
      id: 3,
      icon: <RateReviewIcon />,
      item: "Review",
      path: "/review"
    },
  ];

  const sidbarAdmin = [
    {
      id: 1,
      icon: <LocalGroceryStoreIcon />,
      item: "All Service",
      path: "/serviceall"
    },
    {
      id: 2,
      icon: <StorageIcon />,
      item: "Add Service",
      path: "/serviceadd"
    },
    {
      id: 3,
      icon: <RateReviewIcon />,
      item: "Make Admin",
      path: "/makeadmin"
    },
  ];
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            {/* <CssBaseline /> */}
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/login">
              <Login></Login>
            </Route>



            <ClientPrivate exact path="/order">
              <Sidbar title="Order" sidbar={sidbarClient}></Sidbar>
              <OrderForm></OrderForm>
            </ClientPrivate>

            <ClientPrivate exact path="/servicelist">
              <Sidbar title="Service List" sidbar={sidbarClient}></Sidbar>
              <ServiceList></ServiceList>
            </ClientPrivate>

            <ClientPrivate exact path="/review">
              <Sidbar title="Review" sidbar={sidbarClient}></Sidbar>
              <Review></Review>
            </ClientPrivate>





            <AdminPrivate exact path="/serviceall">
              <Sidbar title="All Service" sidbar={sidbarAdmin}></Sidbar>
              <ServiceAll></ServiceAll>
            </AdminPrivate>

            <AdminPrivate exact path="/serviceadd">
              <Sidbar title="Add Service" sidbar={sidbarAdmin}></Sidbar>
              <ServiceAdd></ServiceAdd>
            </AdminPrivate>

            <AdminPrivate exact path="/makeadmin">
              <Sidbar title="Make Admin" sidbar={sidbarAdmin}></Sidbar>
              <MakeAdmin></MakeAdmin>
            </AdminPrivate>

          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
