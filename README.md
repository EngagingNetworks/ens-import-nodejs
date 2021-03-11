# ens-import-nodejs
Simple example of importing a CSV file to the import service using Node JS.

## Requirements
A system running Node JS

## Setup
1. Run `npm install` in the directory
2. **(US clients only)** - update the `url` variable to use `us.e-activist.com`
3. Update the `token` variable to your private token
4. Update the `fileName` and `filePath` to point to your CSV file
5. Update the `referenceName` variable. The example uses a timestamp to differentiate requests.
6. Enter the correct import format as the `importFormat` variable

## Execution
Run `node index.js` in the folder. You will see the results in the console. **Note** -  "Request complete" just means the POST went through. An error message may still be returned and your data may not have been updated.

## Testing and common errors
* Test your files, formats and tokens [here](https://politicalnetworks.com/ea-dataservice/import.jsp)

* Using the following URL as the POST endpoint can be helpful for debugging issues: http://httpbin.org/post. **IMPORTANT** - do not pass your real token or your real supporter data to this URL - use dummy values.

* *"Error: The format you selected does not match the first line of your upload file. Please verify that the header row in the import is exactly the same as the import format fields."*: check your import format exists, and that the file matches that import. Also check that the file is being located and streamed properly - if no file is sent at all, you will still see this message.

## Disclaimer
This code is for demonstration only and can be used as a starting point. Ensure your final script conforms to your organisations' policies on data protections and security.
