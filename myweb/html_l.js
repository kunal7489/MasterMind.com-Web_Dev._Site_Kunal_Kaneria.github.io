/*for selecting all elements of video-list class= vid (video + title) */
let listVideo = document.querySelectorAll('.video-list .vid');
/*for selecting all video in on main video section*/
let mainVideo = document.querySelector('.main-video video');
/*for slecting all title of every video down side of main video player */
let title = document.querySelector('.main-video .title');

listVideo.forEach(video =>{
    video.onclick = () =>{
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if(video.classList.contains('active'))
        {
            let src = video.children[0].getAttribute('src');
            mainVideo.src = src;
            let text = video.children[1].innerHTML;
            title.innerHTML = text;
        };
    };
});

