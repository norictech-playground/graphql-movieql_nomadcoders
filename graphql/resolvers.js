import { movies, getById, addMovie } from './db.js'

const resolvers = {
  Query: {
    movies: () => movies,
    movie: (_, { id }) => getById(id)
  },
  Mutation: {
    addMovie: (_, { name }) => addMovie(name)
  }
};

export default resolvers