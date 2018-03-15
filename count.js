// student data
const students = [
    { id: 1, name: "John", gender: "Male" },
    { id: 2, name: "Jane", gender: "Female" },
    { id: 3, name: "Jake", gender: "Male" },
    { id: 4, name: "Joan", gender: "Female" },
    { id: 5, name: "Jim", gender: "Male" },
  ];
  // using reduce function to get gender count from student data
  const genderCount = students.reduce((thisCount, student) => {
    const tmpGender = thisCount;
    if(student.gender === 'Male') { tmpGender.male += 1; }
    else { tmpGender.female += 1; }
    return tmpGender
  }, {male: 0, female: 0});

// output {"male":3,"female":2}
genderCount;
