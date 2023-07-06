const enum ERROR_TYPES{ /// const transpila menos codigo
  NOT_FOUND,
  UNAUTHORIZED,
  FORBIDDEN
}

function mostrarMensaje (tipoDeError: ERROR_TYPES){ // es encesario typar 
  if(tipoDeError === ERROR_TYPES.NOT_FOUND){
    console.log('no recurso')
  }else if (tipoDeError === ERROR_TYPES.FORBIDDEN){
    console.log('acceso denegado')
  }else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED){
    console.log('no esta autorizado')
  }
}