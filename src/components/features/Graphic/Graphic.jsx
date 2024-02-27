/* eslint-disable react/prop-types */
import React from 'react';

import Plot from 'react-plotly.js';

import { TranslateText } from './translations';

export default function Graphic({ data, globalLanguage }) {
  const translations = TranslateText({ globalLanguage });

  return (
    <Plot
      data={[
        {
          x: data[0],
          y: data[1],
          mode: 'lines',
          line: {
            color: 'black',
          },
        },
      ]}
      layout={{
        autosize: true,
        title: translations.chart,
        xaxis: {
          title: 'X Axis',
        },
        yaxis: {
          title: 'Y Axis',
        },
      }}
      style={{ width: '100%', height: '100%' }}
      useResizeHandler="true"
    />
  );
}
