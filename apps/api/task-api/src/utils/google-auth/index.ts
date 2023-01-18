import { OAuth2Client } from 'google-auth-library';

class GoogleAuthClass extends OAuth2Client {
  constructor() {
    super({ clientId: process.env.NEST_GOOGLE_CLIENT_ID });
  }
}

export { GoogleAuthClass };
