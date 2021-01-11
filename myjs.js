window.onload= function(){             
$("text-box").on('click',WhenMouseIsClicked);
$("text-box").mouseleave(WhenMouseLeaves);
function WhenMouseIsClicked(){
$('text-box').html('<p> You Are Awsome Just Because You Are Interrested In Tennis :)</p> ') ;
}
function WhenMouseLeaves(){
$('text-box').html('<p> Enjoy Surfing In Our Official Web Site</p>')
}
var arr=[{
    email:'bechir@gmail.com',
    password:'123'
    }]

$("#sign").on("click",function(){
 each(arr,function(){
     if (object.email == input email && object.password == input password){
         arr.push(object)
     }
 }) 
// array.includes()
if(bechir.email===$('#b1').val() && bechir.password===$('#b2').val()){
console.log('welcome')
window.location.href = './welcome.html'
}else{
alert('Verify you email please!')
}

})
$('#submit').on('click',function(){
    arr.push({name: $('.emailLog').val(),password: $('.passwordLog').val()})
    console.log(arr)
})

}