'use strict'

function Player(id, isAI, position) {
  this.id = id
  this.isAI = isAI
  this.position = position
  this.score = 0
  this.isTurn = false
  this.tiles = []
  this.link = null
  this.name = null
  this.team = null
  this.teamLink = null
}

Player.prototype.addInformation = function(data) {
  this.name = data.name
  this.team = data.team.name
  this.teamLink = data.team.link
  this.link = data.link
  return true
}

Player.prototype.resetScore = function() {
  this.score = 0
}

Player.prototype.updateScore = function(score) {
  this.score += score
}

Player.prototype.injectData = function(data) {
  this.tiles = data.tiles
  this.isTurn = data.isTurn
}

Player.prototype.addTiles = function(tiles) {
  this.tiles.push(...tiles)
}

Player.prototype.setTiles = function(tiles) {
  this.tiles = tiles
}

Player.prototype.data = function() {
  return {
    name: this.name,
    team: 'Green',
    // team: this.team.name,
    position: this.position,
    isTurn: this.isTurn,
    isAI: this.isAI,
    score: this.score,
    tiles: this.tiles

  }
}

module.exports = function(id, socket, isAI, position) {
  return new Player(id, socket, isAI, position)
}
