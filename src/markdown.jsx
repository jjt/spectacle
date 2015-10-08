import React from "react/addons";
import MTRC from "markdown-to-react-components";

import {
  BlockQuote, Heading, Image, Link, List, ListItem, Quote, S, Text
} from "./spectacle";

// This is undefined??
// console.log(Heading)
// -> undefined

// MTRC instantiates components, so use this if we want to pass props
function component(component, boundProps = {}) {
  return React.createClass({
    render(){
      const props = {...this.props, ...boundProps};
      return React.createElement(component, {...props}, this.props.children);
    }
  });
}

// Spectacle requires a <Quote> inside a <BlockQuote>
class CombinedBlockQuote extends React.Component {
  render() {
    console.log(this.props.children);
    return <BlockQuote><Quote>{this.props.children}</Quote></BlockQuote>;
  }
}

export default class Markdown extends React.Component {
  componentWillMount() {
    // This has to be here because Heading, Link, etc are undefined prior
    MTRC.configure({
      a: Link,
      blockquote: CombinedBlockQuote,
      del: component(S, {type: 'strikethrough'}),
      em: component(S, {type: 'italic'}),
      h1: component(Heading, {size: 1}),
      h2: component(Heading, {size: 2}),
      h3: component(Heading, {size: 3}),
      h4: component(Heading, {size: 4}),
      h5: component(Heading, {size: 5}),
      h6: component(Heading, {size: 6}),
      img: Image,
      li: ListItem,
      p: Text,
      strong: component(S, {type: 'bold'}),
      ul: List
    });
  }

  render() {
    const content = typeof this.props.source !== "undefined" ?
      this.props.source :
      this.props.children;

    return (
      <div>
        {MTRC(content).tree}
      </div>
    );
  }
}

Markdown.propTypes = {
  children: React.PropTypes.node,
  source: React.PropTypes.string
}
