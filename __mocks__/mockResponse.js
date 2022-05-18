const generateResponse = () => ({
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
  request: {},
  data: {
    'destination_addresses': [
      'Gøteborggata 32, 0566 Oslo, Norge'
    ],
    'origin_addresses': [
      'Hemsilbreidda 16, 3560 Hemsedal, Norge'
    ],
    'rows': [
      {
        'elements': [
          {
            'distance': {
              'text': '203 km',
              'value': 203466
            },
            'duration': {
              'text': '3 timer 0 min',
              'value': 10782
            },
            'duration_in_traffic': {
              'text': '2 timer 48 min',
              'value': 10064
            },
            'status': 'OK'
          }
        ]
      }
    ],
    'status': 'OK'
  }
})

module.exports = { generateResponse }

