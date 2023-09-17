# 💪 WODaboard 🏋️

"Workout Of the Day" on Vestaboard 

```
touch .env
```

# Create a Vestaboard Installable/Subscription

Use the web app's API tab to create an installable for your Vestaboard.
Once you have the subscription id, api key, and api secret, add them to your .env for running locally
or your GitHub action secrets for running with a GitHub workflow as a cron job. Be sure to keep your API keys secret and not commit them.

```
# .env
VB_SUB_ID=yoursubscriptionid
VB_SUB_KEY=yoursubscriptionapikey
VB_SUB_SECRET=yoursubscriptionapisecret
```

```
# send a WOD to your Vestaboard
bun run index.ts
```

You can find more information on Vestaboard subscriptions at https://docs.vestaboard.com. Happy hacking!
