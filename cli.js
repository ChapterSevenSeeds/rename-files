#!usr/bin/env node

const args = require('args-parser')(process.argv);

require('./index')(args.dir, args.search, args.replace);