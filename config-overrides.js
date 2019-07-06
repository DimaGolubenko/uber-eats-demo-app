/* eslint-disable global-require */

const { override, addPostcssPlugins, disableEsLint } = require("customize-cra");

module.exports = override(
  disableEsLint(),
  addPostcssPlugins([
    require("postcss-preset-env")({
      stage: 0,
      features: {
        "custom-media-queries": {
          importFrom: [
            {
              customMedia: {
                "--xs": "(width <= 575px)",
                "--sm": "(width >= 576px) and (width <= 767px)",
                "--md": "(width >= 768px) and (width <= 991px)",
                "--lg": "(width >= 992px) and (width <= 1199px)",
                "--xl": "(width >= 1200px)"
              }
            }
          ]
        }
      }
    })
  ])
);
