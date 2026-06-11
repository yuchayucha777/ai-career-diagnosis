/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://ai-career-diagnosis.vercel.app',
  generateRobotsTxt: true,
  exclude: ['/api/*'],
}
