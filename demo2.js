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
        let argsBox = document.createElement("div");
        argsBox.setAttribute("class", "alert alert-success" );
        argsBox.innerHTML = "TronLink is ready to go. your wallet accounbt address: <strong>" + window.tronWeb.defaultAddress.base58 + "</strong>";
        document.getElementById("status").appendChild(argsBox);
    }else if (!window.tronWeb.ready){
        let status = document.getElementById("status");
        status.innerHTML =    "<span>Please install and login to TronLink . you may click <a href = 'https://chrome.google.com/webstore/detail/tronlink/ibnejdfjmmkpcnlpebklmnkoeoihofec'  target= '_blank'>here</a></span>";
        modal.style.display = "block";
    }
};

checkTronWeb();

