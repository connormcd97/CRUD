const express = require('express');
const router = express.Router();


const Bruins = require('../models/bruins');
router.get('/', (req, res) => {

  Bruins.find({}, (err, allBruins) => {
    if (err) {
      console.log(err);
    } else {
      console.log(allBruins)

      res.render('index.ejs', {
        bruins: allBruins
      });
    }
  });

});
router.get('/new', (req, res) => {
  res.render('new.ejs');
});

router.get('/:id/edit', (req, res) => {
  Bruins.findById(req.params.id, (err, editBruin) => {
    res.render('edit.ejs', {
      bruin: editBruin
    });
  });
});


router.get('/:id', (req, res) => {

  Bruins.findById(req.params.id, (err, foundBruins) => {

    res.render('show.ejs', {
      bruins: foundBruins
    });
  });
});


router.delete('/:id', (req, res) => {

  Bruins.findByIdAndRemove(req.params.id, (err, deletedBruin) => {
    res.redirect('/bruins')
  });
});


router.put('/:id', (req, res) => {
  Author.findByIdAndUpdate(req.params.id, req.body, (err, updateBruins) => {
    res.redirect('/bruins');
  });
});


router.post('/', (req, res) => {

  Bruins.create(req.body, (err, createdBruin) => {

    if (err) {
      console.log(err)
    } else {
      res.redirect('/bruins')
    }
  });

});



router.put('/:id', (req, res) => {
  Bruins.findByIdAndUpdate(req.params.id, req.query, () => {
    res.redirect('/bruins');
  });
});
router.delete('/:id', (req, res) => {
  Bruins.findOneAndDelete(req.params.id, (err, deleted) => {
    res.redirect('/bruins')
  })
});


module.exports = router;