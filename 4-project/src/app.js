impprt express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

// allowing access from url mentioned in CORS_ORIGIN
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

// for accepting data from form/json
app.use(express.json({limit: "16kb"}))

// for accepting data from url
app.use(express.urlencoded({extended = true, limit: "16kb"}))

// storing images, favicons, etc if required
app.use(express.static("public"))

// CRUD operations on cookies, only server can do that
app.use(cookieParser())

export {app}
