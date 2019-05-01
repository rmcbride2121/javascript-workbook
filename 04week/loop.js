let i = 0;

function loops() {
    do {
    i = i + 1;
    console.log(i);
    } while (i < 1000);
}

loops();

let person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
};

let x;

for (x in person) {
    if (person.birthDate === isOdd()) {
        console.log(person.birthDate);
    }
}

const arrayOfPersons = [
    {
        firstName: "Jane",
        lastName: "Doe",
        birthDate: "Jan 5, 1925",
        gender: "female"
    },
    {
        firstName: "Hannah",
        lastName: "Shortsleeve",
        birthDate: "Aug 9, 1995",
        gender: "female"
    },
    {
        firstName: "George",
        lastName: "McBride",
        birthDate: "Jan 24, 2018",
        gender: "male"
    }
];

const mapAllInfo = arrayOfPersons.map(console.log(mapAllInfo));

const filterGender = arrayOfPersons.filter(arrayOfPersons => arrayOfPersons.gender === "male");

console.log(filterGender);

const filterDate = arrayOfPersons.filter(arrayOfPersons => arrayOfPersons.birthDate <= "Jan 1, 1990");

console.log(filterDate);