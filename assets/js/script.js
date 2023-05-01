$(document).ready(function(){

    $('#select').on('change', function(){
        var selectTemp = '#' + $(this).val();
        
        $('#temporadas').children('div').hide();
        $('#temporadas').children(selectTemp).show();
    });
});

const temporada1 = [
    {
        a: "https://sinalpublico.com/player3/server5http2hlb.php?vid=DEMOSLYRKMTSNYBAT01EP01",
        imgicon: "assets/images/episodes/icon-play.svg",
        img: "assets/images/episodes/episodio1.jpg",
        title: "1. Crueldade",
        description: "Depois de vender carvão na cidade, ao voltar para casa, Tanjiro descobre que sua família foi assassinada. Só uma de suas irmãs, Nezuko, sobreviveu, mas algo diferente aconteceu com ela."
    },

    {
        a: "https://sinalpublico.com/player3/server5http2hlb.php?vid=DEMOSLYRKMTSNYBAT01EP02",
        imgicon: "assets/images/episodes/icon-play.svg",
        img: "assets/images/episodes/episodio2.jpg",
        title: "2. Sakonji Urokodaki, o treinador",
        description: "Tanjiro e Nezuko decidem ir para o Monte Sagiri. No caminho até lá, Tanjiro sente cheiro de sangue vindo de um templo, onde ele se depara com uma cena inusitada."
    },

    {
        a: "https://sinalpublico.com/player3/server5http2hlb.php?vid=DEMOSLYRKMTSNYBAT01EP03",
        imgicon: "assets/images/episodes/icon-play.svg",
        img: "assets/images/episodes/episodio3.jpg",
        title: "3. Sabito e Makomo",
        description: "Orientado por Sakonji, Tanjiro treina pesado para se tornar um membro do Esquadrão de Caçadores de Demônios. Porém, antes, ele precisa passar na Seleção Final."
    },

    {
        a: "https://sinalpublico.com/player3/server5http2hlb.php?vid=DEMOSLYRKMTSNYBAT01EP04",
        imgicon: "assets/images/episodes/icon-play.svg",
        img: "assets/images/episodes/episodio4.jpg",
        title: "4. Seleção final",
        description: "A Seleção Final foi iniciada. Tanjiro e os outros candidatos devem sobreviver e lutar durante sete dias em meio aos demônios que foram capturados pelos espadachins do Esquadrão."
    },

    {
        a: "https://sinalpublico.com/player3/server5http2hlb.php?vid=DEMOSLYRKMTSNYBAT01EP05",
        imgicon: "assets/images/episodes/icon-play.svg",
        img: "assets/images/episodes/episodio5.jpg",
        title: "5. Meu próprio aço",
        description: "Tanjiro e outros quatro sobreviveram na Seleção Final. Depois de ganhar uma nova espada, ele recebe ordens para cumprir a primeira missão como Caçador de Demônios."
    },

    {
        a: "https://sinalpublico.com/player3/server5http2hlb.php?vid=DEMOSLYRKMTSNYBAT01EP06",
        imgicon: "assets/images/episodes/icon-play.svg",
        img: "assets/images/episodes/episodio6.jpg",
        title: "6. O espadachim que acompanhou um demônio",
        description: "Na sua primeira missão, Tanjiro vai até uma aldeia ao noroeste. Lá, ele conhece Kazumi, mas sua namorada desapareceu sem deixar vestígios, e Tanjiro tentará solucionar o desaparecimento."
    },

    {
        a: "https://sinalpublico.com/player3/server5http2hlb.php?vid=DEMOSLYRKMTSNYBAT01EP07",
        imgicon: "assets/images/episodes/icon-play.svg",
        img: "assets/images/episodes/episodio7.jpg",
        title: "7. Muzan Kibutsuji",
        description: "Tanjiro mergulha em um pântano para enfrentar um demônio que se dividiu em três e que se recusa a passar informações sobre Muzan Kibutsuji, causando um grande alvoroço."
    },

    {
        a: "https://sinalpublico.com/player3/server5http2hlb.php?vid=DEMOSLYRKMTSNYBAT01EP08",
        imgicon: "assets/images/episodes/icon-play.svg",
        img: "assets/images/episodes/episodio8.jpg",
        title: "8. O aroma do sangue encantado",
        description: "Em uma nova missão, Tanjiro vai à agitada região de Asakusa, em Tóquio, para encontrar o demônio que se esconde na multidão."
    },

    {
        a: "https://sinalpublico.com/player3/server5http2hlb.php?vid=DEMOSLYRKMTSNYBAT01EP09",
        imgicon: "assets/images/episodes/icon-play.svg",
        img: "assets/images/episodes/episodio9.jpg",
        title: "9. O demônio da Temari e o demônio da flecha",
        description: "Ao se esconder em uma casa oculta graças a um feitiço de Yushiro, Tanjiro protege seus habitantes de um demônio enviado por Muzan Kibutsuji."
    },

    {
        a: "https://sinalpublico.com/player3/server5http2hlb.php?vid=DEMOSLYRKMTSNYBAT01EP10",
        imgicon: "assets/images/episodes/icon-play.svg",
        img: "assets/images/episodes/episodio10.jpg",
        title: "10. Juntos para sempre",
        description: "Nezuko fica cara a cara com Susamaru e seu jogo mortal de bolas temari, mas Tamayo intervém com um feitiço antes de a batalha se acirrar."
    },

    {
        a: "https://sinalpublico.com/player3/server5http2hlb.php?vid=DEMOSLYRKMTSNYBAT01EP11",
        imgicon: "assets/images/episodes/icon-play.svg",
        img: "assets/images/episodes/episodio11.jpg",
        title: "11. Mansão Tsuzumi",
        description: "Na missão seguinte, Tanjiro viaja para o sul-sudeste. No caminho, ele encontra Zenitsu Agatsuma, outro espadachim que sobreviveu à Seleção Final."
    },

    {
        a: "https://sinalpublico.com/player3/server5http2hlb.php?vid=DEMOSLYRKMTSNYBAT01EP12",
        imgicon: "assets/images/episodes/icon-play.svg",
        img: "assets/images/episodes/episodio12.jpg",
        title: "12. O javali mostra suas presas, Zenitsu dorme",
        description: "Zenitsu está apavorado dentro de uma casa giratória. Tanjiro enfrenta um demônio tocador de tambor e um estranho homem com uma espada e uma máscara de porco."
    },

    {
        a: "https://sinalpublico.com/player3/server5http2hlb.php?vid=DEMOSLYRKMTSNYBAT01EP13",
        imgicon: "assets/images/episodes/icon-play.svg",
        img: "assets/images/episodes/episodio13.jpg",
        title: "13. Algo mais importante que a vida",
        description: "A cada toque do tambor, a casa gira. Ferido, Tanjiro luta contra o feroz ataque de Kyogai."
    },

    {
        a: "https://sinalpublico.com/player3/server5http2hlb.php?vid=DEMOSLYRKMTSNYBAT01EP14",
        imgicon: "assets/images/episodes/icon-play.svg",
        img: "assets/images/episodes/episodio14.jpg",
        title: "14. A casa do brasão da Família Wisteria",
        description: "Tanjiro consegue sair da casa, encontra Zenitsu machucado e é confrontado pelo homem com a máscara de porco."
    },

    {
        a: "https://sinalpublico.com/player3/server5http2hlb.php?vid=DEMOSLYRKMTSNYBAT01EP15",
        imgicon: "assets/images/episodes/icon-play.svg",
        img: "assets/images/episodes/episodio15.jpg",
        title: "15. Monte Natagumo",
        description: "Na companhia de Inosuke e Zenitsu, Tanjiro vai para o norte-nordeste para mais uma missão. Eles chegam ao Monte Natagumo, que está tomado por teias de aranha."
    },

    {
        a: "https://sinalpublico.com/player3/server5http2hlb.php?vid=DEMOSLYRKMTSNYBAT01EP16",
        imgicon: "assets/images/episodes/icon-play.svg",
        img: "assets/images/episodes/episodio16.jpg",
        title: "16. Deixando alguém ir primeiro",
        description: "Os outros Caçadores de Demônios estão sob o domínio da aranha. Tanjiro e Inosuke precisam encontrar uma forma de controlar os companheiros sem machucá-los."
    },

    {
        a: "https://sinalpublico.com/player3/server5http2hlb.php?vid=DEMOSLYRKMTSNYBAT01EP17",
        imgicon: "assets/images/episodes/icon-play.svg",
        img: "assets/images/episodes/episodio17.jpg",
        title: "17. Seja mestre de uma única coisa",
        description: "Tanjiro enfrenta a aranha mãe e fica sabendo de um demônio controlado diretamente por Muzan Kibutsuji que pode guardar o segredo para transformar Nezuko em humana."
    },

    {
        a: "https://sinalpublico.com/player3/server5http2hlb.php?vid=DEMOSLYRKMTSNYBAT01EP18",
        imgicon: "assets/images/episodes/icon-play.svg",
        img: "assets/images/episodes/episodio18.jpg",
        title: "18. Um laço falso",
        description: "Ao enfrentar a aranha pai junto com Inosuke, Tanjiro é lançado para longe, onde enfrenta o jovem demônio Rui."
    },

    {
        a: "https://sinalpublico.com/player3/server5http2hlb.php?vid=DEMOSLYRKMTSNYBAT01EP19",
        imgicon: "assets/images/episodes/icon-play.svg",
        img: "assets/images/episodes/episodio19.jpg",
        title: "19. Hinokami",
        description: "Giyu Tomioka, um exímio espadachim do Esquadrão de Caçadores de Demônios, chega. Maravilhado com suas impressionantes habilidades, Inosuke o desafia para um duelo."
    },

    {
        a: "https://sinalpublico.com/player3/server5http2hlb.php?vid=DEMOSLYRKMTSNYBAT01EP20",
        imgicon: "assets/images/episodes/icon-play.svg",
        img: "assets/images/episodes/episodio20.jpg",
        title: "20. Família de faz de conta",
        description: "Atacado por Rui, Tanjiro se prepara para o pior, até que a lembrança do pai dançando a Kagura inspira seu contra-ataque."
    },

    {
        a: "https://sinalpublico.com/player3/server5http2hlb.php?vid=DEMOSLYRKMTSNYBAT01EP21",
        imgicon: "assets/images/episodes/icon-play.svg",
        img: "assets/images/episodes/episodio21.jpg",
        title: "21. Contra as regras da corporação",
        description: "Ao ver Tanjiro ferido tentando defender Nezuko, Rui se recorda da única coisa que deseja ter, mas não tem: uma família de verdade."
    },

    {
        a: "https://sinalpublico.com/player3/server5http2hlb.php?vid=DEMOSLYRKMTSNYBAT01EP22",
        imgicon: "assets/images/episodes/icon-play.svg",
        img: "assets/images/episodes/episodio22.jpg",
        title: "22. Mestre da mansão",
        description: "Tanjiro é levado até os Hashira, os mais poderosos espadachins do Esquadrão de Caçadores de Demônios, e enfrenta um julgamento."
    },

    {
        a: "https://sinalpublico.com/player3/server5http2hlb.php?vid=DEMOSLYRKMTSNYBAT01EP23",
        imgicon: "assets/images/episodes/icon-play.svg",
        img: "assets/images/episodes/episodio23.jpg",
        title: "23. Reunião dos pilares",
        description: "Apesar da decisão de Ubuyashiki de aceitar Tanjiro e Nezuko no Esquadrão, Sanemi tenta despertar a sede de sangue demoníaca de Nezuko."
    },

    {
        a: "https://sinalpublico.com/player3/server5http2hlb.php?vid=DEMOSLYRKMTSNYBAT01EP24",
        imgicon: "assets/images/episodes/icon-play.svg",
        img: "assets/images/episodes/episodio24.jpg",
        title: "24. Treino de reabilitação",
        description: "Tanjiro e outros membros do Esquadrão são enviados à casa de Shinobu, onde são tratados. Duas semanas depois, ele e Inosuke iniciam o Treinamento de Reabilitação."
    },

    {
        a: "https://sinalpublico.com/player3/server5http2hlb.php?vid=DEMOSLYRKMTSNYBAT01EP25",
        imgicon: "assets/images/episodes/icon-play.svg",
        img: "assets/images/episodes/episodio25.jpg",
        title: "25. Kanao Tsuyuri, a Tsuguko",
        description: "Tanjiro treina duro para manter a Respiração de Concentração Total o dia inteiro. Com medo de ficar para trás, Zenitsu e Inosuke também voltam a treinar."
    },

    {
        a: "https://sinalpublico.com/player3/server5http2hlb.php?vid=DEMOSLYRKMTSNYBAT01EP26",
        imgicon: "assets/images/episodes/icon-play.svg",
        img: "assets/images/episodes/episodio26.jpg",
        title: "26. Nova missão",
        description: "Muzan Kibutsuji convoca os demônios inferiores e atribui uma missão ao único sobrevivente. Kasugai, o corvo de Tanjiro, anuncia a nova missão."
    }

    // {
    //     a: "https://sinalpublico.com/player3/server5http2hlb.php?vid=DEMOSLYRKMTSNYBAT01EP",
    //     imgicon: "assets/images/episodes/icon-play.svg",
    //     img: "assets/images/episodes/episodio.jpg",
    //     title: "",
    //     description: ""
    // },
];


var list = document.querySelector(".temporada1");
function addCard(temporada1) {
    for(let i = 0; i < temporada1.length; i++) {
        //3. Criar uma função que rendereize episódio a episódio
        renderCard (temporada1[i]);}}
addCard(temporada1)
function renderCard(episodio) {
    var listItem = document.createElement('li');
    listItem.classList.add("card");

    listItem.innerHTML = `
    <div class="col-1 box-video">
        <a href="${episodio.a}" target="_blank"><img src="${episodio.imgicon}" class="icon-play" alt="Ícone de play"></a>
        <a href="${episodio.a}" target="_blank"><img src="${episodio.img}" class="img-ep" alt="${episodio.title}"></a>
    </div>
    <div class="card-body">
        <h4>${episodio.title}</h4>
        <p>${episodio.description}</p>
        <div>
            <img src="assets/images/icon-clock.svg" alt="ícone de relógio" class="d-inline">
            <p class="d-inline">48min</p>
        </div>
    </div>
    `
    list.appendChild(listItem);}


const temporada2 = [
    {
        a: "https://sinalpublico.com/player3/server5http2hlb.php?vid=DEMOSLYRKMTSNYBAT01EP01",
        imgicon: "assets/images/episodes/icon-play.svg",
        img: "assets/images/episodes/episodio1.jpg",
        title: "1. Crueldade",
        description: "Depois de vender carvão na cidade, ao voltar para casa, Tanjiro descobre que sua família foi assassinada. Só uma de suas irmãs, Nezuko, sobreviveu, mas algo diferente aconteceu com ela."
    }
];
var list = document.querySelector(".temporada2");
function addCard(temporada2) {
    for(let i = 0; i < temporada2.length; i++) {
        renderCard (temporada2[i]);}}
addCard(temporada2)
function renderCard(episodio) {
    const listItem = document.createElement('li');
    listItem.classList.add("card");

    listItem.innerHTML = `
    <div class="col-1 box-video">
        <a href="${episodio.a}" target="_blank"><img src="${episodio.imgicon}" class="icon-play" alt="Ícone de play"></a>
        <a href="${episodio.a}" target="_blank"><img src="${episodio.img}" class="img-ep" alt="${episodio.title}"></a>
    </div>
    <div class="card-body">
        <h4>${episodio.title}</h4>
        <p>${episodio.description}</p>
        <div>
            <img src="assets/images/icon-clock.svg" alt="ícone de relógio" class="d-inline">
            <p class="d-inline">48min</p>
        </div>
    </div>
    `
    list.appendChild(listItem);}
