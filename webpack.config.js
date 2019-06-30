const path = require('path')

module.exports = {
  name: 'wordrelay-setting',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: {
    app: ['./client']
  }, // 입력
  module: {
    rules: [
      {
        test: /\.jsx?/, // js와 jsx 파일에 룰을 적용한다
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['> 1% in KR']
                },
                debug: true
              }
            ],
            '@babel/preset-react'
          ],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  } // 출력
}
