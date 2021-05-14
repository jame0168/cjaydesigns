import React from "react";

import { DesignCT } from "./designCT";

export function DesignFS(props) {
  if (props.content) {
    return (
      <div id={props.id} className="fauxScreen position-absolute">
        <DesignCT />
      </div>
    );
  }
  return <div id={props.id} className="fauxScreen position-absolute" />;
}
