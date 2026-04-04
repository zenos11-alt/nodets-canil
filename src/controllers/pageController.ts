import { Request, Response } from 'express';

const home = (req: Request, res: Response) => {
    // res.render('pages/page');
    res.send('Home');
};

 const dogs = (req: Request, res: Response) => {
    // res.render('pages/page');
};

const cats = (req: Request, res: Response) => {
    // res.render('pages/page');
};

const fishes = (req: Request, res: Response) => {
    // res.render('pages/page');
};

export { home, dogs, cats, fishes };
