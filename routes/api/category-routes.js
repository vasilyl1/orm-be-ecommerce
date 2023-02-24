const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => { // gets categories and products
  try {
    const categoryProducts = await Category.findAll();

    res.status(200).json(categoryProducts); // return data as json object
  } catch (err) {
    res.status(501).json(err); // return server error
  }

});

router.get('/:id', async (req, res) => { //gets category by its ID and all its products
  try {
    const categoryProduct = await Category.findByPk(req.params.id, {
      include: [{ model: Product }] // include category join by table of all its products
    });
    if (!categoryProduct) {
      res.status(404).json({ message: "No category exists with that id" });
      return;
    }
    res.status(200).json(categoryProduct);
  } catch (err) {
    res.status(502).json(err); // return server error
  }
});

router.post('/', async (req, res) => {
  try {
    /* req.body should look like this...
    {
      category_name: "Books"
     
    }
  */
    const newCategory = await Category.create({ category_name: req.body.category_name });
    res.status(200).json(newCategory); //returns json of created category
  } catch (err) {
    res.status(400).json(err); //returns server error
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
   /* req.body should look like this...
    {
      category_name: "Books"
     
    }
  */
  try {
    const updCategory = await Category.update({
      category_name: req.body.category_name
    },
      {
        where: {
          id: req.params.id
        }
      });
    if (!updCategory) {
      res.status(404).json({ message: "No category to update found with that id" });
      return;
    }
    res.status(200).json(updCategory); // returns the updated category
  } catch (err) {
    res.status(503).json(err); // returns server error
  }

});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const rmCategory = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!rmCategory) {
      res.status(404).json({ message: "Category to remove not found" });
      return;
    }
    res.status(200).json(rmCategory); //returns the json with the renoved category
  } catch (err) {
    res.status(504).json(err); // returns server error
  }
});

module.exports = router;
