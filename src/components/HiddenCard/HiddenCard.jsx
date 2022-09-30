import React, { useState } from "react";

export const HiddenCard = (component, visiblity = false) => {
  const [visible, setVisiblity] = useState(() => visiblity);

  return [visible ? component : null, () => setVisiblity((v) => !v)];
};

export default HiddenCard;
