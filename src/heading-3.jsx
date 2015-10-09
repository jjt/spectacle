import React from "react/addons";

import Heading from './heading';

class Heading3 extends Heading {
  constructor(props) {
    super(props);
  }
}

Heading3.defaultProps = {
  ...Heading.defaultProps,
  size: 3
};

export default Heading3;
