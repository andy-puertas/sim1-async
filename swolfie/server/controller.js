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
    const params = [
        req.body.name,
        req.body.price,
        req.params.id,
    ]

    db.edit_bin(+params)
    .then( swolfinal => 
      res.status(200).send( swolfinal ) )
    .catch( (err) => {
      console.log(err)
      res.status(500).send('error')} )
  },

  create: (req, res) => {
    const db = req.app.get('db');
    let price = pasrseInt(req.body.price).toFixed(2);
    const {name, img} = req.body;
    const {shelf, bin} = req.params;

    db.create_bin([shelf, bin, name, price, img])
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