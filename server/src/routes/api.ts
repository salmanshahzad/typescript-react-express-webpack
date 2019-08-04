import { Router } from "express";

const router = Router();

router.get("/test", (req, res) => {
    res.send({
        message: "hello"
    });
});

router.post("/new_user", (req, res) => {
    res.send({
        name: req.body.name,
        age: req.body.age
    });
});

export default router;
