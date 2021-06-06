const withPlugins = require('next-compose-plugins')
const withOptimizedImages = require('next-optimized-images')

module.exports = withPlugins(
  [
    [
      withOptimizedImages,
      {
        optimizeImagesInDev: true,
        responsive: {
          adapter: require('responsive-loader/sharp'),
        },
      },
    ],
  ],
  {
    future: {
      webpack5: true,
    },
  }
)
