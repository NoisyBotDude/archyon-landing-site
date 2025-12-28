/**
 * Converts a Google Drive view URL to a direct image URL
 * @param viewUrl - Google Drive view URL (e.g., https://drive.google.com/file/d/FILE_ID/view?usp=drive_link)
 * @returns Direct image URL for embedding
 */
export const convertGoogleDriveUrl = (viewUrl: string): string => {
  // Extract file ID from various Google Drive URL formats
  const patterns = [
    /\/file\/d\/([a-zA-Z0-9_-]+)/, // Standard format
    /id=([a-zA-Z0-9_-]+)/, // Alternative format
  ]

  for (const pattern of patterns) {
    const match = viewUrl.match(pattern)
    if (match && match[1]) {
      const fileId = match[1]
      // Use thumbnail API which is most reliable for publicly shared files
      // This format works for images that are set to "Anyone with the link can view"
      return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1920-h1080`
    }
  }

  // If no pattern matches, return original URL
  return viewUrl
}

/**
 * Converts multiple Google Drive URLs
 */
export const convertGoogleDriveUrls = (urls: string[]): string[] => {
  return urls.map(convertGoogleDriveUrl)
}

