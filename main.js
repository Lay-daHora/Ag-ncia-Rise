    $('header ul li a').click(function(e) {
        e.preventDefault();
        var id = $(this).attr('href');
            targetOffset = $(id).offset().top;
        $('html, body').animate({
            scrollTop: targetOffset - 60
        }, 500)
    })

    $(function(){
        $("#frase1").hide();
        $("#frase2").hide();
        $("#frase3").hide();
      });
      
      setInterval(function(){
          $("#frase1").fadeIn(2000).delay(5000);
          $("#frase1").fadeOut(2000).delay(5000)
      }, 2000);

      setInterval(function(){
        $("#frase2").fadeIn(2000).delay(5000);
        $("#frase2").fadeOut(2000).delay(5000)
    }, 2000);

    setInterval(function(){
        $("#frase3").fadeIn(2000).delay(5000);
        $("#frase3").fadeOut(2000).delay(5000)
    }, 2000);
    

    const iconeFazendeiro = document.querySelector("#fazendeiro");
    const iconeLacta = document.querySelector("#lacta");
    const iconePantys = document.querySelector("#pantys");
    var fazendeniroContent = $(".projetos-fazendeiro");
    var lactaContent = $(".projetos-lacta");
    var pantysContent = $(".projetos-pantys");

    document.addEventListener('click', function (e) {
        e.preventDefault();
        const target = e.target;
        if (fazendeniroContent.hasClass("activefazendeiro")) {
            if (target === iconeFazendeiro) {
                fazendeniroContent.removeClass("activefazendeiro");
            }
        } else {
            if (target === iconeFazendeiro) {
            fazendeniroContent.addClass("activefazendeiro")
            }
        }   
    })

    document.addEventListener('click', function (e) {
        e.preventDefault();
        const target = e.target;
        if (lactaContent.hasClass("activelacta")) {
            if (target === iconeLacta) {
                lactaContent.removeClass("activelacta");
            }
        } else {
            if (target === iconeLacta) {
            lactaContent.addClass("activelacta")
            }
        }   
    })

    document.addEventListener('click', function (e) {
        e.preventDefault();
        const target = e.target;
        if (pantysContent.hasClass("activepantys")) {
            if (target === iconePantys) {
                pantysContent.removeClass("activepantys");
            }
        } else {
            if (target === iconePantys) {
            pantysContent.addClass("activepantys");
            }
        }   
    })

