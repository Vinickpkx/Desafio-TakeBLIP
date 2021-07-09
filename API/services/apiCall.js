const axios = require('axios');
const { json } = require('body-parser');

module.exports = class gitApi{
    static async listFromLast(){
        const response = await axios.get('https://api.github.com/orgs/takenet/repos?sort=created&direction=asc')

        if (response.message == 'Not Found') {
            return
        }

        return response.data
    }
}