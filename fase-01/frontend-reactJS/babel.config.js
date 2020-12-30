module.exports ={
  presets: [
    // Converter funcionalidades que o browser ainda não entendem - JS
    // env -> ambiente -> browser
    // Entende o ambiente que ta sendo executado e converter conforme
    '@babel/preset-env',
    // Adiciona as funcionalidades do react na conversão
    '@babel/preset-react'
  ],
};