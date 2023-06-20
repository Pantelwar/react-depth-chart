/// <reference types="react" />
import React$1 from 'react';

interface DepthChartProps extends React.HTMLAttributes<HTMLDivElement> {
    buys: [string | number, string | number][];
    sells: [string | number, string | number][];
}

declare const DepthChart: ({ buys, sells, ...rest }: DepthChartProps) => React$1.JSX.Element;

export { DepthChart, DepthChartProps };
