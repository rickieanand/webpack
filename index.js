console.log('Hello')
document.getElementById('app').addEventListener('click', function(e){
    require.ensure([], function(require){
        require('./app.js')
    }, 'appView')
})
