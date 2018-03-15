// Cities data
const cities = [
    { id: 1, name: "Los Angeles" },
    { id: 2, name: "San Diego" },
    { id: 3, name: "Chino Hills" },
    { id: 1, name: "Pomona" },
  ];
  // extract unique cities by ID using map function
  const uniqueCities1 = [...new Set(cities.map((city) => {
    return city.id;
  }))].map(each => {
    return cities.find(eachCity => {
      return eachCity.id === each;
    });
  });
  
  // extract unique cities by ID using reduce function
  const uniqueCities2 = cities.reduce((tmp, city) => {
    const tempList = tmp;
    if(!tempList.find((tmp) => { return tmp.id === city.id;})) {
       tempList.push(city);
    }
    return tempList;
  },[]);
  
    