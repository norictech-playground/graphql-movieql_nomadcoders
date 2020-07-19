export const people = [
  {
    id: "1",
    name: "Noric",
    age: 24,
    gender: "Male",
  },
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id))
  return filteredPeople[0]
}