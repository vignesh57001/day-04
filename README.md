# day-04

compare the two same object JSON have the same properties without order

                 obj1 = {"name": "person 1", "age": "5"},
                 obj2 = {"age": "7", "name": "person 1"};
    
                    console.log( _.isEqual(obj1, obj2) );
