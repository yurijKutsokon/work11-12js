$(function(){

   var data = {
       name:"Куцоконь Юрий Анатольевич",
       who:"Молодой пенсионер",
       target:"Хочу учить фронтент потому что:",
       targets:["Мне это нравится", "Хорошая работа", "Желание учиться и создавать"],
       bot:"repeat-bottom",
       top:"repeat-top",
       phone_title:"Мой телефон:",
       phone:"+3805062---69",
       vk:"социальные сети",
       adr:"facebook.com",
       feed:"Мой фитбек",
       feed_cont:"Есть только одна дорога - вперед!"
   };

    var container = $('#second_part');
    container.append(tmpl("item_templ",data))

});