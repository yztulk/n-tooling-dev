TODO:
- Remove db password from server/index.js [amazon].js
- Put db password in an environment variable and reference that from server/index.js.
- Create update api calls for records like account and jobs
- Catch errors from api and show back to user
- When node runs into an error (e.g. record insert to database fails), then node stops and has to be restarted. Node should continue running after errors.