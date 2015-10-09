import React from "react/addons";

import Heading from './heading';

class Heading2 extends Heading {
  constructor(props) {
    super(props);
  }
}

Heading2.defaultProps = {
  ...Heading.defaultProps,
  size: 2
};

export default Heading2;
