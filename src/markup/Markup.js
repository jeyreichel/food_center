import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Index1 from "./Pages/Index1";

import Store from "./Pages/Store";
import Ourservices from "./Pages/Ourservices";
import Faq from "./Pages/Faq";

import Ourmenustyle1 from "./Pages/Ourmenustyle1";
import Ourmenustyle2 from "./Pages/Ourmenustyle2";
import Ourmenustyle3 from "./Pages/Ourmenustyle3";
import Ourmenustyle4 from "./Pages/Ourmenustyle4";

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

          <Route path="/store" exact component={Store} />
          <Route path="/our-services" exact component={Ourservices} />
          <Route path="/faq" exact component={Faq} />

          <Route path="/our-menu-1" exact component={Ourmenustyle1} />
          <Route path="/our-menu-2" exact component={Ourmenustyle2} />
          <Route path="/our-menu-3" exact component={Ourmenustyle3} />
          <Route path="/our-menu-4" exact component={Ourmenustyle4} />

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
