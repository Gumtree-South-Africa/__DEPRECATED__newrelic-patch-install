# Add newrelic to nodejs application

1. Unzip newrelic-nodejs.zip into /var/node/bolt-2dot0-frontend/node_modules
2. Copy newrelic.js into /var/node/bolt-2dot0-frontend
3. Edit /var/node/bolt-2dot0-frontend/newrelic.js to include the license key
4. Edit /var/node/bolt-2dot0-frontend/app.js and add `require('newrelic');` near the top of the file
5. Restart the application
