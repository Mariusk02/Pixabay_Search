import React from 'react'

const Paginacion =(props)=>{
    return(
        <div style={{display:"flex",justifyContent:"center",marginBottom:"50px",}}>
            <button style={{marginRight:"5px",cursor:"pointer"}} onClick={props.paginaAnterior} type='button' className='btn btn-info mr-1'>Anterior &larr;</button>
            <button style={{cursor:"pointer"}} onClick={props.paginaSgte} type='button' className='btn btn-info mr-1'>Siguiente &rarr;</button>

        </div>
    )
}

export default Paginacion