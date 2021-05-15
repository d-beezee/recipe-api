import db from "../../features/db"

export default (c, req, res) => {
  db.push("recipes",{"asd":"asd"})
  db.get("recipes").then(data =>
    res.status(200).json({ result: data })
  )

};
