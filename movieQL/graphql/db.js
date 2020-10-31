export const people = [
    {
        id : 1,
        name : "HYS",
        age : 17,
        gender : "male"
    },
    {
        id: 2,
        name : "YHS",
        age : 16,
        gender : "female"
    },
    {
        id:3,
        name:"SHY",
        age : 18,
        gender:"male"
    }
];

export const getById = id =>{
    const filteredPeople = people.filter(person => id === person.id);
    return filteredPeople[0];
}