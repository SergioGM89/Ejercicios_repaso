let direcciones = [
    {
        // Válido
        pais: 'España', region: '', cp: '46014',
        ciudad: 'Valencia', direccion: 'Carrer Misericòrdia, 34',
        complemento: '',
        movil: '', fijo: '961 20 69 90'
    },
    {
        // Inválido: no tiene movil o fijo
        pais: 'España', region: '', cp: '46960',
        ciudad: 'Aldaia', direccion: 'C/ Montcabrer, 22',
        complemento: 'Pol. Ind. La Lloma',
        movil: '', fijo: ''
    },
    {
        // Inválido: no tiene país
        pais: '', region: 'Alicante', cp: '',
        ciudad: 'Petrer', direccion: 'Los Pinos, 7',
        complemento: '',
        movil: '', fijo: '965 37 08 88'
    }
]
function hasPlace (dir){ return (dir.pais && dir.ciudad && dir.direccion);}
function hasTelephone(dir) {return(dir.movil || dir.fijo);}
function hasRegionOrCP(dir){return (dir.region || dir.cp);}

/*
No está mal, pero podrías haber creado una función que lo englobara en vez de usar una función arrow anónima
Por ejemplo:
const direccionValida = direction => (hasPlace(direction) && hasTelephone(direction) && hasRegionOrCP(direction))

y luego:
let result = direcciones.filter(direccionValida);

Queda bastante más legible
*/
let result = direcciones.filter(direction => (hasPlace(direction) && hasTelephone(direction) && hasRegionOrCP(direction)));

console.log(result);
