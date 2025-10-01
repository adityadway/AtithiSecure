import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface ClarityEyeHideLineProps {
  width?: number;
  height?: number;
  color?: string;
}

const ClarityEyeHideLine: React.FC<ClarityEyeHideLineProps> = ({ 
  width = 20, 
  height = 20, 
  color = "rgba(188, 190, 192, 1)" 
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 5.25C7.5 5.25 3.75 8.25 2.25 12C3.75 15.75 7.5 18.75 12 18.75C16.5 18.75 20.25 15.75 21.75 12C20.25 8.25 16.5 5.25 12 5.25ZM12 16.5C9.75 16.5 7.5 14.25 7.5 12C7.5 9.75 9.75 7.5 12 7.5C14.25 7.5 16.5 9.75 16.5 12C16.5 14.25 14.25 16.5 12 16.5ZM12 9C10.5 9 9.75 10.5 9.75 12C9.75 13.5 10.5 15 12 15C13.5 15 14.25 13.5 14.25 12C14.25 10.5 13.5 9 12 9Z"
        fill={color}
      />
      <Path
        d="M3 3L21 21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default ClarityEyeHideLine;
