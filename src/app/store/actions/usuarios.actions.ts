import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const cargarUsuarios = createAction('[Usuarios] Cargar Usuarios');

export const cargarUsuariosSuccess = createAction(
  '[Usuarios] Cargar Usuarios Success',
  props<{ usuarios: Array<Usuario> }>()
);

export const cargarUsuariosError = createAction(
  '[Usuarios] Cargar Usuarios Error',
  props<{ payload: any }>()
);
