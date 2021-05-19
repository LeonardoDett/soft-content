(function () {
    let stampItem = document.querySelectorAll(".stamp-item");
    for (var i = 0; i < stampItem.length; i++) {
        var childElement = stampItem[i];
        childElement.addEventListener('click', function (e) {
            for (var i = 0; i < stampItem.length; i++) {
                stampItem[i].classList.remove("selected")
            }
            e.target.classList.add("selected");
            setTimeout(() => {
                e.target.classList.remove("selected")
            }, 2000);

        }, false);
        childElement.addEventListener('mouseover', function (e) {
            for (var i = 0; i < stampItem.length; i++) {
                stampItem[i].classList.remove("selected")
            }
            e.target.classList.add("selected");

        }, false);
        childElement.addEventListener('mouseout', function (e) {
            setTimeout(() => {
                e.target.classList.remove("selected")
            }, 2000);
        }, false);
    }
})();


