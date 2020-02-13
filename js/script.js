console.log('Mockaroo Exercise');

$(document).ready(function(){
  $('body').click(function(){
    $(this).css('color','blue');
  });


$.ajax({
  url: 'js/mock_data2.json',
  type: 'GET',
  data: 'json',
  success: function(data){
  console.log(data);
  var i;
  for (i = 0; i < data.length; i++){
  document.getElementById('result').innerHTML +=
    '<div class="card text-white mx-auto bg-dark m-2 p-3 col col-sm-6 col-md-3 col-lg-3 mx-3" style="max-width: 18rem;">' +
    '<div class="card-header">ID: ' + data[i].id + '</div>' +
    '<div class="card-body">' +
      '<h5 class="card-title">Name: <br>' + data[i].first_name + ' '  + data[i].last_name + '</h5>' +
      '<p class="card-text">gender: ' + data[i].gender +'</p>' +
      '<p class="card-text">Email: ' + data[i].email +'</p>' +
      '<p class="card-text">Ph: ' + data[i].phone_number +'</p>' +
    '</div>' +
  '</div>'
  }  // For loop ends here.
}, // Success ends here.
  error:  function(){
  console.log('Error');
  }  // Error ends here.
}); // Ajax ends here.







}); // Document ready
