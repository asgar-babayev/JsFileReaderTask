let wrapper = document.querySelector(".wrapper");
let wrapperAll = document.querySelectorAll(".wrapper");
let area = document.querySelectorAll(".area");


let input = document.querySelector('[type="file"]');

wrapper.addEventListener("click", function () {
    input.click();
})

wrapperAll.forEach(x => {
    x.addEventListener("dragover", function (e) {
        e.preventDefault();
        console.log(this);
    })
})


input.addEventListener("change", function () {
    [...this.files].forEach(file => {
        if (file.size / 2048 > 3) {
            alert("File size is big");
            return
        }
        let fileReader = new FileReader();
        let div = document.createElement("div");
        area.forEach(x => {
            x.appendChild(div);
        })
        div.classList.add("remove");
        fileReader.onload = function () {
            div.innerHTML = "<img src ='" + this.result + "' title = '" + (file.size / 1024).toFixed(2) + " kb" + "' /> <span>X</span>"
            let span = document.querySelectorAll("span");
            span.forEach(x => {
                x.addEventListener("click", function () {
                    this.parentElement.remove();
                })
            })
        }
        fileReader.readAsDataURL(file);
    })
})

