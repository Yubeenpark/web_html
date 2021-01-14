var Body = {
  setColor : function(color){
    // document.querySelector('body').style.color = color;
    $('body').css('color',color);
  },
  setBackgroundColor : function(color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);
  }
};
var Links = {
  setColor : function(color){
    // var alist = document.querySelectorAll('a')
    // var i = 0
    // while(i<alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1
    // }
    $('a').css('color',color);//It means that the jQuery will controll all of 'a'tag in this webpage
  }
};
function nightDayHandler(self)
{
  var target = document.querySelector('body');
  if(self.value==='night')
  {
    Links.setColor('powderblue')
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value='day';

  }else
  {
    Links.setColor('blue');
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value='night';
  }
}
