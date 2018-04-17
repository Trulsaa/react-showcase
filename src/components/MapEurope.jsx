import React from 'react';
import Highlight from 'highcharts';
import ReactHighmaps from 'react-highcharts/ReactHighmaps';
import map from '../mapdata/europe';

class MapEurope extends React.Component {
  config = {
    chart: {
      spacingBottom: 20,
    },
    title: {
      text: 'Europe time zones',
    },

    legend: {
      enabled: true,
    },

    plotOptions: {
      map: {
        allAreas: false,
        joinBy: ['iso-a2', 'code'],
        dataLabels: {
          enabled: true,
          color: 'white',
          style: {
            fontWeight: 'bold',
          },
        },
        mapData: map,
        tooltip: {
          headerFormat: '',
          pointFormat: '{point.name}: <b>{series.name}</b>',
        },
      },
    },

    series: [
      {
        name: 'UTC',
        data: ['IE', 'IS', 'GB', 'PT'].map(code => ({ code })),
      },
      {
        name: 'UTC + 1',
        data: [
          'NO',
          'SE',
          'DK',
          'DE',
          'NL',
          'BE',
          'LU',
          'ES',
          'FR',
          'PL',
          'CZ',
          'AT',
          'CH',
          'LI',
          'SK',
          'HU',
          'SI',
          'IT',
          'SM',
          'HR',
          'BA',
          'YF',
          'ME',
          'AL',
          'MK',
        ].map(code => ({ code })),
      },
    ],
  };
  render() {
    return <ReactHighmaps config={this.config} />;
  }
}

export default MapEurope;
