import React from 'react';
import { DepthChartProps } from './DepthChart.types';

const DepthChart = ({ buys, sells, ...rest }: DepthChartProps) => {
  return (
    <div {...rest}>
      <h1>Welcome to react depth chart</h1>
    </div>
  );
};

export default DepthChart;
