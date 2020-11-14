import React from "react";
import { css } from "@emotion/core";
import DotLoader from "react-spinners/DotLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log('loader ', props.loading )
    this.state = {
      loading: props.loading 
    };
  }

  render() {
    return (
      <div className="sweet-loading">
        <DotLoader
          css={override}
          size={80}
          color={"#a66cd9"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default AwesomeComponent
