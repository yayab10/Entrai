        // Créer un élément h1
        var h1 = document.createElement("h1");
        h1.textContent = "Hello World";
        h1.className = "monH1";
        // Afficher le h1
        document.body.appendChild(h1);

        // Créer un paragraphe
        var paragraphe = document.createElement("p");
        paragraphe.textContent = "Je suis Yaya BALDE, j'ai 22 ans. Je suis développeur web et j'aime fairee du sport";
        paragraphe.id = "presentation";
        // Afficher le paragraphe
        document.body.appendChild(paragraphe);

        // Insérer le paragraphe avant l'élément h1
        h1.parentNode(paragraphe, h1)