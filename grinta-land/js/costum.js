    // $.scrollDown({
    //     scrollText: '<a class="nav-link active" aria-current="page" id="ScrollDown" href="javascript:;">Contact Us</a>',
    //     easingType: 'linear',
    //     scrollSpeed: 900,
    //     animation: 'fade'
    // });


    const element = getElementById("ScrollDown");
    //you can do it by jquery. no matter
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});