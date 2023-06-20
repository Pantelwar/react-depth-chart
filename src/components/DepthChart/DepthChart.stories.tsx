import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import DepthChart from './DepthChart';

const meta: Meta<typeof DepthChart> = {
  component: DepthChart,
  title: 'DepthChart',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DepthChart>;

const dummyBuysOneDigit: NonNullable<Story['args']>['buys'] = [
  ['2.20', '1'],
  ['2.19', '1'],
  ['2.13', '1'],
  ['2.12', '1'],
  ['2.04', '1'],
  ['2.02', '1'],
  ['2.01', '1'],
  ['1.98', '1'],
  ['1.90', '1'],
];

const dummySellOneDigit: NonNullable<Story['args']>['sells'] = [
  ['2.25', '1'],
  ['2.27', '1'],
  ['2.29', '1'],
  ['2.30', '1'],
  ['2.34', '1'],
  ['2.38', '1'],
  ['2.40', '1'],
];

export const NoData: Story = (args) => (
  <DepthChart data-testid='DepthChart-root' {...args} />
);

NoData.args = {
  buys: [],
  sells: [],
};

export const OnlyOneBuy: Story = (args) => (
  <DepthChart data-testid='DepthChart-root' {...args} />
);

OnlyOneBuy.args = {
  buys: dummyBuysOneDigit.slice(0, 1),
  sells: [],
};

export const OnlyOneSell: Story = (args) => (
  <DepthChart data-testid='DepthChart-root' {...args} />
);

OnlyOneSell.args = {
  buys: [],
  sells: dummySellOneDigit.slice(0, 1),
};
