const pool = require('../database');

exports.home = async (req, res) => {
  await pool.query('SELECT * FROM contacts', (err, rows) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
};

exports.add = async (req, res) => {
  const { state, city, name, email } = req.body;
  const newUser = {
    name,
    email,
    state,
    city,
  };
  await pool.query('INSERT INTO contacts set ?', [newUser]);
};
