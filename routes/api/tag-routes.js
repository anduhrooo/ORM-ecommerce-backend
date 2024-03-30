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

router.get("/:id", (req, res) => {
  Tag.findByPk(req.params.id,{
    include:[Product]
  }).then((data) => {
    if(data==null){
      return res.status(404).json({msg:"no such tag exists!"})
    }
    res.json(data);
  }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"error occurred",err})
  });;
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    id:req.body.id,
    tag_name:req.body.tag_name
  }
  )
});

router.put("/:id", (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((data) => {
    if(data[0]===0){
      return res.status(404).json({msg:"no such id exists!"})
    }
    res.json(data);
  }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"error occurred",err})
  });
});


router.delete("/:id", (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  }).then((data) => {
    if(data===0){
      return res.status(404).json({msg:"no such Tag exists!"})
    }
    res.json(data);
  }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"error occurred",err})
  });
});

module.exports = router;
