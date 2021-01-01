// "@babel/preset-env" -> Converter funcionalidades que o browser ainda não entendem - JS
// env -> ambiente -> browser
// env -> Entende o ambiente que ta sendo executado e converter conforme
// "@babel/preset-react" -> Adiciona as funcionalidades do react na conversão

module.exports ={
  presets: [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-transform-runtime"
  ],
};