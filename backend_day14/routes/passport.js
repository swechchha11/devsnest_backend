const router = require("express").Router();
const{
    userAuth,
    userLogin,
    checkRole,
    userRegister,
    serializeUser
}= require("../utils/Auth");

router.post("/register-user", async (req,res) => {
    await userRegister(req.body, "user" , res);

});

router.post("/register-admin", async (req,res) => {
    await userRegister(req.body, "admin" , res);

});

router.post("/register-super-admin", async (req,res) => {
    await userRegister(req.body, "superadmin" , res);

});

router.post("/login-user", async (req,res) => {
    await userRegister(req.body, "user", res);
});


router.post("/login-admin", async (req,res) => {
    await userRegister(req.body, "admin", res);
});

router.post("/login-super-admin", async (req,res) => {
    await userRegister(req.body, "superadmin", res);
});


router.post("/profile",userAuth, async (req,res) => {
    return res.json(serializeUser(req.user));
});


router.get(
    userAuth,
    checkRole(["user"]),
    async (req,res) => {
        return res.json("Hello User");
    }
);


router.get(
    userAuth,
    checkRole(["admin"]),
    async (req,res) => {
        return res.json("Hello Admin");
    }
);
