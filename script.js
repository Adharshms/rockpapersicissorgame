// Function to randomly generate computer's choice
function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
  
  // Function to determine if the player has won the round
  function hasPlayerWonTheRound(player, computer) {
    return (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Scissors" && computer === "Paper") ||
      (player === "Paper" && computer === "Rock")
    );
  }
  
  // Variables for player and computer scores
  let playerScore = 0;
  let computerScore = 0;
  
  // DOM elements
  const playerScoreSpanElement = document.getElementById("player-score");
  const computerScoreSpanElement = document.getElementById("computer-score");
  const roundResultsMsg = document.getElementById("results-msg");
  const winnerMsgElement = document.getElementById("winner-msg");
  const resetGameBtn = document.getElementById("reset-game-btn");
  const optionsContainer = document.querySelector(".options-container");
  
  // Function to get round results based on player and computer choices
  function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
  
    if (hasPlayerWonTheRound(userOption, computerResult)) {
      playerScore++;
      return `Player wins! ${userOption} beats ${computerResult}`;
    } else if (computerResult === userOption) {
      return `It's a tie! Both chose ${userOption}`;
    } else {
      computerScore++;
      return `Computer wins! ${computerResult} beats ${userOption}`;
    }
  }
  
  // Function to display the results of the round
  function showResults(userOption) {
    // Stop the game if someone already won
    if (playerScore >= 3 || computerScore >= 3) {
      return; // Prevent further rounds from being played once a winner is decided
    }
  
    const resultMsg = getRoundResults(userOption);
  
    // Update results and scores
    roundResultsMsg.innerText = resultMsg;
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
  
    // Check for winner and display the winner message
    if (playerScore === 3) {
      winnerMsgElement.innerText = "🎉 Player has won the game!";
      resetGameBtn.style.display = "inline"; // Show reset button
      optionsContainer.style.display = "none"; // Hide the options container
    } else if (computerScore === 3) {
      winnerMsgElement.innerText = "🤖 Computer has won the game!";
      resetGameBtn.style.display = "inline"; // Show reset button
      optionsContainer.style.display = "none"; // Hide the options container
    }
  }
  
  // Event listeners for buttons
  document.getElementById("rock-btn").addEventListener("click", () => showResults("Rock"));
  document.getElementById("paper-btn").addEventListener("click", () => showResults("Paper"));
  document.getElementById("scissors-btn").addEventListener("click", () => showResults("Scissors"));
  

  // Particle effect when a button is clicked
function createParticleEffect(event) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
  
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const x = event.clientX - left - width / 2;
    const y = event.clientY - top - height / 2;
  
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    event.target.appendChild(particle);
  
    setTimeout(() => {
      particle.remove(); // Remove particle after animation ends
    }, 1000);
  }
  
  // Add event listeners to buttons
  document.getElementById("rock-btn").addEventListener("click", (e) => {
    showResults("Rock");
    createParticleEffect(e); // Create particle effect on click
  });
  document.getElementById("paper-btn").addEventListener("click", (e) => {
    showResults("Paper");
    createParticleEffect(e);
  });
  document.getElementById("scissors-btn").addEventListener("click", (e) => {
    showResults("Scissors");
    createParticleEffect(e);
  });
  
  // Flash score effect when score changes
  function flashScore(element) {
    element.classList.add("flash");
    setTimeout(() => {
      element.classList.remove("flash");
    }, 1000); // Flash for 1 second
  }
  
  // Update the showResults function to include score flash
  function showResults(userOption) {
    // Stop the game if someone already won
    if (playerScore >= 3 || computerScore >= 3) {
      return; // Prevent further rounds from being played once a winner is decided
    }
  
    const resultMsg = getRoundResults(userOption);
  
    // Update results and scores
    roundResultsMsg.innerText = resultMsg;
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
  
    // Flash the score when it's updated
    flashScore(playerScoreSpanElement);
    flashScore(computerScoreSpanElement);
  
    // Check for winner and display the winner message
    if (playerScore === 3) {
      winnerMsgElement.innerText = "🎉 Player has won the game!";
      resetGameBtn.style.display = "inline"; // Show reset button
      optionsContainer.style.display = "none"; // Hide the options container
      triggerConfetti(); // Trigger confetti effect
    } else if (computerScore === 3) {
      winnerMsgElement.innerText = "🤖 Computer has won the game!";
      resetGameBtn.style.display = "inline"; // Show reset button
      optionsContainer.style.display = "none"; // Hide the options container
      triggerConfetti(); // Trigger confetti effect
    }
  }
  
  // Confetti effect on win
  function triggerConfetti() {
    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      document.body.appendChild(confetti);
      setTimeout(() => {
        confetti.remove(); // Remove confetti after animation
      }, 2000);
    }
  }
  

  // Reset game when "Play again?" button is clicked
  resetGameBtn.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerText = 0;
    computerScoreSpanElement.innerText = 0;
    roundResultsMsg.innerText = "";
    winnerMsgElement.innerText = "";
    resetGameBtn.style.display = "none"; // Hide the reset button
    optionsContainer.style.display = "block"; // Show the options container again
  });

  
  