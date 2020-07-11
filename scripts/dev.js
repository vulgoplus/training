const webpack = require('webpack')
const serverConfig = require('../server/webpack.config')
const webConfig = require('../src/webpack.config')

const server = webpack(serverConfig({ NODE_ENV: 'development' }, { mode: 'development' }))
const web = webpack(webConfig({ NODE_ENV: 'development' }, { mode: 'development' }))

const serverWatch = server.watch({ ignored: /node_modules/ }, (err, stats) => {
  if (err) console.error(err)

  console.log(stats.toString({ modules: false, assets: false, colors: true }))
})

const webWatch = web.watch({ ignored: /node_modules/ }, (err, stats) => {
  if (err) console.error(err)

  console.log(stats.toString({ modules: false, assets: false, colors: true }))
})

process.on('exit', () => {
  serverWatch.close()
  webWatch.close()
})
