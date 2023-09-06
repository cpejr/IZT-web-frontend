/* eslint-disable react/prop-types */
import React from 'react';

import Plot from 'react-plotly.js';

export default function ProfileAnalysisGraph({ data }) {
  if (!data || !data.retificationCenterlessDiagram) {
    return null;
  }

  const { x, y } = data.retificationCenterlessDiagram;

  return (
    <Plot
      data={[
        {
          x,
          y,
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
      style={{ width: '40%', height: '300px' }}
      useResizeHandler="true"
    />
  );
}
