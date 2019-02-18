const HttpProvider = TronWeb.providers.HttpProvider;

const fullNode = new HttpProvider('https://api.shasta.trongrid.io');
const solidityNode = new HttpProvider('https://api.shasta.trongrid.io');
const eventServer = 'https://api.shasta.trongrid.io/';
const privateKey = '5D924AB88193ED404CAFA8CC5E55DE41E0E37490D42A6C6CA993FEEA50349862';

const app = async () => {
    const tronWeb = new TronWeb(
        fullNode,
        solidityNode,
        eventServer,
        privateKey
    );

    const nodes = await tronWeb.isConnected();
    if (!!window.tronWeb && window.tronWeb.ready) {
        let argsBox = document.createElement("div");
        argsBox.setAttribute("class", "alert alert-success" );
        argsBox.innerHTML = "TronLink is ready to go. your wallet accounbt address: <strong>" + window.tronWeb.defaultAddress.base58 + "</strong>";
        document.getElementById("status").appendChild(argsBox);
    }else if (!window.tronWeb.ready){
        let status = document.getElementById("status");
        status.innerHTML =    "<span>Please install and login to TronLink . you may click <a href = 'https://chrome.google.com/webstore/detail/tronlink/ibnejdfjmmkpcnlpebklmnkoeoihofec'  target= '_blank'>here</a></span>";
    }
};

app();
