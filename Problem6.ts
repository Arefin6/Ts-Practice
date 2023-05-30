// Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.

interface Person {
   name:string,
   age:number,
   email:string
}

function matchEmail(persons:Person[],email:string):Person|null{
    const foundData =  persons.find(pr =>pr.email === email)
    if(foundData){
        return foundData;
    }
    else{
        return null;
    }
}


