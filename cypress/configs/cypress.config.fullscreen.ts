import config from '../../cypress.config';

config.e2e = config.e2e ?? {};
config.e2e.viewportWidth = 1920;
config.e2e.viewportHeight = 1080;

export default config;