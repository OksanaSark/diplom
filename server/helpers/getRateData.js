const calculateRating = require('./calculateRating')

module.exports = function (ratings, user) {
    if (ratings.length) {
        return {
            isRated: ratings.some(item => item.user === +user),
            rate: calculateRating(ratings.map(item=> item.rate))
        }
    } else {
        return {
            isRated: false,
            rate: 0
        }
    }
}
