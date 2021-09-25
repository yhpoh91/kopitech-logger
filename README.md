# Kopitech Logger
A logger to be used with Kopitech Services

## Installation
Using `npm`:
```npm install --save kopitech-logger```

## Usage
```
const { L } = require('kopitech-logger')('My Service');

L.debug('This is a debug log');
L.info('This is an info log');
L.warn('This is a warning log');
L.error('This is an error log');
```

## Environment Variable
`LOGGING_ENABLED` (BOOLEAN default: true) - Whether authentication should be enabled

`LOGGING_LEVEL` (BOOLEAN default: info) - Log level to be used (debug, info, warn, error)


## Contributions
Contributions to the Library are welcomed.
