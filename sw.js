self.addEventListener('install', (event) => {
    console.log("SW: Instalado");
});

self.addEventListener('activate', (event) => {
    console.log('SW: Activado y contrloado la app');
});

self.addEventListener('fetch', (event) => {
    console.log(event.request);

    if (event.request.url.includes('.jpg')){
        let newResp = fetch('/images/dog2.jpg')
        console.log('Es una imagen');
        event.respondWith(newResp)
    }

    if (event.request.url.includes('page.css')){
        let newResponse = new Response(
            `
            body{
                background-color:black !important;
                color: red;
            }
            `,{
                headers:{
                'Content-Type': 'text/css'
                }
            });

        event.respondWith(newResponse);
    }
})