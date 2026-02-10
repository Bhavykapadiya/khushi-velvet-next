export default function robots() {
  const baseUrl = 'https://khushivelvet.com'; // TODO: Replace with your actual domain

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
