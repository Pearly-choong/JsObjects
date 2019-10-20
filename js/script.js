console.log('JS Objects');

//Objects are the data type that can store different types of data
//Objects can contain functions called methods
//Objects have properties and its values
//called key-value pair
//objects are declared with curly braces
//object property-value is separated by comma
//object property and its value is separated by colon
//an array of objects are seperated by comma

// var dog = {name:'John', age:7, height:40};

//dog1
document.getElementById('dog1').addEventListener('click',function(){

//another way of declaring objects
var dog1 = {
  name : 'John',
  age  : 7,
  height: 40,
  photo : 'images/john.jpg'
};

//access property values
$('#result2').hide();
$('#result').show();
document.getElementById('result').innerHTML += '</br> The name of the dog is ' + dog1.name;
document.getElementById('result').innerHTML += '</br><img class="img-thumbnail" src=" ' + dog1.photo + '" alt="Dog1"/>';
document.getElementById('result').innerHTML += '</br> The age of the dog is ' + dog1.age + ' years';
document.getElementById('result').innerHTML += '</br> The height of the dog is ' + dog1.height + ' cm';
});

//dog2
document.getElementById('dog2').addEventListener('click',function(){


var dog2 = {
  name : 'Sam',
  age  : 10,
  height: 40,
  bread : 'Labrador',
  male : 'true',
  photo : 'images/sam.jpg'

};

//access property values

$('#result').hide();
$('#result2').show();
document.getElementById('result2').innerHTML += '</br></br> The name of the dog is ' + dog2.name;
document.getElementById('result2').innerHTML += '</br><img class="img-thumbnail" src=" ' + dog2.photo + '" alt="Dog2"/>';
document.getElementById('result2').innerHTML += '</br> The age of the dog is ' + dog2.age + ' years';
document.getElementById('result2').innerHTML += '</br> The height of the dog is ' + dog2.height + ' cm';
document.getElementById('result2').innerHTML += '</br> The bread of the dog is ' + dog2.bread;
return dog1;

if (dog2.male === 'true'){
  document.getElementById('result').innerHTML += '</br> The gender of the dog is male';
} else {
  document.getElementById('result').innerHTML += '</br> The gender of the dog is female';
}

});

document.getElementById('change').addEventListener('click',function(){
  var changeName = document.getElementById('dogName').value;
  console.log(changeName);

});
