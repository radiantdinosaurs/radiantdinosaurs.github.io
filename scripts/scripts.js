$(document).ready(function(){
    $('a').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault()
            var hash = this.hash
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            })
        }
    })

    if ($(window).width() > 960) {
        $('#slothbucket').hover(function(){
            $('#slothbucket-project-link').slideToggle('fast');
            $('#slothbucket-description').slideToggle('fast');
        },function(){
            $('#slothbucket-project-link').slideToggle('fast');
            $('#slothbucket-description').slideToggle('fast');
        });

        $('#myanimestats').hover(function(){
            $('#myanimestats-project-link').slideToggle('fast');
            $('#myanimestats-description').slideToggle('fast');
        },function(){
            $('#myanimestats-project-link').slideToggle('fast');
            $('#myanimestats-description').slideToggle('fast');
        });

        $('#what-happened').hover(function(){
            $('#what-happened-project-link').slideToggle('fast');
            $('#what-happened-description').slideToggle('fast');
        },function(){
            $('#what-happened-project-link').slideToggle('fast');
            $('#what-happened-description').slideToggle('fast');
        });
    }

    if ($(window).width() >= 961) {
        function setupTypewriter(t) {
            var HTML = t.innerHTML
            t.innerHTML = ''
            var cursorPosition = 0,
                tag = '',
                writingTag = false,
                tagOpen = false,
                typeSpeed = 20,
                tempTypeSpeed = 0
            var type = function() {
                if (writingTag === true) {
                    tag += HTML[cursorPosition]
                }
                if (HTML[cursorPosition] === '<') {
                    tempTypeSpeed = 0
                    if (tagOpen) {
                        tagOpen = false
                        writingTag = true
                    } else {
                        tag = '';
                        tagOpen = true
                        writingTag = true
                        tag += HTML[cursorPosition]
                    }
                }
                if (!writingTag && tagOpen) {
                    tag.innerHTML += HTML[cursorPosition]
                }
                if (!writingTag && !tagOpen) {
                    if (HTML[cursorPosition] === ' ') {
                        tempTypeSpeed = 0;
                    }
                    else {
                        tempTypeSpeed = (Math.random() * typeSpeed) + 50
                    }
                    t.innerHTML += HTML[cursorPosition]
                }
                if (writingTag === true && HTML[cursorPosition] === '>') {
                    tempTypeSpeed = (Math.random() * typeSpeed) + 50
                    writingTag = false
                    if (tagOpen) {
                        var newSpan = document.createElement('span')
                        t.appendChild(newSpan)
                        newSpan.innerHTML = tag
                        tag = newSpan.firstChild
                    }
                }

                cursorPosition += 1
                if (cursorPosition < HTML.length - 1) {
                    setTimeout(type, tempTypeSpeed)
                }

            }
            return {
                type: type
            }
        }

        var typer = document.getElementById('typewriter-desktop')
        typewriter = setupTypewriter(typer)
        typewriter.type()
    }
    if($(window).width() >= 501 || $(window).width() <= 960) {
        function setupTypewriter(t) {
            var HTML = t.innerHTML
            t.innerHTML = ''
            var cursorPosition = 0,
                tag = '',
                writingTag = false,
                tagOpen = false,
                typeSpeed = 20,
                tempTypeSpeed = 0
            var type = function() {
                if (writingTag === true) {
                    tag += HTML[cursorPosition]
                }
                if (HTML[cursorPosition] === '<') {
                    tempTypeSpeed = 0
                    if (tagOpen) {
                        tagOpen = false
                        writingTag = true
                    } else {
                        tag = ''
                        tagOpen = true
                        writingTag = true
                        tag += HTML[cursorPosition]
                    }
                }
                if (!writingTag && tagOpen) {
                    tag.innerHTML += HTML[cursorPosition]
                }
                if (!writingTag && !tagOpen) {
                    if (HTML[cursorPosition] === ' ') {
                        tempTypeSpeed = 0;
                    }
                    else {
                        tempTypeSpeed = (Math.random() * typeSpeed) + 50
                    }
                    t.innerHTML += HTML[cursorPosition]
                }
                if (writingTag === true && HTML[cursorPosition] === '>') {
                    tempTypeSpeed = (Math.random() * typeSpeed) + 50
                    writingTag = false
                    if (tagOpen) {
                        var newSpan = document.createElement('span')
                        t.appendChild(newSpan)
                        newSpan.innerHTML = tag
                        tag = newSpan.firstChild
                    }
                }

                cursorPosition += 1;
                if (cursorPosition < HTML.length - 1) {
                    setTimeout(type, tempTypeSpeed)
                }

            }
            return {
                type: type
            }
        }

        var typer = document.getElementById('typewriter-tablet')
        typewriter = setupTypewriter(typer)
        typewriter.type()
    }
    if($(window).width() <= 500) {
        function setupTypewriter(t) {
            var HTML = t.innerHTML
            t.innerHTML = ''
            var cursorPosition = 0,
                tag = '',
                writingTag = false,
                tagOpen = false,
                typeSpeed = 20,
                tempTypeSpeed = 0
            var type = function() {
                if (writingTag === true) {
                    tag += HTML[cursorPosition]
                }
                if (HTML[cursorPosition] === '<') {
                    tempTypeSpeed = 0
                    if (tagOpen) {
                        tagOpen = false
                        writingTag = true
                    } else {
                        tag = ''
                        tagOpen = true
                        writingTag = true
                        tag += HTML[cursorPosition]
                    }
                }
                if (!writingTag && tagOpen) {
                    tag.innerHTML += HTML[cursorPosition]
                }
                if (!writingTag && !tagOpen) {
                    if (HTML[cursorPosition] === ' ') {
                        tempTypeSpeed = 0;
                    }
                    else {
                        tempTypeSpeed = (Math.random() * typeSpeed) + 50
                    }
                    t.innerHTML += HTML[cursorPosition]
                }
                if (writingTag === true && HTML[cursorPosition] === '>') {
                    tempTypeSpeed = (Math.random() * typeSpeed) + 50
                    writingTag = false
                    if (tagOpen) {
                        var newSpan = document.createElement('span')
                        t.appendChild(newSpan)
                        newSpan.innerHTML = tag
                        tag = newSpan.firstChild
                    }
                }

                cursorPosition += 1;
                if (cursorPosition < HTML.length - 1) {
                    setTimeout(type, tempTypeSpeed)
                }

            }
            return {
                type: type
            }
        }

        var typer = document.getElementById('typewriter-mobile')
        typewriter = setupTypewriter(typer)
        typewriter.type()
    }

});