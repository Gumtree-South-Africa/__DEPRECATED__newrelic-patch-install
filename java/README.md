# Add newrelic to java application

1. Disable puppet
2. Unzip newrelic-java-3.36.0.zip into /opt
3. Edit /opt/newrelic/newrelic.yml and make the following changes:
   - license_key: Add the license key
   - app_name: Add the app name to display in NR (i.e. bolt-backend-ix5)
   - proxy_host: proxy
   - proxy_port: 3128
4. Edit /etc/default/tomcat7multi.d/bapi and add `-javaagent:/opt/newrelic/newrelic.jar` to CATALINA_AOPTS
5. Restart the application
