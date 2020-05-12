module.exports = {
    async index(request, response) {
        console.log("Received request", request.body)

        return response.json(JSON.stringify({
            msg: "Hello World!"
        }));
    }
}