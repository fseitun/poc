# YouTube Share App (SKTP)

A simple Progressive Web App (PWA) that can receive shared YouTube videos and display the URL with "viva peron" added.

## How to Use

1. Install the app on your phone
2. Close the app
3. Go to YouTube and open a random video
4. Press the Share button on YouTube
5. Select this app from the share menu
6. The app will open with the YouTube URL plus "viva peron"

## Development

```bash
# Install dependencies
yarn

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

## Deployment

To deploy this app, you need to serve the `dist` directory with HTTPS enabled. You can use services like Netlify, Vercel, or GitHub Pages for easy deployment.

## Testing the Share Functionality

To test the share functionality locally:
1. Build the app (`yarn build`)
2. Serve the build directory with a local HTTPS server
3. Install the PWA on your device
4. Share a YouTube URL to the app
