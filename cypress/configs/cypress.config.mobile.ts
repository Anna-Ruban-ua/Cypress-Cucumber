import config from '../../cypress.config';

config.e2e = config.e2e ?? {};
config.e2e.viewportWidth = 390;
config.e2e.viewportHeight = 844;

export default config;