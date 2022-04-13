import {Request, Response} from 'express';
import { User } from './model';

export let users = (req: Request, res: Response)=>{
    let users = [
        new User('james coonce', 'jcoonce', 'james@one.com'),
        new User('james coonce', 'jcoonce', 'james@one.com'),
        new User('james coonce', 'jcoonce', 'james@one.com')
    ]
    res.json(users);
}

export let create = (req: Request, res: Response)=>{
    res.json(req.body);
}