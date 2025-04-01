document.addEventListener("DOMContentLoaded", () => {
    let counter = document.getElementById("counter");
    let minusButton = document.getElementById("minus");
    let plusButton = document.getElementById("plus");
    let heartButton = document.getElementById("heart");
    let pauseButton = document.getElementById("pause");
    let likesList = document.querySelector(".likes");
    let commentForm = document.getElementById("comment-form");
    let commentInput = document.getElementById("comment-input");
    let commentList = document.getElementById("list");
    let timer;
    let count = 0;
    let likes = {};
    let paused = false;
  
    function startTimer() {
      timer = setInterval(() => {
        counter.innerText = ++count;
      }, 1000);
    }
  
    startTimer();
  
    plusButton.addEventListener("click", () => {
      counter.innerText = ++count;
    });
  
    minusButton.addEventListener("click", () => {
      counter.innerText = --count;
    });
  
    heartButton.addEventListener("click", () => {
      if (!likes[count]) {
        likes[count] = 1;
      } else {
        likes[count]++;
      }
      
      let existingLike = document.getElementById(`like-${count}`);
      if (existingLike) {
        existingLike.innerText = `${count} has been liked ${likes[count]} times`;
      } else {
        let li = document.createElement("li");
        li.id = `like-${count}`;
        li.innerText = `${count} has been liked 1 time`;
        likesList.appendChild(li);
      }
    });
  
    pauseButton.addEventListener("click", () => {
      if (!paused) {
        clearInterval(timer);
        pauseButton.innerText = "resume";
        plusButton.disabled = true;
        minusButton.disabled = true;
        heartButton.disabled = true;
        paused = true;
      } else {
        startTimer();
        pauseButton.innerText = "pause";
        plusButton.disabled = false;
        minusButton.disabled = false;
        heartButton.disabled = false;
        paused = false;
      }
    });
  
    commentForm.addEventListener("submit", (event) => {
      event.preventDefault();
      let commentText = commentInput.value;
      if (commentText.trim() !== "") {
        let p = document.createElement("p");
        p.innerText = commentText;
        commentList.appendChild(p);
        commentInput.value = "";
      }
    });
  });
  