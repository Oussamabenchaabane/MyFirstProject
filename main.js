// Get  to DOM elements
var gameContainer = document.querySelector(".container")
  userResult = document.querySelector(".user_result img")
  cpuResult = document.querySelector(".cpu_result img")
  result = document.querySelector(".result")
  optionImages = document.querySelectorAll(".option_image")

// Loop through each option image element
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active")

    userResult.src = cpuResult.src = "images/rock.png"
    result.textContent = "Wait..."

    // Loop through each option image again
    optionImages.forEach((image2, index2) => {
      // If the current index doesn't match the clicked index
      // Remove the "active" class from the other option images
      index !== index2 && image2.classList.remove("active")
    })

    gameContainer.classList.add("start")

    // Set a timeout to delay the result calculation
    var time = setTimeout(() => {
      gameContainer.classList.remove("start")

      // Get the source of the clicked option image
      var imageSrc = e.target.querySelector("img").src
      // Set the user image to the clicked option image
      userResult.src = imageSrc

      // Generate a random number between 0 and 2
      var randomNumber = Math.floor(Math.random() * 3)
      // Create an array of CPU image options
      var cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"]
      // Set the CPU image to a random option from the array
      cpuResult.src = cpuImages[randomNumber]

      // Assign a letter value to the CPU option (R for rock, P for paper, S for scissors)
      var cpuValue = ["R", "P", "S"][randomNumber]
      // Assign a letter value to the clicked option (based on index)
      var userValue = ["R", "P", "S"][index]

      // Create an object with all possible outcomes
      var outcomes = {
        RR: "Draw",
        RP: "Cpu",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Cpu",
        SS: "Draw",
        SR: "Cpu",
        SP: "User",
      }

      // Look up the outcome value based on user and CPU options
      var outComeValue = outcomes[userValue + cpuValue]

      // Display the result
      result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`
    }, 2500)
  })
})