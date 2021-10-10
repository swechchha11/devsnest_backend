const User = require("../models/mongo");
const {SECRET} = require("../config");
const {strategy, ExtractJwt } = require("passport-jwt");

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrkey: SECRET
};


module.exports = passport => {
    passport.use (
        new strategy(opts, async (payload, done)  => {
            await User.findById(payload.user_id)
            .then(user => {
                if(user) {
                    return done(null,user);
                }
                return done(null, false);
            })
            .catch(err => {
                return done(null, false);
            });

        })
    );
};