//javaScript codedemonstrating simple objects
let school = {
    name:'Vivekananda School',
    location:'Delhi',
    estd:'1947',
     displayInfo :function()
    {
        console.log(`${school.name} was established in ${school.estd} at ${school.location}`);
    }
}
    school.displayInfo();