


-----------------------------------------------------------------------------------------------

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="scriptres.js"></script>
</body>
</html>


-----------------------------------------------------------------------------------


var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);

    console.log(result[0].name);


for(var i=0;i<result.length;i++){
      console.log(result[i].name);
      console.log(result[i].region);
      console.log(result[i].subregion);
      console.log(result[i].population);
}
}
 
---------------------------------------------------------------------------------------------
    
    var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);

    console.log(result[0].name);


for(var i=0;i<result.length;i++){
      console.log(result[i].name);
      console.log(result[i].flag);
}
}
