import React from "react/addons";

import Heading from './heading';

class Heading1 extends Heading {
  constructor(props) {
    super(props);
  }
}

Heading1.defaultProps = {
  ...Heading.defaultProps,
  size: 1
};

export default Heading1;
