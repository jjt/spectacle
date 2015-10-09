import React from "react/addons";

import Heading from './heading';

class Heading6 extends Heading {
  constructor(props) {
    super(props);
  }
}

Heading6.defaultProps = {
  ...Heading.defaultProps,
  size: 6
};

export default Heading6;
