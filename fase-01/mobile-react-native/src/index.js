// Importação obrigatória - Principalmente por causa do JSX - HTML no JS
import React from 'react';

// Importando como se fosse uma "div" do HTML -> View 
import {View, Text, StyleSheet, StatusBar} from 'react-native';

// Exportar a função 
// Estilização direto no componente
// Como se fosse uma div vazia - View
// StatusBar -> Caracteristicas da barra superior
// Necessário colocar <> </> para colocar mais de um "bloco"
export default function App(){
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1">

      </StatusBar>

      <View style={style.container}>
        <Text style={style.title}>Hello Gostack</Text>
      </View>
    </>  
   );
}

// A parte do CSS é feita dentro do JS
const style = StyleSheet.create({
  // CSS
  container: {
    flex:1,// Flexibiliza os itens da div 
    backgroundColor:'#7159c1',
    justifyContent: 'center', // Centralizar os itens -> Eixo Y
    alignItems: 'center' // Centralizar os itens -> Eixo X
  },

  title: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold' // Negrito
  },

})