var ftoggle = {
    subjects: [],
    isInteraction: false,
    runtoggle: function () {
        console.log("toggle");
        ftoggle.isInteraction = true;
        ftoggle.subjects.forEach(function (s) {
            s.element.classList.toggle(s.className);
        });
    },
    runinteract: function () {
        ftoggle.isInteraction = true;
    },
    userclick: function () {
        if (!ftoggle.isInteraction) {
            ftoggle.subjects.forEach(function (s) {
                if (s.interact) {
                    s.element.classList.remove(s.className);
                }
            });
        }
        ftoggle.isInteraction = false;
    },
    init: function () {
        var buttons = document.querySelectorAll("[ftoggle-button]");
        buttons.forEach(function (b) {
            b.addEventListener("click", ftoggle.runtoggle);
        });

        var elements = document.querySelectorAll("[ftoggle-class]");
        elements.forEach(function (e) {
            var cn = e.getAttribute("ftoggle-class");
            var interact = e.hasAttribute("ftoggle-interact");

            ftoggle.subjects.push({
                element: e,
                className: cn,
                interact: interact
            });

            if (interact) {
                e.addEventListener("click", ftoggle.runinteract);
            }
        });
    }
};

window.addEventListener("load", ftoggle.init);
window.addEventListener("click", ftoggle.userclick, false);