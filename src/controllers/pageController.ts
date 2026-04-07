import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';
import { Pet } from '../models/pet';

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll();//pega todos os pets

    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list //lista de pets
    });
};

export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog');//pega os pets do tipo dog
    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list //lista de cachorros
    });
};

export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat');//pega os pets do tipo cat
    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list //lista de gatos
    });
};

export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish');//pega os pets do tipo fish
    res.render('pages/page', {
        menu: createMenuObject('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list //lista de peixes
    });
};