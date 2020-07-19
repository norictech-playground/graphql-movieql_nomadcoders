/**
 * resolver, sama aja kaya default value dari tipe data
 * semisalkan, kita request query name, tanpa value seperti ` (name: 'fauzi') `, maka hasilnya = ` name: 'noric' `
 * contoh lain https://github.com/prisma-labs/graphql-yoga#quickstart-hosted-demo
*/ 
const resolvers = {
    Query: {
        name: () => 'noric'
    }
}

export default resolvers