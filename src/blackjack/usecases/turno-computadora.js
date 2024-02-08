import { crearCartaHTML, pedirCarta, valorCarta } from "./";

/**
 * 
 * @param {number} puntosMinimos puntos minimos que la computadora necesita para ganar 
 * @param {HTMLElement} puntosHTML elemento HTML para mostar las cartas
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas
 * @param {Array<String>} deck
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if (!puntosMinimos) throw new ErrorEvent( 'Puntos minimos son necesario' );
    if (!puntosHTML) throw new ErrorEvent( 'Argumento puntosHTML es necesario' );

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );
 
        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );
 
        if( puntosMinimos > 21 ) {
            break;
        }
        
    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );
 
    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
 }