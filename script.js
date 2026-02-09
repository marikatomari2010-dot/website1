



        function nextQuiz(step,last) {
            const checked = document.querySelector(`input[name="q${step}"]:checked`);
            if (checked) {
                document.getElementById(`q${step}`).style.display = "none";
                document.getElementById(`q${step + 1}`).style.display = "block";
            } else {
                alert("Please Select");
            }
            
            if (last) {
                q1 = document.querySelector('input[name="q1"]:checked').value;
                q2 = document.querySelector('input[name="q2"]:checked').value;
                q3 = document.querySelector('input[name="q3"]:checked').value;
                q4 = document.querySelector('input[name="q4"]:checked').value;
                q5 = document.querySelector('input[name="q5"]:checked').value;

                counter = 0;
                
                if (q1 == "1:55") {
                  q1_result = "correct";
                  counter ++;
                } else {
                  q1_result = "wrong";
                }

                if (q2 == "one"){
                  q2_result = "correct";
                  counter ++;
                } else {
                  q2_result = "wrong";
                }
                
                if (q3 == "end"){
                  q3_result = "correct";
                  counter ++;
                } else {
                  q3_result = "wrong";
                }

                if (q4 == "disrespect"){
                  q4_result = "correct";
                  counter ++;
                } else {
                  q4_result = "wrong";
                }

                if (q5 == "affirmation"){
                  q5_result = "correct";
                  counter ++;
                } else {
                  q5_result = "wrong";
                }
                
                document.getElementById("answer-q1").textContent = q1_result;
                document.getElementById("answer-q2").textContent = q2_result;
                document.getElementById("answer-q3").textContent = q3_result;
                document.getElementById("answer-q4").textContent = q4_result;
                document.getElementById("answer-q5").textContent = q5_result;
                document.getElementById("result").textContent = "You got " + counter + " out of 5 correct!";
                document.getElementById("answer-q1").textContent = "Q1: " + q1_result;
                document.getElementById("answer-q2").textContent = "Q2: " + q2_result;
                document.getElementById("answer-q3").textContent = "Q3: " + q3_result;
                document.getElementById("answer-q4").textContent = "Q4: " + q4_result;
                document.getElementById("answer-q5").textContent = "Q5: " + q5_result;
                
                if (counter < 3){
                  document.getElementById("final_msg").textContent = "You’re seeing the world through your own lens right now—and that’s okay! This is your invitation to start noticing the hidden 'social rules' that make your multicultural peers so resilient.";
                }
                else if (counter == 3){
                  document.getElementById("final_msg").textContent = "You’ve got a solid foundation and are starting to look past the surface. You're beginning to see that what looks 'different' actually has a deep, logical reason behind it.";
                }
                else if (counter == 4){
                  document.getElementById("final_msg").textContent = "Impressive! You have a high cultural IQ and can clearly spot the subtle shifts in how people connect. You’re well on your way to becoming a bridge between different worlds.";
                }
                else{
                  document.getElementById("final_msg").textContent = "Perfect score! You don’t just see traditions; you understand the underlying values of community and trust. You’re exactly the kind of ally multicultural students need.";
                }
            }
        }



        function toggleContent(num) {
            const box = document.getElementById("content-"+num);
            if ( box.style.display === "block" )
                box.style.display = "none"; 
            else
                box.style.display = "block"; 
        }

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}