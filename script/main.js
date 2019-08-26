        import { Button, Alert, Badge, Breadcrumb, Card, Carousel, Input, Jumbotron, Media, Modal, Navbar, Navs, Pagination, Progress, Scrollspy, Spinner, Toast/*, HTML */ } from '../library.js'
        import HTML from '../utilities/HTML.func.js'

        var helpRequest = true;

        $('#user-code').keyup(function (e) {
            $('#result').html(eval($('#user-code').val()));
            $('body').scrollspy(['target: scroll']);
            $('#user-code').trigger('focus')
            $('[data-toggle="popover"]').popover()
            $('[data-toggle="tooltip"]').tooltip()
            $('.dropdown-toggle').dropdown()
            $('.toast').toast('show')
        })

        function autoType(text, elementClass, typingSpeed) {
            var thhis = $(elementClass);
            var text = ('A' + text).trim().split('');
            var amntOfChars = text.length;
            var newString = "";
            thhis.val("|");
            setTimeout(function () {
                thhis.val("");
                for (var i = 0; i < amntOfChars - 1; i++) {
                    (function (i, char) {
                        var textAuto = setTimeout(function () {
                            newString += text[i];
                            thhis.val(newString);
                            $('#result').html(eval(newString));
                        }, (i + 1) * typingSpeed);
                        $('.type-js').focus(function () {
                            clearTimeout(textAuto);
                        })
                    })(i + 1, text[i]);
                }
            }, 600)

            setTimeout(function () {
                window.scrollTo(0, document.body.scrollHeight);
            }, text.length * typingSpeed + 3000)

        }
        $('.type-js').focus(function () {
            $('#result').addClass('remove')
            $('.menu').addClass('remove')
            $('.menu').addClass('hide')
            $('.type-js').addClass('desaturate')

        })
        $('.type-js').blur(function () {
            $('#result').removeClass('remove')
            $('.menu').removeClass('remove')
            $('.menu').removeClass('hide')
            $('.type-js').removeClass('desaturate')
        })

        autoType(`Navbar(['<h1>ExeCorp</h1>'+Navs()])+Carousel({template: 'mb-3'})+'<div class="container">'+Media()+Media({reverse: true})+Media()+'</div>'`, ".type-js", 50);

        function autocomplete(inp, arr, arrHint) {
            var currentFocus;
            inp.addEventListener("input", function (e) {
                var a, b, i, icon, val = this.value;
                val = val.split('+');
                var valArray = val;
                val = valArray.pop();
                closeAllLists();
                if (!val) { return false; }
                currentFocus = -1;
                a = document.createElement("DIV");
                var x = document.createElement("button");
                var x2 = document.createElement("b");
                x.setAttribute("type", 'button');
                x.setAttribute("class", 'close');
                x.setAttribute("data-dismiss", 'alert');
                x.setAttribute("aria-label", 'close');
                x2.setAttribute("aria-hidden", 'true');
                if (helpRequest) {
                    x2.setAttribute("id", "helpAccepted");
                    icon = document.createTextNode("×")
                } else {
                    x2.setAttribute("id", "helpDenied");
                    icon = document.createTextNode("?")
                }
                x2.appendChild(icon);
                x2.setAttribute("class", "float-right px-3 py-2 h2");
                a.setAttribute("id", this.id + "autocomplete-list");
                a.setAttribute("class", "autocomplete-items alert alert-success fade show p-0");
                a.appendChild(x);
                a.appendChild(x2);
                this.parentNode.appendChild(a);
                if (helpRequest) {
                    document.querySelector('#helpAccepted').addEventListener('click', function () {
                        helpRequest = false;
                        inp.focus();
                    })
                } else {
                    document.querySelector('#helpDenied').addEventListener('click', function () {
                        helpRequest = true;
                        inp.focus();
                    })
                }
                val = val.trim();
                if (!val.match(arr[arr.length - 1])) {
                    for (i = 0; i < arr.length; i++) {
                        b = document.createElement("DIV");
                        if (val.toUpperCase().includes(arr[i].substr(0, val.length).toUpperCase()) && !(val.includes('<') || val.includes('>'))) {
                            if (helpRequest) {
                                b.innerHTML = arrHint[i];
                            }
                            b.innerHTML += "<input type='hidden' value='" + arrHint[i] + "'>";
                            b.addEventListener("click", function (e) {
                                valArray.push(this.getElementsByTagName("input")[0].value)
                                inp.value = valArray.join('+');
                                $('#result').html(eval(valArray.join('+')));
                                closeAllLists();
                                inp.focus();
                            });
                            a.appendChild(b);
                        }
                    }
                } else {
                    let {tag, attr, inner} =  val.match(arr[arr.length - 1])['groups'];
                    let htmlSuggestion = `HTML(\`${tag}\`,\`${attr}\`, \`${inner}\`)`
                     b = document.createElement("DIV");
                     if (helpRequest) {
                         b.innerHTML = htmlSuggestion;
                     }
                     b.innerHTML += "<input type='hidden' value='" + htmlSuggestion + "'>";
                     b.addEventListener("click", function (e) {
                         valArray.push(this.getElementsByTagName("input")[0].value)
                         inp.value = valArray.join('+');
                         $('#result').html(eval(valArray.join('+')));
                         closeAllLists();
                         inp.focus();
                     });
                     a.appendChild(b);
                }
            });
            inp.addEventListener("keydown", function (e) {
                var x = document.getElementById(this.id + "autocomplete-list");
                if (x) x = x.getElementsByTagName("div");
                if (e.keyCode == 40) {
                    /*If DOWN*/
                    currentFocus++;
                    addActive(x, currentFocus);
                } else if (e.keyCode == 38) { //up
                    /*If UP*/
                    currentFocus--;
                    /*and and make the current item more visible:*/
                    addActive(x, currentFocus);
                } else if (e.keyCode == 13) {
                    /*If ENTER*/
                    e.preventDefault();
                    if (currentFocus > -1) {
                        /*and simulate a click on the "active" item:*/
                        if (x) x[currentFocus].click();
                    }
                }
            });

            function closeAllLists(elmnt) {
                var x = document.getElementsByClassName("autocomplete-items");
                for (var i = 0; i < x.length; i++) {
                    if (elmnt != x[i] && elmnt != inp) {
                        x[i].parentNode.removeChild(x[i]);
                    }
                }
            }

            document.addEventListener("click", function (e) {
                closeAllLists(e.target);
            });
        }

        var functions = [
            "Alert",
            "Badge",
            "Breadcrumb",
            "Button",
            "Card",
            "Carousel",
            "Input",
            "Jumbotron",
            "Media",
            "Modal",
            "Navbar",
            "Navs",
            "Pagination",
            "Progress",
            "Scrollspy",
            "Spinner",
            "Toast",
            /\s*<\s*(?<tag>\w+)\s*(?<attr>.*?)\s*>\s*(?<inner>.*)/i
        ];
        var functionsHint = [
            "Alert([\"content\", \"tag\", \"attr\", \"template\", \"dismisable\", \"style\"])",
            "Badge([\"content\", \"tag\", \"attr\", \"template\", \"style\"])",
            "Breadcrumb([[\"content\"], \"attr\", \"template\", \"separator\", \"style\"])",
            "Button([\"content\", \"tag\", \"attr\", \"template\", \"tooltip\", \"dropdown\", \"popover\", \"collapse\", \"style\"])",
            "Card([\"content\", \"tag\", \"attr\", \"template\", \"image\", \"style\"])",
            "Carousel([[\"content\"], \"tag\", \"attr\", \"template\", \"active\", \"controls\", \"indicators\", \"interval\", \"style\"])",
            "Input([\"content\", \"tag\", \"attr\", \"template\", \"label\", \"sticker\", \"global\", \"style\"])",
            "Jumbotron([\"header\", \"body\", \"tag\", \"attr\", \"template\", \"style\"])",
            "Media([\"content\", \"image\", \"tag\", \"attr\", \"template\", \"reverse\", \"style\"])",
            "Modal([\"header\", \"body\", \"footer\", \"tag\", \"attr\", \"template\", trigger_id, \"style\"])",
            "Navbar([\"content\", \"tag\", \"attr\", \"template\", \"style\"])",
            "Navs([[\"content\"], \"tag\", \"attr\", \"template\", \"active\", \"disabled\", \"style\"])",
            "Pagination([[\"content\"], \"tag\", \"attr\", \"template\", \"active\", \"inter\", \"style\"])",
            "Progress([\"progress\", \"attr\", \"template\", \"min\", \"max\", \"percent\", \"style\"])",
            "Scrollspy([[\"content\"], \"tag\", \"attr\", \"template\", \"reference_id\", \"style\"])",
            "Spinner([\"radius\", \"attr\", \"template\", \"style\"])",
            "Toast([\"header\", \"body\", \"attr\", \"template\", \"style\"])"
        ];


        function addActive(x, currentFocus) {
            if (!x) return false;
            removeActive(x);
            if (currentFocus >= x.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = (x.length - 1);
            x[currentFocus].classList.add("autocomplete-active");
        }
        function removeActive(x) {
            for (var i = 0; i < x.length; i++) {
                x[i].classList.remove("autocomplete-active");
            }
        }

        autocomplete(document.getElementById("user-code"), functions, functionsHint);

        document.activeElement.blur();