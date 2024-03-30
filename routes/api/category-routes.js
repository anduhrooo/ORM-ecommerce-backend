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

router.get("/:id", (req, res) => {
  Category.findByPk(req.params.id,{
    include:[Product]
  }).then((data) => {
    if(data==null){
      return res.status(404).json({msg:"no such id exists!"})
    }
    res.json(data);
  }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"error occurred",err})
  });;
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

router.put("/:id", (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((data) => {
    if(data[0]===0){
      return res.status(404).json({msg:"no such category exists!"})
    }
    res.json(data);
  }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"error occurred",err})
  });
});


router.delete("/:id", (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  }).then((data) => {
    if(data===0){
      return res.status(404).json({msg:"no such Category exists!"})
    }
    res.json(data);
  }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"error occurred",err})
  });
});

module.exports = router;
