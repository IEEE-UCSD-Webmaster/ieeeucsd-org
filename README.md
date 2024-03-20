# IEEE @ UCSD Website

## Deployment

This site is automatically deployed to netlify. Pushing to the `main` branch will trigger a rebuild and deploy.

## Contributing

Please create a new branch for development (i.e. `[NAME]-dev`). Pushing directly to main is not advised, as changes will go straight into production. Once you are ready to merge your changes, create a pull request and request a review from a webmaster.

### Testing

To build the site, run `pnpm build`.

To view the site on your local network, run `pnpm dev`. View the site at [localhost:4321](http://localhost:4321).

The site will automatically rebuild on changes as long as the development server is running.

### ENV Variables

Create a `.env` file in the root directory of the project. This file should contain the following variables:

-   CALENDAR_API_KEY
-   PUBLIC_DISCORD_WEBHOOK_LINK
-   PUBLIC_SLACK_WEBHOOK_LINK

If you do not include this in the .env file, the site will give you an error.
