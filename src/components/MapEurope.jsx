import React from 'react';
import Highlight from 'highcharts';
import ReactHighmaps from 'react-highcharts/ReactHighmaps';
import map from '../mapdata/world';

class MapEurope extends React.Component {
  config = {
    title: {
      text: 'Map of many countries',
    },

    legend: {
      enabled: false,
    },

    plotOptions: {
      map: {
        mapData: map,
      },
    },

    series: [
      { },
    ],
  };
  render() {
    return <ReactHighmaps config={this.config} />;
  }
}

export default MapEurope;
