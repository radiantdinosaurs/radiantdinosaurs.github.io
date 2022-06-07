const LINE_BREAK = "<br />";

$(document).ready(function() {
    const laptopScreenElement = document.getElementById("laptop-typewriter");
    const typewriter = new Typewriter(laptopScreenElement, {
        delay: 75
    });

    typewriter
        .typeString(
            'class <span class="syntax-purple">Human</span> <span class="curly-braces">{</span>'
        )
        .typeString(LINE_BREAK)
        .typeString(
            '<span class="indent-once">constructor</span><span class="parentheses">(</span><span class="syntax-purple">name</span><span class="parentheses">)</span> <span class="curly-braces">{</span>'
        )
        .typeString(LINE_BREAK)
        .typeString(
            '<span class="syntax-purple indent-twice">this</span>.name = name;'
        )
        .typeString(LINE_BREAK)
        .typeString('<span class="indent-once curly-braces">}</span>')
        .typeString(LINE_BREAK)
        .typeString(LINE_BREAK)
        .pauseFor(500)
        .typeString(
            '<span class="indent-once">get</span> <span class="syntax-purple">greeting</span><span class="parentheses">()</span> <span class="curly-braces">{'
        )
        .typeString(LINE_BREAK)
        .typeString(
            '<span class="indent-twice syntax-purple">return</span> <span class="syntax-red">`Hello! I\'m</span> '
        )
        .typeString(
            '$<span class="curly-braces">{</span>this.<span class="syntax-purple">name</span><span class="curly-braces">}</span>!<span class="syntax-red">`</span>;'
        )
        .typeString(LINE_BREAK)
        .typeString('<span class="indent-once curly-braces">}</span>')
        .typeString(LINE_BREAK)
        .typeString(LINE_BREAK)
        .typeString(
            'const <span class="syntax-purple">Coder</span> = <span class="syntax-purple">new</span> Human<span class="parentheses">(</span><span class="syntax-red">"Bethany"</span><span class="parentheses">)</span>;'
        )
        .typeString(LINE_BREAK)
        .typeString(LINE_BREAK)
        .typeString("Coder.greeting();")
        .start();
    console.log("Hello! I'm Bethany!");
});
