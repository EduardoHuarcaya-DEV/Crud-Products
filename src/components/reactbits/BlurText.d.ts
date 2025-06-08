declare module "@components/reactbits/BlurText" {
    import React from "react";
    interface BlurTextProps {
      text: string;
      delay?: number;
      animateBy?: string;
      direction?: string;
      className?: string;
    }
    const BlurText: React.FC<BlurTextProps>;
    export default BlurText;
  }