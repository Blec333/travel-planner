const router = require('express').Router();
const { Traveller, Location, Trip } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const travellerData = await Traveller.findAll();
    res.json(200).json(travellerData);
  } catch (err) {
    res.json(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const travellerData = await Traveller.findByPk(req.params.id, {
      include: [{ model: Location }, { model: Trip }],
    });
    if (!travellerData) {
      res.status(404).json({ message: 'No data found with that id!' });
      return;
    }
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
