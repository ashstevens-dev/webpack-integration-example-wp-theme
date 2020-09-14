// import any scss files
import './assets/styles/styles.scss';

// import any js files
import './assets/scripts/themename-scripts';

// incorporate Font Awesome and config it (https://fontawesome.com/how-to-use/javascript-api/setup/getting-started)
import { config, library, findIconDefinition, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
config.keepOriginalSource = false
library.add(fas, far, fab)
dom.i2svg()
const css = dom.css()
dom.insertCss(css)