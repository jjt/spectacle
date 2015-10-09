import React from "react/addons";

import Heading from './heading';

class Heading4 extends Heading {
  constructor(props) {
    super(props);
  }
}

Heading4.defaultProps = {
  ...Heading.defaultProps,
  size: 4
};

export default Heading4;
