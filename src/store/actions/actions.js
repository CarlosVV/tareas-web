import * as actionTypes from './actionTypes'

export const addTarea = () => {
    return {
        type: actionTypes.ADD_TAREA,
    }
}

export const deleteTarea = (tarea) => {
    return {
        type: actionTypes.DELETE_TAREA,
        tarea: tarea
    }
}

export const editTarea = (tarea) => {
    return {
        type: actionTypes.EDIT_TAREA,
        tarea: tarea
    }
}

export const setIdentificador = (identificador) => {
    return{ 
        type: actionTypes.SET_IDENTIFICADOR, 
        identificador: identificador 
    }
}

export const setDescripcion = (descripcion) => {
    return{ 
        type: actionTypes.SET_DESCRIPCION, 
        descripcion: descripcion 
    }
}

export const setFechaCreacion = (fecha_creacion) => {
    return{ 
        type: actionTypes.SET_FECHA_CREACION, 
        fecha_creacion: fecha_creacion 
    }
}

export const setVigente = (vigente) => {
    return{ 
        type: actionTypes.SET_VIGENTE, 
        vigente: vigente 
    }
}
export const setError = (error) => {
    return{ 
        type: actionTypes.SET_ERROR, 
        error: error 
    }
}
export const setTarea = (tarea) => {
    return{ 
        type: actionTypes.SET_TAREA, 
        tarea: tarea 
    }
}
export const setEdit = () => {
    return{ 
        type: actionTypes.SET_EDIT
    }
}