const getPaths = (baseUrl) => {
    return {
        "@utils": [
            `${baseUrl}/utils`
        ],
        "@src/*": [
            `${baseUrl}/*`
        ]
    }
}

module.exports = getPaths