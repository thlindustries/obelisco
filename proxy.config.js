const proxy = [
    {
      context: '/api',
      target: 'http://192.168.240.203:8000/',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;