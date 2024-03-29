const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll().then(data=>{
    res.json(data)
  })
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where:{
      id:req.params.id
    }
  })
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    id:req.body.id,
    tag_name:req.body.tag_name
  }
  )
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      id:req.body.id,
      tag_name:req.body.tag_name
    },
    {
    where:{
      id:req.params.id
    }
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Category.destroy({
    where:{
      id:req.params.id
    }
  })
});

module.exports = router;
