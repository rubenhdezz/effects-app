import { createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { cargarUsuarios, cargarUsuariosSuccess, cargarUsuariosError } from '../actions';

export interface UsuariosState {
    users: Array<Usuario>,
    loaded: boolean,
    loading: boolean,
    error: any
}

export const usuariosInitialState: UsuariosState = {
    users: [],
    loaded: false,
    loading: false,
    error: undefined
}

const _usuariosReducer = createReducer(usuariosInitialState,

    on(cargarUsuarios, state => ({ ...state, loading: true})),

    on(cargarUsuariosSuccess, (state, { usuarios }) => ({
        ...state,
        loading: false,
        loaded: true,
        users: [ ...[usuarios] ]
    })),
  
    on(cargarUsuariosError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: payload
    })),
);

export function usuariosReducer(state: any, action: any) {
    return _usuariosReducer(state, action);
}