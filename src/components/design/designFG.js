import React from "react";

import { DesignFS } from "./designFS";

export function DesignFG(props) {
  return (
    <div
      id={props.id}
      className="fauxGlass position-absolute w-100 h-100"
      style={{ perspective: 800 }}
    >
      <DesignFS id={props.innerID} content={props.content} />
    </div>
  );
}
