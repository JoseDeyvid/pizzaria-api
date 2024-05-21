import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express"

interface Payload {
    sub: string;
}

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)


    // jwt.verify(token, process.env.JWT_SECRET as string, (err: any, user: any) => {
    //     console.log(user)
    //     console.log(token)

    //     if (err) return res.sendStatus(403)

    //     next()
    // })

    try {
        const { sub } = jwt.verify(token, process.env.JWT_SECRET as string) as Payload
        req.user_id = sub
        next()
    } catch (error) {
        return res.sendStatus(403)
    }


}