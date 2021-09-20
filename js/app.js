console.log('hola mundo app.js')

if(navigator.serviceWorker){
    console.log('si, esta disponible');
    navigator.serviceWorker.register('/sw.js')
}else{
    console.log('no, esta disponible')
}

