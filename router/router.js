const { Router } = require("express");

const router = Router()

router.post("/display", (req, res) => {
  console.log(req.body.msg)
})

module.exports = {
  router: router
}