import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { GoogleAuthClass } from 'src/utils/google-auth';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private googleAuth: GoogleAuthClass) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const token = context.switchToHttp().getRequest().headers?.[
      'authorization'
    ];
    if (token) {
      const valid = await this.googleAuth.verifyIdToken({
        idToken: token,
        audience: process.env.NEST_GOOGLE_CLIENT_ID,
      });
      if (valid) return true;
    }
    return false;
  }
}
