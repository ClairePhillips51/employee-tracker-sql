class CRUD {
    static async create(connection, table, data) {
        const query = await connection.query("INSERT INTO " + table + " SET ?", data, (err, res) => {
                if (err) throw err;
                console.log(`${res.affectedRows} ${table} inserted!\n`);
        });
    }

    static async read(connection, table) {
        const query = await connection.query("SELECT * FROM " + table, (err, res) => {
                if (err) throw err;
                console.log(res);
        });
    }

    static async update(connection, table, data) {
        const query = await connection.query("UPDATE " + table + " SET ? WHERE ?", data, (err, res) => {
                if (err) throw err;
                console.log(`${res.affectedRows} ${table} updated!\n`);
        });
    }

    static async delete(connection, table, data) {
        const query = await connection.query("DELETE FROM " + table + " WHERE ?", data, (err, res) => {
                if (err) throw err;
                console.log(`${res.affectedRows} ${table} deleted!\n`);
        });
    }
};

module.exports = CRUD;