const check =(req,re,next) => {
    if(req.session.User.role === "Super-admin") {
        res.status(200).send('success');
        
    } else {
        res.status(401).send("Needs to be super admin ")
    }
};

module.exports = check;