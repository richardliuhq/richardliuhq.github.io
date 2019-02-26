const HttpProvider = TronWeb.providers.HttpProvider;

const fullNode = new HttpProvider('https://api.shasta.trongrid.io');
const solidityNode = new HttpProvider('https://api.shasta.trongrid.io');
const eventServer = 'https://api.shasta.trongrid.io/';
const privateKey = '5D924AB88193ED404CAFA8CC5E55DE41E0E37490D42A6C6CA993FEEA50349862';


const checkTronWeb = async () => {
    const tronWeb = new TronWeb(
        fullNode,
        solidityNode,
        eventServer,
        privateKey
    );

    const nodes = await tronWeb.isConnected();

    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    var tronlinkstatus = document.getElementById("TronLink");

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    if (!!window.tronWeb && window.tronWeb.ready) {
    }else if (!window.tronWeb.ready){
       // Popup warning
        modal.style.display = "block";
    }
};

checkTronWeb();
