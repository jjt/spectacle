import React from "react/addons";

import Heading from './heading';

class Heading5 extends Heading {
  constructor(props) {
    super(props);
  }
}

Heading5.defaultProps = {
  ...Heading.defaultProps,
  size: 5
};

export default Heading5;
