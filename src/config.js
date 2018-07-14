const dev = {
  apiGateway: {
    REGION: 'us-west-2',
    URL: 'https://2r6qvp15dg.execute-api.us-west-2.amazonaws.com/dev',
  },
  cognito: {
    REGION: 'us-west-2',
    USER_POOL_ID: 'us-west-2_3tAAAV583',
    APP_CLIENT_ID: '4gl6jpndfbik6fp79rm0e8bolr',
    IDENTITY_POOL_ID: 'us-west-2:feb891fd-959b-4a7f-b49c-7bf4a3ba4508',
  },
};

const prod = {
  apiGateway: {
    REGION: 'us-west-2',
    URL: '',
  },
  cognito: {
    REGION: 'us-west-2',
    USER_POOL_ID: '',
    APP_CLIENT_ID: '',
    IDENTITY_POOL_ID: '',
  },
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};