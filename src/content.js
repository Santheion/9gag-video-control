setInterval(() => {
    Array.from(document.getElementsByTagName('video'))
        .forEach(video => {
            if(!video.controls) 
                video.controls = true;
        })
}, 1000);