module.exports = new Proxy(
    {},
    {
        get: (obj, prop) => {
            return require(`./src/${prop}`);
        }
    }
);