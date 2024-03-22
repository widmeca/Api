
    //Metodo contagem Letra
     function contaLetra(texto){
        //array com todas as letras da palavra   
        const arr = texto.split(' ').join('').toLowerCase().split('')

        //array com letras unicas da palavra
        const arrUnico = [...new Set(arr)]
        // 
        let resultado={};

        arrUnico.forEach(element => {
            //cria a expressao do  regex
            let regex = new RegExp(element,'g');
            //conta a quantidade de ocorrencia da letra no texto
            let ocorr = (texto.toLowerCase().match(regex) ||[]).length;
            resultado[element] = ocorr;
        });
        //console.log(resultado);
        return resultado
    }

    //Metodo verifica se palindromo
    function palindromo(texto){
        const textoReverso = texto.split('').reverse().join('');

        if(texto.split(' ').join('').toLowerCase() === textoReverso.split(' ').join('').toLowerCase()){
            return true;
        }else{
            return false;
        }
        
    }


module.exports = {contaLetra, palindromo};