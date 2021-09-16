import { Request, Response } from 'express'


export const home =  (req: Request, res: Response) => {
    res.render('pages/index')
}

export const breve = (req: Request, res: Response) => {
    res.render('pages/breve')
}

export const contato = (req: Request, res: Response) => {
    res.render('pages/contato')
}

export const sobre = (req: Request, res: Response) => {
    res.render('pages/sobre')
}