import ComponenteTitulo from './ComponenteTitulo';
import ComponentePeca from './ComponentePeca';
import ComponenteInfo from './ComponenteInfo';
function ComponenteGeral(){
    return(
        <>
            <p>Componente Geral</p>
            <ComponenteTitulo/>
            <ComponentePeca/>
            <ComponenteInfo/>
        </>
    );
}
export default ComponenteGeral;