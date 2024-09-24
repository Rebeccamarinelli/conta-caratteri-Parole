window.addEventListener('DOMContentLoaded', function(){

    const btnChar = document.getElementById('counterChar');
    const caratteriInner = document.getElementById('resultChar')

    const btnWords = document.getElementById('counterWords');
    const paroleInner = document.getElementById('resultWord');

    const btnParaTitoli = document.getElementById('counterTitlePara');
    const paraTitoliInner = document.getElementById('resultTitlePara');
  
    const select =document.getElementById('select')
    const vocalInner = document.getElementById('countVocalContainer')
    const BtnVocal = document.getElementById('countVocal')

    let indexActive = 0;
    const articles = document.querySelectorAll('article') 
    const btnNew = document.getElementById('btnNew'); 
    
    let articoloVisibilePar = document.querySelectorAll('.visibile p')
    let articoloVisibileMain = document.querySelectorAll('.visibile h1')
    let articoloVisibileTitolo = document.querySelectorAll('.visibile h2')

    counterCharAndWords(articoloVisibilePar, articoloVisibileMain, articoloVisibileTitolo)

    
    btnNew.addEventListener('click', function(){

        paroleInner.innerHTML = 0;
        paraTitoliInner.innerHTML = 0;
        caratteriInner.innerHTML = 0;
        vocalInner.innerHTML = 0;
                
        let articleVisible = document.querySelector('.visibile');
            articleVisible.classList.remove('visibile');
            indexActive++ 
            
            articles[indexActive].classList.add('visibile');
             
            if(indexActive === 2){
                indexActive = -1;  
            }

            articoloVisibilePar = document.querySelectorAll('.visibile p')
            articoloVisibileMain = document.querySelectorAll('.visibile h1')
            articoloVisibileTitolo = document.querySelectorAll('.visibile h2')
    
            counterCharAndWords(articoloVisibilePar, articoloVisibileMain, articoloVisibileTitolo)

            select.value = '';
            
    })
    
    

   
   
    function counterCharAndWords(visibilePar, visibileMain, visibileTitolo){

        let numCharPara = 0;
        let numCharMain = 0;
        let numCharTitolo = 0;

        let stringPara = '';
        let stringMain = '';
        let stringTitolo = '';

        let splitWords1 = '';
        let splitWords2 = '';
        let splitWords3 = '';

        let numberParagraph = 0;
        let numberTitoli = 0;
        let numberMain = 0;


        for (let index = 0; index < visibilePar.length; index++) {
            const paragrafo = visibilePar[index];
            numCharPara += paragrafo.innerHTML.length;
            stringPara += paragrafo.innerHTML;
            splitWords1 = stringPara.split(' ').length;
            numberParagraph = visibilePar.length;
        }
        
        
        
        for (let index = 0; index < visibileMain.length; index++) {
            const main = visibileMain[index];
            numCharMain += main.innerHTML.length
            stringMain += main.innerHTML;
            splitWords2 = stringMain.split(' ').length;
            numberMain = visibileMain.length;
        }
        
        
        
        for (let index = 0; index < visibileTitolo.length; index++) {
            const titolo = visibileTitolo[index];
            numCharTitolo += titolo.innerHTML.length
            stringTitolo += titolo.innerHTML;
            splitWords3 = stringTitolo.split(' ').length;
            numberTitoli = visibileTitolo.length
        }

        const sumChar = numCharPara + numCharMain + numCharTitolo;
        const sumText = stringPara +' '+ stringMain + ' ' + stringTitolo;
        let sumWords = splitWords1 + splitWords2 + splitWords3;

        
        let vocalA = 0;
        let vocalE = 0;
        let vocalI = 0;
        let vocalO = 0;
        let vocalU = 0;


        for (let i = 0; i < sumText.length; i++) {
            let carattere = sumText.charAt(i);
                
                if(carattere === "a"){
                    vocalA++;
                }
                else if(carattere === "e"){
                    vocalE++;
                }
                else if(carattere === "i"){
                    vocalI++;
                }
                else if(carattere === "o"){
                    vocalO++;
                }
                else if(carattere === "u"){
                    vocalU++;
                }
            
        }

        let sumVocals = vocalA + vocalE + vocalI + vocalO + vocalU;

        const countP = 'numero paragrafi: ' + numberParagraph + '<br>';
        const countT = 'numero Titoli: ' + (numberMain + numberTitoli);

        console.log(sumWords)
        console.log(countP,countT)



        select.addEventListener('change', function(){   
            let valueSelected = select.value;       
            vocalInner.innerHTML = 0;

            BtnVocal.addEventListener('click', function(){

                if(valueSelected == 'a' && vocalA != 0){
                    vocalInner.innerHTML = vocalA;
                    console.log(vocalA)
                    
                }else if(valueSelected == 'e' && vocalE != 0){
                    vocalInner.innerHTML = vocalE;
                    console.log(vocalE)
                    
                }else if(valueSelected == 'i' && vocalI != 0){
                    vocalInner.innerHTML = vocalI;
                    console.log(vocalI)
                    
                }else if(valueSelected == 'o' && vocalO != 0){
                    vocalInner.innerHTML = vocalO;
                    console.log(vocalO)
                    
                }else if(valueSelected == 'u' && vocalU != 0){
                    vocalInner.innerHTML = vocalU;
                    console.log(vocalU)
                    
                }else if(valueSelected == 't' && sumVocals != 0){
                    vocalInner.innerHTML = sumVocals;
                    console.log(sumVocals)
                    
                }else{
                    vocalInner.innerHTML = 0;
                     
                }
                
                
            })

            
            
        } )
         
        
        btnChar.addEventListener('click', function(){
            caratteriInner.innerHTML = sumChar;
        })

        btnWords.addEventListener('click', function(){
            paroleInner.innerHTML = sumWords;
        })

        
        btnParaTitoli.addEventListener('click', function(){
            paraTitoliInner.innerHTML = countP + countT
        })

    }


    
   


 




























    
})