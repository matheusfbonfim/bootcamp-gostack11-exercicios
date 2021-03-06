// Importação obrigatória - Principalmente por causa do JSX - HTML no JS
import React, {useState, useEffect} from 'react';

// Importando a API
import api from './services/api';

// Importando como se fosse uma "div" do HTML -> View 
import {SafeAreaView,FlatList, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';

export default function App(){
  // Estado para armazenar os projetos
  // [] -> Array vazio -> no mesmo formato da variavel projects
  const [projects, setProjects] = useState([]);

  // Chamada api
  // Dispara a função (1parm) quando as variaveis alterarem (2parm)
  // Como o 2parm é [] então dispara uma unica vez
  useEffect(() => {
    api.get('/projects').then(response => {
      console.log(response.data);
      setProjects(response.data);
    })
  }, []);

  // Função para adicionar projetos
  async function handleAddProject(){
    // Método de atualizar POST, que além de adicionar na api retorna o projeto
    const response = await api.post('projects',{
      title: `Novo projeto ${Date.now()}`,
      owner: "Matheus de Farias"
    });

    const project = response.data;

    // Adicionar ao projeto -> projects -> respeitando a imutabilidade
    setProjects([...projects, project])
  }


  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
      
      {/* SafeAreaView -> Aparecer só na área segura/ visivel da aplicação
       e não ultrapassar limites */}
      <SafeAreaView style={style.container}>
        {
        /* Maneira perfomático de colocar uma lista - FlatList
            data -> Array que passaŕa informação
            keyExtractor -> A identificação de cada item da lista
            renderItem -> Conteúdo a ser mostrados
        */
        }
        <FlatList 
          style={style.container}
          data= {projects}
          keyExtractor={project => project.id}
          renderItem= {({ item }) =>(
            <Text style={style.project}>{item.title}</Text>
          )}
        />
  
        <TouchableOpacity 
          activeOpacity={0.6} 
          style={style.button} 
          onPress={handleAddProject}
        >
          <Text style={style.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>
      
      </SafeAreaView>      

      {/* <View style={style.container}>
        {projects.map(project =>{
          return (
          <Text style={style.project} key={project.id}>{project.title}</Text>
          );
        })}
      </View> */}

    </>  
   );
}

// A parte do CSS é feita dentro do JS
const style = StyleSheet.create({
  // CSS
  container: {
    flex:1,// Flexibiliza os itens da div 
    backgroundColor:'#7159c1',
  },

  project:{
    // Cor da fonte
    color: '#FFF',
    fontSize: 30,
  },

  button:{
    // Cor de fundo
    backgroundColor:'#FFF',
    // Margem em todos lados
    margin: 20,
    //Altura
    height: 50,
    // Borda arredondada
    borderRadius: 4,
    //Alinhar ao centro
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    // Negrito
    fontWeight: 'bold',
    // Tamanho da fonte
    fontSize: 16,
  },

})