do {
        var kaina = prompt("Kokia prekės kaina?")
    kaina = Number(kaina)
    } while(isNaN(kaina) || kaina <= 0)

    console.log("Prekės kaina su PVM: " + kaina + "€")

    var PVM = kaina * 0.21
    console.log("PVM " + (PVM.toFixed(2)) + "€")

    console.log("Prekės kaina be PVM: " + ((kaina - PVM).toFixed(2)) + "€")