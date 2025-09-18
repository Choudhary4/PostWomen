// This file handles all API routes for Vercel deployment
const serverless = require('serverless-http');
const app = require('../backend/server');

module.exports = serverless(app);
