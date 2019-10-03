const variables ={
    Api : {
        port : process.env.port || 3000
    },
    Database : {
        connection : process.env.connection || 'mongodb+srv://Vigi:Vigi@cluster0-64rjo.mongodb.net/Vigimafra'
    },
    Security : {
        secretKey: '385c3eb47597d8afbec23743a9602105|06dc3e674a51c0bbee6078b27ab14a89'
    }
}

module.exports = variables