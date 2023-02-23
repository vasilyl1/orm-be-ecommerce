const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // include its associated Product data
  try {
    const allTags = await Tag.findAll({
      include: [{model: Tag}, {model: ProductTag}, {model: Product}], // include all tags joined by products
    });
    res.status(200).json(allTags); // return data as json object
  } catch (err) {
    res.status(500).json(err); // return server error
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // include its associated Product data
  try {
    const singleTag = await Tag.findByPk(req.params.id, {
      include: [{model: Tag}, {model: ProductTag}, {model: Product}] // include tag join by its products
    });
    if (!singleTag) {
      res.status(404).json({message: "No tag exists with that id"});
      return;
    }
    res.status(200).json(singleTag);
  } catch(err) {
    res.status(500).json(err); // return server error
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try{
    const newTag = await Tag.create({tag_name: req.body.tag_name});
    res.status(200).json(newTag); //returns json of created tag
  } catch(err) {
    res.status(400).json(err); //returns server error
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updTag = await Tag.update({
      tag_name: req.body.tag_name
    }, 
    {
      where: {
        id: req.params.id
      }
    });
    if (!updTag) {
      res.status(404).json({message: "No tag to update found with that id"});
      return;
    }
    res.status(200).json(updTag); // returns the updated category
  } catch(err) {
    res.status(500).json(err); // returns server error
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const rmTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!rmTag) {
      res.status(404).json({ message: "Tag to remove not found" });
      return;
    }
    res.status(200).json(rmTag); //returns the json with the renoved category
  } catch (err) {
    res.status(500).json(err); // returns server error
  }
});

module.exports = router;
