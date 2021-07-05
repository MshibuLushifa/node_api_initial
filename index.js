const app = require('./src/app');

// Defining data storage for public resources
require('./src/storage/storage')();



// Configure app by node environment
const environment = process.env.NODE_ENV;
if (environment === 'development') {
    console.log('This is a development server!');
    require('./test/CodeTest')()
} else {

}



// Prepare app to run
const host = process.env.SERVER_HOST || '192.168.43.72';
const port = process.env.SERVER_PORT || 7878;

app.listen(port, host, () => {
    console.log(`Store micro-service is running on http://${host}:${port}/`);
})
