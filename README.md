# 💪 WODaboard 🏋️

"Workout Of the Day" sent to a Vestaboard. This is an example of how you can use the Vestaboard developer API to send messages to your Vestaboard.

This Github Action workflow also posts the message to [workoutoftheday@mastodon.social](https://mastodon.social/@workoutoftheday).

⚠️ Disclaimer: These workouts are random and vary in intensity. I am not a personal trainer, so seek professional advice before following my dummy data.

# Create your own Vestaboard Installable/Subscription

Use the web app's API tab to create an installable for your Vestaboard.
Once you have the subscription id, api key, and api secret, add them to your .env for running locally
or your GitHub action secrets for running with a GitHub workflow as a cron job. Be sure to keep your API keys secret and not commit them.

```
# .env
VB_SUB_ID=yoursubscriptionid
VB_SUB_KEY=yoursubscriptionapikey
VB_SUB_SECRET=yoursubscriptionapisecret

# (optional to post to Mastodon)
MASTODON_ACCESS_TOKEN=
```

```
# send a WOD to your Vestaboard
bun install
bun run index.ts
```

You can find more information on Vestaboard subscriptions at https://docs.vestaboard.com. Happy hacking!

[Issue with delay on GitHub actions during peak traffic times](https://github.com/orgs/community/discussions/52477)
