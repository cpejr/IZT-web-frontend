import PropTypes from 'prop-types';
import Plot from 'react-plotly.js';

import { TranslateText } from './translations';

export default function ProfileAnalysisGraph({ data, globalLanguage }) {
  const translations = TranslateText({ globalLanguage });

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
        title: translations.chart,
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
  globalLanguage: PropTypes.string.isRequired,
};
