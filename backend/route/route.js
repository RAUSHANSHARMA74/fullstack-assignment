import express from "express"
import { getAllCard, addCard, singleCard } from "../controller/card.controller.js"
const card = express.Router()

card.get("/", getAllCard)
card.post("/", addCard)
card.get("/:title", singleCard)


export default card