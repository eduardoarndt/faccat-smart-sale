module.exports = {
    async index(request, response) {
        let requestBody = request.body

        console.log("Received request: ", requestBody)
        console.log(requestBody.msg)

        return response.json(JSON.stringify({
            msg: "Hello World!"
        }));
    }
}