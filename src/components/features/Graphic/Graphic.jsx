/* eslint-disable react/prop-types */
import React from 'react';

import Plot from 'react-plotly.js';

export default function Graphic({ data }) {
  return (
    <Plot
      data={[
        {
          x: data.x,
          y: data.y,
          mode: 'lines',
          line: {
            color: 'black',
          },
        },
      ]}
      layout={{
        autosize: true,
        title: 'Gráfico IZT',
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
