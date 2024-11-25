import { CanActivateFn } from '@angular/router';

export const authorizationGuard: CanActivateFn = (route, state) => {
  //Implementar servicio de autenticación en backend
  return true;
};
