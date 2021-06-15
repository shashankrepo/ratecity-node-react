const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
app.use(cors());
app.use(express.json());

app.get('/', async function (req, res) {
  const { page, pageSize } = req.query;
  try {
    const { data } = await axios.get(
      `https://api.ratecity.com.au/v2/home-loans?pageSize=${
        pageSize || 10
      }&page=${page || 1}`,
      {
        headers: {
          'x-api-key': 'MaDX2Oo31g3FLAHesYHtGa3rHe40uqkJ8TmbPJn9',
        },
      },
    );
    res.json(data);
  } catch (error) {
    console.debug(error);
    res.json(error);
  }
});

const PORT = 5000;

app.listen(PORT, () =>
  console.debug(`server running on http://localhost:${PORT}`),
);
