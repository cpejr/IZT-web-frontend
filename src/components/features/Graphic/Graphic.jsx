import React from 'react';

import Plot from 'react-plotly.js';

export default function Graphic() {
  return (
    <Plot
      data={[
        {
          z: [
            [10, 10.625, 12.5, 15.625, 20],
            [5.625, 6.25, 8.125, 11.25, 15.625],
            [2.5, 3.125, 5, 8.125, 12.5],
            [0.625, 1.25, 3.125, 6.25, 10.625],
            [0, 0.625, 2.5, 5.625, 10],
          ],
          type: 'contour',
          colorscale: 'Jet',
        },
      ]}
      layout={{ autosize: true, title: 'Gráfico IZT' }}
      style={{ width: '100%', height: '100%' }}
      useResizeHandler="true"
    />
  );
}
