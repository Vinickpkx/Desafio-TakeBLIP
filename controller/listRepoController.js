const apiCall = require("../services/apiCall");

module.exports = class listRepoController {
    static async takeNetRepos(req, res) {
        try {
            const response = await apiCall.listFromLast();
            let lastFiveRepos = []
            let count = 0;
    
            for (let i = 0; i <= response.length; i++) {
                if (response[i].language == 'C#') {
                    lastFiveRepos.push(response[i])
                    count ++
                }
                if (count == 5) break;
            }

            if (lastFiveRepos.length == 0) {
                return res.status(204).send('No repositories found')
            } else {
                return res.status(200).send(lastFiveRepos)
            }

        } catch (error) {
            console.log(error)
            return res.status(400).send('Something went wrong')
        }
    }
}