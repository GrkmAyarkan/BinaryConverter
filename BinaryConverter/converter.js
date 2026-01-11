function binaryConverter() {
    //Input alma
    const inputBinary = document.getElementById("binaryInput").value;

    // 1. Binary kontrolü
    if (!/^[01]+$/.test(inputBinary)) {
        document.getElementById("output").textContent =
            "Hatalı giriş! Sadece 0 ve 1 girilebilir.";
        return; // FONKSİYONU DURDURUR
    }

    // 2. ŞART SAĞLANDIYSA DEVAM
    //Şimdilik örnek olarak farklı bir işlem yapılacak 
    let outputNumber = Number(inputBinary)*2

    //Output verme
    document.getElementById("output").textContent = outputNumber;
}