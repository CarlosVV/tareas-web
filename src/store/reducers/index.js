import * as actionTypes from '../actions/actionTypes';

const initialState = {
    tareas: [],
    identificador: "",
    descripcion: "",
    fecha_creacion:"",
    vigente:true,
    edit: false,
    error: ""
};
const tareas = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TAREA:
            const nuevaTarea = {
                identificador: Date.now(),
                value: state.descripcion,
            }
            return {
                ...state,
                tareas: state.tareas.concat(nuevaTarea),
                descripcion: "",
                error: ""
            }

        case actionTypes.EDIT_TAREA:
            var nuevaLista = [...state.tareas];
            var index = nuevaLista.indexOf(state.tarea);
            if (index !== -1) {
                nuevaLista[index].value = state.descripcion;
                return {
                    ...state,
                    descripcion: "",
                    edit: false,
                    tareas: nuevaLista,
                    error: ""
                }
            } else {
                return {
                    ...state
                }
            }
        case actionTypes.DELETE_TAREA:
            nuevaLista = [...state.tareas];
            index = nuevaLista.indexOf(state.tarea);
            if (index !== -1) {
                nuevaLista.splice(index, 1);
                return {
                    ...state,
                    tareas: nuevaLista
                }
            } else {
                return {
                    ...state
                }
            }
        case actionTypes.SET_DESCRIPCION:
            return {
                ...state,
                descripcion: action.descripcion
            }
        
        case actionTypes.SET_FECHA_CREACION:
            return {
                ...state,
                fecha_creacion: action.fecha_creacion
            }

        case actionTypes.SET_VIGENTE:
                return {
                    ...state,
                    vigente: action.vigente
                }    

        case actionTypes.SET_TAREA:
            return {
                ...state,
                tarea: action.tarea,
                error: ""
            }
        case actionTypes.SET_ERROR:
            return {
                ...state,
                error: action.error
            }
        case actionTypes.SET_EDIT:
            return {
                ...state,
                edit: true,
                error: ""
            }



        default:
            return state;
    }
}

export default tareas;