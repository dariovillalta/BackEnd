var regalo = require('../schemas/regalo');

exports.getregaloSERVER = {
  handler: function(request, reply){
    var regaloS = regalo.find({});
    reply(regaloS);
  }
}

exports.createregaloSERVER = {
  handler: function(request, reply){

    var newregalo = new regalo({

      name : request.payload.regalo_ID,
      descripcion : request.payload.regalo_nombre_Cliente,
      peso : request.payload.regalo_Dia,
      destinatario: request.payload.regalo_Mes,
      status : request.payload.regalo_Anio
    });
    newregalo.save();
    console.log('regalo saved');
    return reply('ok');
  }
}

exports.modificarregaloSERVER = {
  handler: function(request, reply){
    regalo.findOneAndUpdate(
      {nombre : request.payload.nombre},
        {descripcion : request.payload.descripcion,
        peso: request.payload.peso,
        destinatario : request.payload.destinatario,
        status : request.payload.status},
        function(err, regalotodos){
      regalotodos.save(function(err){
        if(err){
          alert("Shit");
        }
      });
    });
  }
}

exports.borrarregaloSERVER = {
  handler: function(request, reply){
    regalo.findOneAndRemove(
      {nombre : request.params.nombre}, function(err){
        if(err)
          alert("Shit");
      }
    );
  }
}