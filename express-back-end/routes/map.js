// Map Route
const express = require('express');
const router = express.Router();


module.exports = (db) => {

  const retrieveCases = function() {
    const queryString = `
    SELECT * FROM self_report_cases;
   `;
   return db.query(queryString)
    .then(res => {return res.rows})
  }
  router.get("/", (req, res) => {
    let dateNow = new Date().getTime();
    retrieveCases()
      .then(cases => {
        recentCases = cases.filter(report => dateNow - parseFloat(report.created_date) < 12096e5);
        res.send(recentCases);
      })
  });


  return router;
};
