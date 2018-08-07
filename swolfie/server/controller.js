module.exports = {

  bins: (req, res) => {
    const db = req.app.get('db');

    db.show_bins([req.params.id])
      .then( swolfinal => 
        res.status(200).send( swolfinal ) )
      .catch( (err) => {
        console.log(err)
        res.status(500).send('error')} )
  },

  binDeets: (req, res) => {
    const db = req.app.get('db');

    db.bin_details([req.params.id])
      .then( swolfinal => 
        res.status(200).send( swolfinal ) )
      .catch( (err) => {
        console.log(err)
        res.status(500).send('error')} )
  },
  
  edit: (req, res) => {
    const db = req.app.get('db');
    const {name, price} = req.body;
    const {id} = req.params;

    db.edit_bin([name, price, id])
    .then( swolfinal => 
      res.status(200).send( swolfinal ) )
    .catch( (err) => {
      console.log(err)
      res.status(500).send('error')} )
  },

  create: (req, res) => {
    const db = req.app.get('db');
   
    const {name, price, image} = req.body;
    const {id} = req.params;

    db.create_bin([name, price, image, id])
    .then( swolfinal => 
      res.status(200).send( swolfinal ) )
    .catch( (err) => {
        console.log(err)
        res.status(500).send('error')} )
  },

  delete: (req, res) => {
    const db = req.app.get('db');

    db.delete_bin([req.params.id])
    .then( swolfinal => 
      res.status(200).send( swolfinal ) )
    .catch( (err) => {
      console.log(err)
      res.status(500).send('error')} )
  }



}