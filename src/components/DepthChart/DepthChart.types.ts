export interface DepthChartProps extends React.HTMLAttributes<HTMLDivElement> {
  buys: [string | number, string | number][];
  sells: [string | number, string | number][];
}
