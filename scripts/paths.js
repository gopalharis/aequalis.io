import CONFIG from '../package.json';
const PATHS = CONFIG.paths;
const VARS = CONFIG.vars;

export default {
  base: PATHS.app.base,
  output: PATHS.output.base,
  allHTML: `${PATHS.app.base}/**/*.html`,
  allPHP: `${PATHS.app.base}/**/*.php`,
  allVendorJS: `${PATHS.app.jsVendor}/**/*.js`,
  allSrcJS: `${PATHS.app.jsSrc}/**/*.js`,
  allFont: `${PATHS.app.font}/**/*`,
  allSCSS: `${PATHS.app.scss}/**/*`,
  allSVG: `${PATHS.app.svg}/**/*.svg`,
  allIMAGE: `${PATHS.app.img}/**/*`,
  svgOutput:`${PATHS.app.img}/sprite/`,
  scssRoot: PATHS.app.scss,
  scssSrc: `${PATHS.app.scss}/${VARS.scss}`,
  cssDevOutput: PATHS.app.css,
  cssProdOutput: PATHS.output.css,
  jsRoot: `${PATHS.app.jsSrc}/index.js`,
  jsDevOutput: PATHS.app.js,
  jsProdOutput: PATHS.output.js,
  imageOutput: PATHS.output.img,
  fontOutput: PATHS.output.font
};
