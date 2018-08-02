module.exports = function(namespace) {
       return console.log([namespace].concat.slice.bind((data) => {data})
}