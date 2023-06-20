import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

import DepthChart from './DepthChart';

describe('Running Test for Depth Chart', () => {
  test('Check Depth Chart renders', () => {
    render(<DepthChart data-testid='DepthChart-root' buys={[]} sells={[]} />);
    expect(screen.getByTestId('DepthChart-root')).toBeTruthy();
  });
});
