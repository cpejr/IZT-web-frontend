import PropTypes from 'prop-types';
import Plot from 'react-plotly.js';

export default function StabilityGraph({ data }) {
  return (
    <Plot
      data={[
        {
          x: data.x,
          y: data.y,
          z: data.z,
          type: 'contour',
          size: 2,
          marker: { color: 'red' },
        },
      ]}
      layout={{
        autosize: true,
        xaxis: {
          title: 'X Axis',
        },
        yaxis: {
          title: 'Y Axis',
        },
      }}
      style={{ width: '50rem', height: '300px' }}
      useResizeHandler="true"
    />
  );
}

StabilityGraph.propTypes = {
  data: PropTypes.object.isRequired,
};
