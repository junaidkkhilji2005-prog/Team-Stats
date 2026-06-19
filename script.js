const team = {
  _players: [
    { firstName: 'LeBron', lastName: 'James', age: 39 },
    { firstName: 'Stephen', lastName: 'Curry', age: 36 },
    { firstName: 'Kevin', lastName: 'Durant', age: 35 }
  ],

  _games: [
    { opponent: 'Lakers', teamPoints: 102, opponentPoints: 99 },
    { opponent: 'Warriors', teamPoints: 110, opponentPoints: 115 },
    { opponent: 'Nets', teamPoints: 98, opponentPoints: 100 }
  ],

  // getters
  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  // add player method
  addPlayer(newFirstName, newLastName, newAge) {
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };

    this._players.push(player);
  },

  // add game method
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };

    this._games.push(game);
  }
};

// Add Bugs Bunny
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team._players);

// Add Titans game
team.addGame('Titans', 100, 98);
console.log(team._games);