import express from "express"
import cors from "cors"
import {clerkMiddleware} from "@clerk/express"
import { serve } from "inngest/express";
import { inngest, functions } from "../inngest/index.js"

const app = express()

app.use(cors({
    origin:"*",
    credentials:true
}));


app.use(express.json({limit:"10kb"}))
app.use(express.urlencoded({extended: true, limit:"10kb"}))
app.use(express.static("public"))

app.use(clerkMiddleware())

app.use("/api/inngest", serve({ client: inngest, functions }));
export {app}