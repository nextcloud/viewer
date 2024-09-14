const babelConfig = require('@nextcloud/babel-config')

babelConfig.plugins.push('@babel/plugin-proposal-class-properties')
babelConfig.plugins.push('@babel/plugin-transform-private-methods')

module.exports = babelConfig
