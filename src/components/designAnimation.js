import React from "react";

import { DesignAnimationArc } from "./designAnimationArc";
import { DesignAnimationHandle } from "./designAnimationHandle";
import { DesignAnimationPoints } from "./designAnimationPoints";

export function DesignAnimation() {
  return (
    <div className="designAnimation h-100">
      <div className="text-center position-relative h-100">
        <DesignAnimationArc />
        <div className="fauxVector position-absolute h-100 w-100 t-0">
          <DesignAnimationHandle />
          <DesignAnimationPoints />
        </div>
      </div>
    </div>
  );
}
