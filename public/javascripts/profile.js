let deleteBtn = document.querySelectorAll(".delete");
let mainD = document.querySelector("main");

deleteBtn.forEach(function(del){
    del.addEventListener("click",function(){
        let delRou = del.getAttribute('rou');
        let mainI = mainD.innerHTML
        mainD.innerHTML = mainI + `<div class="popUp">
        <div class="popDiv">
          <h1>Are you sure?</h1>
          <p>Do you want to delete this book?</p>
          <div>
            <button class="yes delete"><a href="${delRou}">Yes</a></button>
            <button class="no update"><a href="">No</a></button>
          </div>
        </div>
      </div>`;
    //   document.querySelector('.no').addEventListener("click",function(){
    //     mainD.innerHTML = mainI
    //   })
    })
})