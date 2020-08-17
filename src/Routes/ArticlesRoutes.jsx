import React from "react";
import { Switch, } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import { Articles } from "../Pages/Articles";
import ArticleView from "../Pages/Articles/ArticleView";
import ArticleView2 from "../Pages/Articles/ArticleView2";

const ArticlesRoutes = () => {
  return (
    <Switch>
      <ProtectedRoute exact path="/articles" component={Articles} />
      <ProtectedRoute
        path="/articles/:articleNo"
        component={ArticleView}
      />
    </Switch>
  );
};

export default ArticlesRoutes;
