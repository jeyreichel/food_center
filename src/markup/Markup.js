import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Index1 from "./Pages/Index1";

import AboutUs from "./Pages/AbutUs";
import Faq from "./Pages/Faq";

import Location from "./Pages/Location";
import Contact from "./Pages/Contact";
import Copyright from "./Pages/Copyright";
import Privacy from "./Pages/Privacy";
import Condition from "./Pages/Condition";
import Disclaimer from "./Pages/Disclaimer";

import Barkery from "./Pages/Bakery";
import Dairy from "./Pages/Dairy";
import Deli from "./Pages/Deli";
import Gourmet from "./Pages/Gourmet";
import Grocery from "./Pages/Grocery";
import HotFood from "./Pages/HotFood";
import Meat from "./Pages/Meat";
import Liquor from "./Pages/Liquor";
import Produce from "./Pages/Produce";

class Markup extends Component {
  render() {
    return (
      <BrowserRouter basename="/react">
        <Switch>
          <Route path="/" exact component={Index1} />

          <Route path="/about_us" exact component={AboutUs} />
          <Route path="/faq" exact component={Faq} />

          <Route path="/location" exact component={Location} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/copyright" exact component={Copyright} />
          <Route path="/privacy" exact component={Privacy} />
          <Route path="/term-condition" exact component={Condition} />
          <Route path="/disclaimer" exact component={Disclaimer} />

          <Route path="/bakery" exact component={Barkery} />
          <Route path="/dairy" exact component={Dairy} />
          <Route path="/deli" exact component={Deli} />
          <Route path="/gourmet" exact component={Gourmet} />
          <Route path="/grocery" exact component={Grocery} />
          <Route path="/hot-food" exact component={HotFood} />
          <Route path="/meat" exact component={Meat} />
          <Route path="/liquor" exact component={Liquor} />
          <Route path="/produce" exact component={Produce} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Markup;
