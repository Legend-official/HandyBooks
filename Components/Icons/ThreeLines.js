import * as React from "react";

const SVGComponent = (props) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 1792 1792"
    width={props?.w? props?.w: "123.97px"}
    height={props?.h ? props?.h : "123.97px"}
    style={{
      enableBackground: "new 0 0 1792 1792",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <title>{"fiction"}</title>
    <path d="M1673.9,1363.2L1673.9,1363.2c0,52.3-42.4,94.3-94.3,94.3H212.7c-52.3,0-94.3-42.4-94.3-94.3l0,0 c0-52.3,42.4-94.3,94.3-94.3h1366.8C1631.5,1268.5,1673.9,1310.9,1673.9,1363.2z" />
    <path d="M1673.9,895.6L1673.9,895.6c0,52.3-42.4,94.3-94.3,94.3H213c-52.3,0-94.3-42.4-94.3-94.3l0,0c0-52.3,42.4-94.3,94.3-94.3 h1366.6C1631.5,800.8,1673.9,843.2,1673.9,895.6z" />
    <path d="M1673.9,427.9L1673.9,427.9c0,52.3-42.4,94.3-94.3,94.3H212.7c-52.3,0-94.3-42.4-94.3-94.3l0,0c0-52.3,42.4-94.3,94.3-94.3 h1366.8C1631.5,333.2,1673.9,375.6,1673.9,427.9z" />
  </svg>
);

export default SVGComponent;
