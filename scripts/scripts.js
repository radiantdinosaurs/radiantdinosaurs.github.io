$(document).ready(function() {
    var app = document.getElementById("laptop-typewriter");
    var typewriter = new Typewriter(app, {
        delay: 75
    });

    typewriter
        .typeString(
            'class <span class="syntax-purple">Human</span> <span class="curly-braces">{</span>'
        )
        .typeString("<br>")
        .typeString(
            '<span class="indent-once">constructor</span><span class="parentheses">(</span><span class="syntax-purple">name</span><span class="parentheses">)</span> <span class="curly-braces">{</span>'
        )
        .typeString("<br>")
        .typeString(
            '<span class="syntax-purple indent-twice">this</span>.name = name;'
        )
        .typeString("<br>")
        .typeString('<span class="indent-once curly-braces">}</span>')
        .typeString("<br>")
        .typeString("<br>")
        .pauseFor(500)
        .typeString(
            '<span class="indent-once">get</span> <span class="syntax-purple">greeting</span><span class="parentheses">()</span> <span class="curly-braces">{'
        )
        .typeString("<br>")
        .typeString(
            '<span class="indent-twice syntax-purple">return</span> <span class="syntax-red">`Hello! My name is</span>'
        )
        .typeString("<br>")
        .typeString(
            '<span class="indent-twice">$</span><span class="curly-braces">{</span>this.<span class="syntax-purple">name</span><span class="curly-braces">}</span>!<span class="syntax-red">`</span>;'
        )
        .typeString("<br>")
        .typeString('<span class="indent-once">}</span>')
        .typeString("<br>")
        .typeString("<br>")
        .typeString(
            'const <span class="sytax-purple">Coder</span> = <span class="syntax-purple">new</span> Human<span class="parentheses">(</span><span class="syntax-red">"Bethany"</span><span class="parentheses">)</span>;'
        )
        .typeString("<br>")
        .typeString("<br>")
        .typeString("Coder.greeting;")
        .start();
    console.log("Hello! My name is Bethany!");
});
