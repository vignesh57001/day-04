# day-04

compare the two same object JSON have the same properties without order

          var obj1 = {"name":"person 1","age":5};
             var obj2 = {"age":5,"name":"person 1"};

         JSON.stringify((obj1).name) == JSON.stringify((obj2).name)
