module.exports = {

  bins: (req, res) => {
    const db = req.app.get('db');

    db.show_bins([req.params.shelf])
      .then( shelfies => 
        res.status(200).send( shelfies ) )
      .catch( (err) => {
        console.log(err)
        res.status(500).send('error')} )
  },

  binDeets: (req, res) => {
    const db = req.app.get('db');
    const {shelf, bin} = req.params;

    db.bin_details([shelf, bin])
      .then( shelfies => 
        res.status(200).send( shelfies ) )
      .catch( (err) => {
        console.log(err)
        res.status(500).send('error')} )
  },
  
  edit: (req, res) => {
    const db = req.app.get('db');
    let price = parseInt(req.body.price).toFixed(2);
    const {name, img} = req.body;
    const {shelf, bin} = req.params;


    db.edit_bin([name, price, img, shelf, bin])
    .then( shelfies => 
      res.status(200).send( shelfies ) )
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
    .then( shelfies => 
      res.status(200).send( shelfies ) )
    .catch( (err) => {
        console.log(err)
        res.status(500).send('error')} )
  },

  delete: (req, res) => {
    const db = req.app.get('db');
    const {shelf, bin} = req.params;

    db.delete_bin([shelf, bin])
    .then( shelfies => 
      res.status(200).send( shelfies ) )
    .catch( (err) => {
      console.log(err)
      res.status(500).send('error')} )
  }



}