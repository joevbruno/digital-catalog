let Category = require('../models/category');

module.exports = function(app, passport) {
    app.get('/api/categories', passport.authenticate('http-bearer', { session: false }), function(req, res) {
        Category.find({}, function(err, docs) {
            if(err) {
                return res.sendStatus(500);
            }

            res.json(docs);
        });
    });
};
