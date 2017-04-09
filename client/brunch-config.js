module.exports = {
  files: {
    javascripts: {
      joinTo: 'app.js'
    },
    stylesheets: {
      joinTo: 'app.css'
    }
  },
  modules: {
    autoRequire: {
      'app.js': ['index']
    }
  },
  plugins: {
    babel: {presets: ['es2015']}
  },

  npm: {
    globals: {
      $: 'jquery'
    }
  }
};
