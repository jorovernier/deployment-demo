const express = require('express')
const app = express()

// This line serves the static files to be displayed in the browser.
app.use(express.static(`${__dirname}/public`))

app.listen(4000, () => console.log('Petting a cat on port 4004'))