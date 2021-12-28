icon_name_list = ['favorite_border', 'face', 'description', 'print', 'javascript', 'code', 'html', 'assignment', 'grade', 'watch_later', 'thumb_up_off_alt', 'calendar', 'rocket_launch', 'rowing', 'wifi', 'gif_box', 'density_medium', 'webhook', 'socket', 'keyboard', 'home', 'share', 'thumb_up']

window.onload = (e) => {
    for(var i in icon_name_list) {
        var elem = document.createElement('span');
        elem.textContent = icon_name_list[i];
        elem.style.display = 'block';
        elem.style.position = 'absolute';
        elem.style.fontSize = (Math.random()*3 + 1) + 'em';
        elem.style.top = (Math.random() * 90) + 'vh';
        elem.style.left = (Math.random() * 90) + 'vw';
        elem.style.zIndex = -1;
        elem.style.color = 'rgba(255,255,255,0.3)'
        elem.classList.add('material-icons');
        document.querySelector('body').appendChild(elem);
    }

    if(DOWNLOAD_PAGE != false) {
        if(DOWNLOAD_PAGE == "MSC") {
            for(var i in map.MSC) {
                var elem = document.createElement('li');
                var j = parseInt(i) + 1
                elem.innerHTML = "<a href=\"certificates/MSc-" + j + ".pdf\">" + map.MSC[i] + "</a>";
                document.querySelector('#name-list').appendChild(elem);
            }
        } else if (DOWNLOAD_PAGE == "BTECH") {
            for(var i in map.BTECH) {
                var elem = document.createElement('li');
                var j = parseInt(i) + 1
                elem.innerHTML = "<a href=\"certificates/BTech-" + j + ".pdf\">" + map.BTECH[i] + "</a>";
                document.querySelector('#name-list').appendChild(elem);
            }
        } else if (DOWNLOAD_PAGE == "MTECH") {
            for(var i in map.MTECH) {
                var elem = document.createElement('li');
                var j = parseInt(i) + 1
                elem.innerHTML = "<a href=\"certificates/MTech-" + j + ".pdf\">" + map.MTECH[i] + "</a>";
                document.querySelector('#name-list').appendChild(elem);
            }
        }
    }
}
