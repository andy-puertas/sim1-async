module.exports = {

  bins: (req, res) => {
    const db = req.app.get('db');

    db.show_bins([req.params.shelf])
      .then( shelfies => res.status(200).send( shelfies ) )
      .catch( (err) => {
        console.log(err)
        res.status(500).send('error')} )
  },

  binDeets: (req, res) => {
    const db = req.app.get('db');
    const {shelf, bin} = req.params;

    db.bin_details([shelf, bin])
      .then( shelfies => res.status(200).send( shelfies ) )
      .catch( (err) => {
        console.log(err)
        res.status(500).send('error')} )
  }  

}