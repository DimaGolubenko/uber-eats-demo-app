import React from "react";

const Restaurant = ({ match }) => {
  return <div>Restaurant detailed {match.params.id}</div>;
};

export default Restaurant;
