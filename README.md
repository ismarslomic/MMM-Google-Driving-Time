# MMM-Google-Driving-Time

This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/).

> A short, one sentence, clear description what it does (duh!)

## Example screenshot

- A high quality screenshot of your working module

## External APIs in use

This module is
using the [Google Matrix API (advanced)](https://developers.google.com/maps/documentation/distance-matrix)
which provides travel distance and time for a matrix of origins and destinations.

You will need to
provide [Google API key](https://developers.google.com/maps/documentation/distance-matrix/get-api-key)
in order to use this module
and [API usage is billed](https://developers.google.com/maps/documentation/distance-matrix/usage-and-billing#distance-matrix-advanced)
by Google (look for billing of _SKU: Distance Matrix Advanced_).

## Installing the module

1. Navigate to the `MagicMirror/modules` directory and execute the following command

   ```sh
   git clone https://github.com/ismarslomic/MMM-Google-Driving-Time.git
   ```

2. Change into the MMM-Google-Driving-Time module folder and install runtime dependencies with
   ```sh
   cd MMM-Jast
   npm install --only=production
   ```

## Using the module

To use this module, add the following configuration block to the modules array in
the `config/config.js` file:

```js
var config = {
  modules: [
    {
      module: 'MMM-Google-Driving-Time',
      config: {
        // See below for configurable options
      }
    }
  ]
}
```

## Configuration options

| Property                  | Type              | Required | Default                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|---------------------------|-------------------|:--------:|--------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `lastUpdateFormat`        | `string`          |    ︎     | `HH:mm`                        | <todo>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `updateIntervalInSeconds` | `string`          |          | `5`                            | <todo>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `origin`                  | `string`          |    ✔     |                                | See [origins](https://developers.google.com/maps/documentation/distance-matrix/distance-matrix#origins).<br/>If you supply **Place ID** you must prefix it with `place_id:`. See also [Find the ID of a particular place](https://developers.google.com/maps/documentation/places/web-service/place-id#find-id).<br/>If you supply **Plus code** _do not_ format (url-escape) the value as described in official docs from Google.<br/><br/>Note! Currently this module supports only one origin.                |
| `destination`             | `string`          |    ✔     |                                | See [destinations](https://developers.google.com/maps/documentation/distance-matrix/distance-matrix#destinations).<br/>If you supply **Place ID** you must prefix it with `place_id:`. See also [Find the ID of a particular place](https://developers.google.com/maps/documentation/places/web-service/place-id#find-id).<br/>If you supply **Plus code** _do not_ format (url-escape) the value as described in official docs from Google.<br/><br/>Note! Currently this module supports only one destination. |
| `language`                | `string`          |    ✔     |                                | See [language](https://developers.google.com/maps/documentation/distance-matrix/distance-matrix#language)                                                                                                                                                                                                                                                                                                                                                                                                        |
| `trafficModel`            | `string`          |          | `best_guess`                   | See [traffic_model](https://developers.google.com/maps/documentation/distance-matrix/distance-matrix#traffic_model)                                                                                                                                                                                                                                                                                                                                                                                              |
| `apiKey`                  | `string`          |    ✔     |                                | See [Creating API Keys](https://developers.google.com/maps/documentation/distance-matrix/get-api-key#creating-api-keys)                                                                                                                                                                                                                                                                                                                                                                                          |
| `departureDate`           | `DepartureDay`    |          | `TODAY`                        | Which day to retrieve departure times for, valid values: `TODAY` or `TOMORROW`.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `departureTimes`          | `DepartureTime[]` |          | `[{ hours: 13, minutes: 30 }]` | List of departure times (hours and minutes) for `DepartureDay`. Be aware that there will be performed one service call to Google Matrix API for each departure time, so you should limit this list to max 5 elements.                                                                                                                                                                                                                                                                                            |

## Contribution and Development

This module is written in [TypeScript](https://www.typescriptlang.org/) and compiled
with [Rollup](https://rollupjs.org/guide/en/)
. [Nunjucks](https://mozilla.github.io/nunjucks/templating.html) is used as templating language.

The source files are located in the [src](./src) folder.

Compile target files with `npm run build`.

Tests are run with jest `npm test` or `npm run test:coverage` with coverage report.

Contribution for this module is welcome!
