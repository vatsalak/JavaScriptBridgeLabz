const c_name=13;
{
    const c_name=90;
    console.log(c_name);
    {
        const c_name=77;
        console.log(c_name);
    }
    {
        const c_name=43;
        console.log(c_name);
    }
}
console.log(c_name);
/*
Properties:

Cannot be reassigned.
It has Block Scope
It can be assigned to the variable on the declaration line.
It’s a Primitive value.
The property of a const object can be changed but it cannot be changed to a reference to the new object
The values inside the const array can be changed, it can add new items to const arrays but it cannot reference a new array.
Re-declaring of a const variable inside different block scopes is allowed.
Cannot be Hoisted.
Creates only read-only references to value.*/