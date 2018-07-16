module.exports = {

  bins: (req, res) => {
    const db = req.app.get('db');

    db.show_bins([req.params.shelfid])
      .then( shelfies => res.status(200).send( shelfies ) )
      .catch( (err) => {
        console.log(err)
        res.status(500).send('error')} )
  },

  binDeets: (req, res) => {
    const db = req.app.get('db');
    const {shelfID, bindID} = req.params;

    db.bin_details([shelfID, bindID])
      .then( shelfies => res.status(200).send( shelfies ) )
      .catch( (err) => {
        console.log(err)
        res.status(500).send('error')} )
  }  

}