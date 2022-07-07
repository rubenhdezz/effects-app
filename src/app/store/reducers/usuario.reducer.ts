import { createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { cargarUsuario, cargarUsuarioSuccess, cargarUsuarioError } from '../actions';

export interface UsuarioState {
    id: string | undefined,
    user: Usuario | undefined,
    loaded: boolean,
    loading: boolean,
    error: any
}

export const usuarioInitialState: UsuarioState = {
    id: undefined,
    user: undefined,
    loaded: false,
    loading: false,
    error: undefined
}

const _usuarioReducer = createReducer(usuarioInitialState,

    on(cargarUsuario, (state, { id }) => ({ 
        ...state, 
        loading: true,
        id: id
    })),

    on(cargarUsuarioSuccess, (state, { usuario }) => ({
        ...state,
        loading: false,
        loaded: true,
        users: { ...usuario } 
    })),
  
    on(cargarUsuarioError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    }))
);

export function usuarioReducer(state: any, action: any) {
    return _usuarioReducer(state, action);
}