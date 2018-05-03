var ob = {};
function reduce(items) {
       if (!items.length) return ob;             
       let head = items[0];
       (head in ob) ? ob[head]++ : ob[head]=1;               
       var tail = items.slice(1);
       return reduce(tail); 
}

module.exports = reduce;