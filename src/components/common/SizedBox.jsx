// SizedBox component creates a div with given sizes

import React from "react";

export default function SizedBox({ width = 0, height = 0 }) {
  return <div style={{ width: width, height: height }}></div>;
}
