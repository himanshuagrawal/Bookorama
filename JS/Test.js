(function () {
    window.addEventListener('load', function () {
        document.querySelector('ul').addEventListener('click', function (event) {
            if (event.target.tagName === "BUTTON") {
                event.target.parentElement.parentElement.removeChild(event.target.parentElement);
            }
        });
        document.querySelector('#AddBtn').addEventListener('click', function (event) {
            if (event.target.previousElementSibling.value !== "") {
                var ele = document.querySelector('li').cloneNode(true);
                ele.firstElementChild.textContent = event.target.previousElementSibling.value;
                document.querySelector('ul').appendChild(ele);
                event.target.previousElementSibling.value = "";
            }
        });

        document.querySelector('#check').addEventListener('change', function (e) {
            if (document.querySelector('#check').checked == true) {
                document.querySelector('ul').style.display = "none";
            } else {
                document.querySelector('ul').style.display = "block";
            }
        });
        
        document.querySelector('#searchBooks').addEventListener('keyup',function(){
            var elements = document.querySelectorAll('ul span');
            elements = Array.from(elements);
            elements.forEach(function(item){
                var textvalue = item.textContent;
                if(!textvalue.includes(document.querySelector('#searchBooks').value)){
                    item.parentElement.style.display="none";
                }else{
                    item.parentElement.style.display="list-item";
                }
            })
        })
    })
})();