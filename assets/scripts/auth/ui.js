'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#userMessage').text('Signed up successfully')
  $('#userMessage').css('background-color', '#003')
}

const signInSuccess = function (data) {
  $('#userMessage').text('Signed in successfully')
  $('#userMessage').css('background-color', '#003')
  $('.userButtons').css('display', 'block')
  $('.signInUp').css('display', 'none')
  store.user = data.user
}

const changePasswordSuccess = function (data) {
  $('#userMessage').text('Password changed successfully')
  $('#userMessage').css('background-color', '#003')
}

const signOutSuccess = function () {
  $('#userMessage').text('Signed out successfully')
  $('#userMessage').css('background-color', '#003')
  $('.signInUp').css('display', 'block')
  $('#gameboard').css('display', 'none')
  $('.userButtons').css('display', 'none')
  $('.userInfo').css('display', 'none')
  store.user = null
}

const createSuccess = function (data) {
  $('#gameboard').css('display', 'block')
  store.game = data.game
  store.game.id = data.game.id
}

const movesSuccess = function () {
  // console.log('moves')
}

const getGamesSuccess = function (data) {
  $('#view-games').css('display', 'block')
  for (let i = 0; i < data.games.length; i++) {
    $('#view-games').append('<p><b>ID:</b>' + data.games[i].id + '    <b>Game Squares</b>' + data.games[i].cells + '</p>')
    // console.log(data.games[i])
  }
}

const failure = function () {
  $('#userMessage').text('Error')
  $('#userMessage').css('background-color', '#800')
  // console.log('Failure ran. Error is :', error)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  createSuccess,
  movesSuccess,
  getGamesSuccess,
  failure
}
