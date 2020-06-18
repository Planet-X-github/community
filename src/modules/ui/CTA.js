import React from "react";
import { Card } from "theme-ui";

const CTA = ({ children, ...otherProps }) => (
  <Card
    {...otherProps}
    sx={{ p: "24px", borderColor: "primary", bg: "successAlt" }}
  >
    {children}
  </Card>
);

export default CTA;