// Modulo do node
const path = require('path'); // Caminhos path se adapta conforme o SO

module.exports = {
  // Arquivo de entrada da aplicação
  // Diretorio que o arquivo está -> Diretorio frontend
  entry: path.resolve(__dirname, "src", "index.js"),

  // Arquivo gerado depois de convertido -> bundle
  output: {
    // Diretorio que ficará o arquivo
    path: path.resolve(__dirname, "public"),
    // Nome do arquivo 
    filename: "bundle.js",
  },
  // Indica ao webpack-dev-server o caminho dos arquivos a serem monitorados
  devServer: {
    // Caminho do diretorio que contem os arquivos publicos da aplicacao
    contentBase: path.resolve(__dirname, "public"),
  },
  // Regras de conversão (ex: para arquivos js usa esse babel ...outras extensoes)
  module: {
    // Rules -> regras
    rules: [
      // Regra para converter arquivos JS
      {
        // Todos arquivos que terminam com a extensão JS
        test: /\.js$/,
        // Exclui a conversão (babel-loader) dos arquivos JS do node_modules
        exclude: /node_modules/,
        // Webpack - converter arquivos .js utilizando o babel
        use: {
          loader: "babel-loader",
        },
      }, 
    ]
  },
}