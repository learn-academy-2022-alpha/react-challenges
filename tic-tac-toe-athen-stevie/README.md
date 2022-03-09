This game will be for two users, playing on one device, taking turns. You will have to use component state to keep track of whose turn it is and which squares have been marked by each player.

This project will challenge your knowledge of React but should also be an exercise in creating good user experiences. Your view should be styled to look good as well as function flawlessly.

User Stories:
As a user, I should start off seeing a 3x3 grid on the main page.
  - We created a div tag in App.js within the render method
  - We used .map() higher order function to map out each square (9)
  - We declared a className within the div tag called "gameBoard" and switched over to App.css to modify the dimensions and make it so that it had flex wrap qualities.
  - 3x3 grid complete

As a user, I should be able to click on a square to mark it.
  - We added a function in App.js called gamePlay that takes in one parameter, index.
  - Added a line of code that increments the value of the squares array at a certain index.
  - Added a conditional statement saying that if squares[index] === 1, then the value at that index is marked as a Circle. Otherwise, mark it as an X.
  - this.setState({squares: squares}) for the last lines of code.

As a user, my partner should be able to click on a square after me and see their mark.

  
As a user, I shouldn't be able to click on a square that has already been selected.

As a user, when someone has won the game (3 squares in a row: horizontally, vertically, or diagonally) I should see a notice telling me who won.

As a user, I should not be able to continue playing the game after the game has been won.

As a user, if there are no more squares available, I should see a notice telling me that the game has ended.

As a user, I should see a restart button that when clicked will clear the gameboard.
Stretch Goals:
As a user, I can see a notification that informs me whether it is currently player one's or player two's turn.
As a user, I can choose my marker (X, O, a color, an emoji, etc...).
