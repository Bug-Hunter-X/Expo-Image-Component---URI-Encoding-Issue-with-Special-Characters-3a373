This bug occurs when using the Expo `Image` component with a URI that contains special characters, such as spaces or accented characters.  The image fails to load, and no error is thrown. This is particularly problematic when using dynamic URIs, or URIs from a database that might not always be perfectly formatted.  The issue seems to stem from how Expo handles URI encoding internally.  While `encodeURI` is used, sometimes it's insufficient.

```javascript
<Image source={{ uri: 'https://example.com/image with spaces.jpg' }} style={{ width: 200, height: 200 }} />
```