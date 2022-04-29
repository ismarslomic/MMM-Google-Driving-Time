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

| Property                  | Type     | Required | Default    | Description                                                                                                                                                                  |
|---------------------------|----------|:--------:|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `lastUpdateFormat`        | `string` |    ︎     | en-GB      | <todo>                                                                                                                                                                       |
| `updateIntervalInSeconds` | `string` |          | 5          | <todo>                                                                                                                                                                       |
| `origin`                  | `string` |    ✔     |            | See [origins](https://developers.google.com/maps/documentation/distance-matrix/distance-matrix#origins). Note! Currently this module supports only one origin.               |
| `destination`             | `string` |    ✔     |            | See [destinations](https://developers.google.com/maps/documentation/distance-matrix/distance-matrix#destinations) Note! Currently this module supports only one destination. |
| `language`                | `string` |    ✔     |            | See [language](https://developers.google.com/maps/documentation/distance-matrix/distance-matrix#language)                                                                    |
| `trafficMode`             | `string` |    ✔     | best_guess | See [traffic_mode](https://developers.google.com/maps/documentation/distance-matrix/distance-matrix#traffic_model)                                                           |
| `apiKey`                  | `string` |    ✔     |            | See [Creating API Keys](https://developers.google.com/maps/documentation/distance-matrix/get-api-key#creating-api-keys)                                                      |

## Contribution and Development

This module is written in [TypeScript](https://www.typescriptlang.org/) and compiled
with [Rollup](https://rollupjs.org/guide/en/)
. [Nunjucks](https://mozilla.github.io/nunjucks/templating.html) is used as templating language.

The source files are located in the [src](./src) folder.

Compile target files with `npm run build`.

Contribution for this module is welcome!
