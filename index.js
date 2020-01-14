//import
import React from 'react';
import {Text, AppRegistry, View, Image, TouchableOpacity, Alert} from 'react-native';

//formatações
const Estilos = {
    principal:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botao:{
        backgroundColor: '#538530',
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginTop: 20 //para o botao nao ficar colado com o logo
    },
    textoBotao:{
        color:'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
};

const gerarNovaFrase = () => {
    var  numeroAleatorio = Math.random();
    numeroAleatorio = Math.floor(numeroAleatorio * 5);
    
    //frases
    var frases = Array();
    frases[0] = 'Julgo possuir a combinação mais singular de qualidades perfeitamente adequadas para me tornar, eminentemente, uma descobridora das realidades ocultas da natureza. (Ada Lovelace)';
    frases[1] = 'Um dos segredos do sucesso é se recusar a deixar que reveses temporários nos derrotem. (Mary Kay)';
    frases[2] = 'O começo é sempre hoje. (Mary Shelley)';
    frases[3] = 'Muitas das verdades que temos dependem de nosso ponto de vista. (Mestre Yoda)';
    frases[4] = 'Faça ou não faça. A tentativa não existe. (Mestre Yoda)';

    var fraseEscolhida = frases[numeroAleatorio];

    Alert.alert('Frase de Hoje', fraseEscolhida); //objeto de alert, para nao aparecer o texto "Alert"
    
    
}

//criar o componente
const App = () => {

    const {principal, botao, textoBotao} = Estilos;

    return (
       <View style={principal}>

           <Image source={require('./imgs/logo.png')}/>
           <TouchableOpacity
                onPress={gerarNovaFrase}
                style={botao}>
               <Text style={textoBotao}>Nova Frase</Text>
           </TouchableOpacity>

       </View>
    );
};

//renderizar para o dispositivo
AppRegistry.registerComponent('FraseDoDia', () => App);
