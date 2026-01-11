function binaryConverter() {
    //Input alma
    let inputBinary = document.getElementById("binaryInput").value;

    // 1. Binary kontrolü
    if (!/^[01]+$/.test(inputBinary)) {
        document.getElementById("output").textContent =
            "Hatalı giriş! Sadece 0 ve 1 girilebilir.";
        return; // FONKSİYONU DURDURUR
    }

    // 2. ŞART SAĞLANDIYSA DEVAM
    let inputNumbers = inputBinary.split("");
    let outputNumber = 0;
    let katlar = inputBinary.length - 1;
    for (let i = 0; i < inputBinary.length; i++) {
        if (inputNumbers[i] == 1){          
            outputNumber = outputNumber + 2**katlar
        }
        katlar = katlar-1;
    }

    //Output verme
    document.getElementById("output").textContent = outputNumber
}