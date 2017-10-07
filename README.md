TODO:
- Remove db password from server/index.js [amazon].js
- Put db password in an environment variable and reference that from server/index.js.
- Create update api calls for records like account and jobs
- Catch errors from api and show back to user
- When node runs into an error (e.g. record insert to database fails), then node stops and has to be restarted. Node should continue running after errors.
- The database function func_job_roll_up_financials() also updates consumed, invoiced and claimed even if they are blank. Should put an if statement in the function to only do the update if the query returned a result.
- roll ups to fund category, fund source and plan

Find out:
- How to deploy database changes to production


Production:
- install a monitoring tool (pm2)
- install a reverse proxy
- use https instead of http
- run application in cluster mode