import PropTypes from 'prop-types';
import Plot from 'react-plotly.js';

export default function ProfileAnalysisGraph({ data }) {
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
      style={{ width: '100%', height: '300px' }}
      useResizeHandler="true"
    />
  );
}

ProfileAnalysisGraph.propTypes = {
  data: PropTypes.object.isRequired,
};
