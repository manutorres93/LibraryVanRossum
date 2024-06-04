import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { NO_SALES_HOURS } from 'src/decorators/time.decorator';

@Injectable()
export class SalesTimeGuard implements CanActivate {
  //reflector: any;

  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
   /*  const request = context.switchToHttp().getRequest();
    const currentHour = new Date().getHours();

    // Check if current time is between 6pm (18:00) and 6am (06:00)
    if (currentHour >= 18 || currentHour < 6) {
      throw new UnauthorizedException('Sales are not allowed between 6pm and 6am');
    }

    return true; */

    const noSalesHours = this.reflector.getAllAndOverride<boolean>(NO_SALES_HOURS,[
      context.getHandler(),
      context.getClass(),
    ]);
    if (!noSalesHours) {
      return true;
    }

    const currentHour = new Date().getHours();
    console.log(currentHour)
    // Check if current time is between 6pm (18:00) and 6am (06:00)
    if (currentHour >= 8 || currentHour < 6) {
      throw new UnauthorizedException('Sales are not allowed between 6pm and 6am');
    }

    return true;
  }
}
