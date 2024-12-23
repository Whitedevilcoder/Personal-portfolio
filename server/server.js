const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const collection = require('./config/config')

const app = express();

const port = 5000;

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'client/public' directory
app.use('/public', express.static(path.join(__dirname, '../client/public')));
// app.use('/src', express.static(path.join(__dirname, '../Client/src')));
app.use('/css', express.static(path.join(__dirname, '../client/public/css')));
app.use('/img', express.static(path.join(__dirname, '../client/public/img')));
app.use('/js', express.static(path.join(__dirname, '../client/public/js')));

// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname, '../client/public/index.html'))
//     console.log('index.html');
// })


app.get('/', (req, res)=>{
    res.render('index');
    // console.log('index page')
})
app.get('/intro', (req, res)=>{
    res.render('intro');
    // console.log('redirected to intro page')
})
app.get('/contact', (req, res)=>{
    res.render('contact');
})
app.get('/services', (req, res)=>{
    res.render('services');
})
app.get('/blog', (req, res)=>{
    res.render('blog');
});
app.get('/resume', (req, res)=>{
    res.render('resume');
})

app.post('/contact', async (req, res) => {
    const { name, email, phone, enquiries } = req.body;

    try {
        const client = new collection({
            name,
            email,
            phone,
            enquiries,
        });
        

        await client.save();
        console.log(client);
        res.status(200).json({ message: 'Form submitted successfully' });
    } catch (err) {
        console.error('Error saving form data:', err);
        res.status(500).json({ message: 'Error submitting form' });
    }
});


app.listen(port, ()=>{
    console.log(`Server is running on port:${port}`);

})