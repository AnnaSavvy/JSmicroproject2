import express from 'express';

import Book from '../models/Book.js';

const router = express.Router(); 

// C = post, R = get, U = put, D = delete

// app.get('/',(req,res)=> { })

router.post('', async (req, res) => {
    try {
        //creating
        //console.log(req.body);
        const {book_id, title, author, genre, published_year} = req.body

        const newBook1 = new Book({
            book_id, title, author, genre, published_year
        });

        const savedBook = await newBook1.save();

        res.status(201).json(savedBook);

    } catch (error) {
        console.log('error' + error);
        res.status(400).send('Bad request');
    }
});

export default router;

