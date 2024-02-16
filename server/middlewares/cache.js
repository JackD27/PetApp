const caching = (req, res, next) => {
    const minutes = 5
    const period = minutes * 60

    if (req.method === 'GET') {
        res.set('Cache-Control', 'no-store')
    }else {
        res.set('Cache-Control', 'no-store')
    }
   
    next();
}

module.exports = caching;

