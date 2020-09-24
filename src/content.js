setInterval(() => {
    const videos = document.getElementsByTagName('video');
    for (let i = 0, l = videos.length; i < l; i++) {
        if(!videos[i].controls)
            videos[i].controls = true;
    }
}, 1000);