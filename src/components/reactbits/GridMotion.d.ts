declare module "@components/reactbits/GridMotion" {
  import React from "react";
  interface GridMotionProps {
    items?: (string | React.ReactNode)[];
    gradientColor?: string;
  }
  const GridMotion: React.FC<GridMotionProps>;
  export default GridMotion;
}