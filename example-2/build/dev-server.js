const Mock = require('mockjs')
const initMockApi = require('../mock')
const express = require('express')
const app = express()

initMockApi && (initMockApi(app, Mock))