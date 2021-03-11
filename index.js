const fs = require('fs')
const FormData = require('form-data')
const fetch = require('node-fetch')

// import service endpoint
const url = 'https://e-activist.com/ea-dataservice/import.service' // https://us.e-activist.com for US clients


// Replace the following
const token = '***YOUR***PRIVATE***TOKEN***' // PRIVATE token from account. Keep very secure.
const fileName = 'uploadfile.csv'
const filePath = './'
const timestamp = Date.now()
const referenceName = `New import ${timestamp}`
const importFormat = 'SavedImportFormat'


const send = async () => {

	// create filestream
	const buffer = fs.readFileSync(`${filePath}${fileName}`) // NOTE: synchronous processing may not be appropriate for large files

	// buid form data
	const form = new FormData()
	form.append('token', token)
	form.append('name', referenceName)
	form.append('formatName', importFormat)
	form.append(
		'upload',
		buffer,
		{
			contentType: 'text/csv',
			name: 'upload',
			filename: fileName
		}
	)

	try {

		console.log('Sending import request...')

		let res = await fetch(
			url,
			{
				method: 'POST',
				body: form,

			}
		)

		let text = await res.text()
		
		console.log('Request complete:')
		console.log(text) // NOTE: look for errors in this text. Successful request != successful import.

	}

	catch(err){

		console.log('Request failed:')
		console.log(err)

	}

}

send()