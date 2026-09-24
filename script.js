//your JS code here. If required.
 let counter = 0;

        const counterElement = document.getElementById("counter");
        const incrementbtn = document.getElementById("incrementbtn");

        incrementBtn.addEventListener("click", function() {
            alert(counter);
            counter++;
            counterElement.textContent = counter;
        });