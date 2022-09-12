(function(){
  setInterval(function(){
        var primeraLetra = document.getElementById('letra-l'),
            segundaLetra = document.getElementById('letra-ll'),
            terceraLetra = document.getElementById('letra-w'),
        /*Colores Tintes y Neutros */
        coloresDegradado = 
        ["#a4c739","#afce52","#bbd56b","#c6dc83","#d1e39c","#ddeab5","#e8f1ce","#f4f8e6","#81c739","#5dc739","#3ac739","#39c75c","#39c77f"];
          primeraLetra.style.color = coloresDegradado[Math.floor(Math.random() * coloresDegradado.length)];
          segundaLetra.style.color = coloresDegradado[Math.floor(Math.random() * coloresDegradado.length)];
          terceraLetra.style.color = coloresDegradado[Math.floor(Math.random() * coloresDegradado.length)];
      }, 2000);
}())
      