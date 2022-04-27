# MMM-Google-Driving-Time

This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/).

> A short, one sentence, clear description what it does (duh!)

## Screenshot
- A high quality screenshot of your working module

## External APIs in use
- What external API's it depends upon, including web links to those
- Whether the API/request require a key and the user limitations of those. (Is it free?)

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

## Configuring the module

To use this module, add the following configuration block to the modules array in the `config/config.js` file:
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

| Option           | Description
|----------------- |-----------
| `option1`        | *Required* DESCRIPTION HERE
| `option2`        | *Optional* DESCRIPTION HERE TOO <br><br>**Type:** `int`(milliseconds) <br>Default 60000 milliseconds (1 minute)

## Contribution and Development

This module is written in TypeScript and compiled with Rollup.  
The source files are located in the `/src` folder.
Compile target files with `npm run build`.

Contribution for this module is welcome!
