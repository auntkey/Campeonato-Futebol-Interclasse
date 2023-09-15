function abir() {

    var grupos = [
            { grupo: "França", pontos: 0 },
            { grupo: "Brasil", pontos: 1 },
            { grupo: "Portugal", pontos: 0 },
            { grupo: "Inglaterra", pontos: 2 },
            { grupo: "Alemanha", pontos: 0 },
            { grupo: "Argentina", pontos: 3 },
            { grupo: "Itália", pontos: 0 }       
            ];
    
    var gruposF = [
            { grupo: "As Combatentes", pontos: 0 },
            { grupo: "As Artilheiras", pontos: 2 },
            { grupo: "As Indestrutíveis", pontos: 3 },
            { grupo: "As Malvadas", pontos: 0 },
            { grupo: "As Revolucionárias", pontos: 1 },
            ];
    
    grupos.sort(function(a, b) {
    return b.pontos - a.pontos;
    });
    
    gruposF.sort(function(a, b) {
    return b.pontos - a.pontos;
    });
    
    var column1 = document.querySelector("#column1");
    var column2 = document.querySelector("#column2"); 
    var htmlToAdd1 = "";
    var htmlToAdd2 = "";
    
    for (var i = 0; i < grupos.length; i++) {
            var rank = i + 1;
            var grupoHTML = "<p><span class='rank'>" + rank + ".</span> <span class='grupos'>" + grupos[i].grupo + ":</span> <span class='pontos'>" + grupos[i].pontos + " pontos</span></p>";
    
            if (i === 0) {
                grupoHTML = "<p><span class='rank fstplace'>" + rank + ".</span> <span class='grupos'>" + grupos[i].grupo + ":</span> <span class='pontos'>" + grupos[i].pontos + " pontos</span></p>";
            } else if (i === 1) {
                grupoHTML = "<p><span class='rank sndplace'>" + rank + ".</span> <span class='grupos'>" + grupos[i].grupo + ":</span> <span class='pontos'>" + grupos[i].pontos + " pontos</span></p>";
            } else if (i === 2) {
                grupoHTML = "<p><span class='rank tdhplace'>" + rank + ".</span> <span class='grupos'>" + grupos[i].grupo + ":</span> <span class='pontos'>" + grupos[i].pontos + " pontos</span></p>";
            }
    
            htmlToAdd1 += grupoHTML;
        }
    
        for (var i = 0; i < gruposF.length; i++) {
            var rank = i + 1;
            var grupoHTML = "<p><span class='rank'>" + rank + ".</span> <span class='grupos'>" + gruposF[i].grupo + ":</span> <span class='pontos'>" + gruposF[i].pontos + " pontos</span></p>";
    
            if (i === 0) {
                grupoHTML = "<p><span class='rank fstplace'>" + rank + ".</span> <span class='grupos'>" + gruposF[i].grupo + ":</span> <span class='pontos'>" + gruposF[i].pontos + " pontos</span></p>";
            } else if (i === 1) {
                grupoHTML = "<p><span class='rank sndplace'>" + rank + ".</span> <span class='grupos'>" + gruposF[i].grupo + ":</span> <span class='pontos'>" + gruposF[i].pontos + " pontos</span></p>";
            } else if (i === 2) {
                grupoHTML = "<p><span class='rank tdhplace'>" + rank + ".</span> <span class='grupos'>" + gruposF[i].grupo + ":</span> <span class='pontos'>" + gruposF[i].pontos + " pontos</span></p>";
            }
    
            htmlToAdd2 += grupoHTML;
        }
    
        column1.innerHTML = htmlToAdd1;
        column2.innerHTML = htmlToAdd2;
    }
