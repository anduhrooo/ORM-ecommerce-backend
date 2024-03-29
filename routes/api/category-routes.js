const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll().then(data=>{
    res.json(data)
  })
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where:{
      id:req.params.id
    }
  })
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    id:req.body.id,
    category_name:req.body.category_name
  }
  ).then(data=>{
    res.json(data)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      id:req.body.id,
      category_name:req.body.category_name
    },
    {
    where:{
      id:req.params.id
    }
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where:{
      id:req.params.id
    }
  })
});

module.exports = router;
