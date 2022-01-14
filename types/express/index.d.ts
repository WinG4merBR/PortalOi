import * as express from "express";

declare module "express-session" {
    interface Session {
        user: string;
        number: string;
    }
}

declare global {
    namespace Express {
        interface Request {
            session?: Record<string, any>
        }
    }
}