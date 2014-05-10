

  /**
  *Точка входа, как бы роутинг
  */
  //создаём конект
  var socket = io.connect();
  //работаем с сокетом
  socket.on('connect', function(res){
  	socket.emit('join')
  })

  socket.on('statusWait', function(res) {
  	if(res){
  		document.querySelector('.wait').style.display = 'none'
  		document.querySelector('.play').style.display = 'block'
  	}
  })

  socket.on('giftCardsMP', function(res) {
    document.querySelector('.play').style.display = 'none'
    document.querySelector('.game').style.display = 'block'
    console.log('++++',res)
  })


  socket.on('giftCards', function(res) {
    document.querySelector('.play').style.display = 'none'
    document.querySelector('.game').style.display = 'block'
    console.log('----',res)
  })

  document.querySelector('.btn-next').addEventListener('click', function(){
    socket.emit('endStep')
  }, false)

  // document.querySelector('.btn-next').addEventListener



