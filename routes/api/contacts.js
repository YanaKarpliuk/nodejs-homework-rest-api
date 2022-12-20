const express = require('express')
const router = express.Router()
const ctrlContact = require('../../controller')

router.get('/', ctrlContact.get)

router.get('/:id', ctrlContact.getById)

router.post('/', ctrlContact.create)

router.put('/:id', ctrlContact.update)

router.delete('/:id', ctrlContact.remove)

router.patch('/:id/favourite', ctrlTask.updateStatus)

module.exports = router
