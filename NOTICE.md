# Notice changes to the original Novel project

## Key Changes:

- **Renamed to `@sergeysova/craft`**: A fresh identity to signify our unique approach.
- **Updated Dependencies**: To ensure you're working with the latest and most secure libraries.
- **Streamlined Default Editor Content**: Removed Novel-specific links for a cleaner user experience.
- **Disabled Specific Features**: Including the Image block and AI support, to be reintroduced as optional extensions.
- **Enabled Syntax Highlighting**: Replaced standard code block extension with another with lowlight support.
- **Reduced Bundle Size**: Decreased the bundle size from 639K to 126K for faster load times and better performance.
- **Minimized Dependencies**: Reduced the number of dependencies from 39 to 20 for easier maintenance and improved security.

## Removed:

- AI Support (will be introduced as an extension)
- Feedback Command
- Image Uploader (will be introduced as an extension)
- Integration with LocalStorage (easy to integrate on the user's side)
- `debouncedUpdate` (editor fully controlled)
- Vercel Analytics (you can use any analytics service for your own)
