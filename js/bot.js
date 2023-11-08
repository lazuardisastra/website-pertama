const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")

let init = 0

const botSay = (data) => {
    return [
        "Halo selamat datang di Arid bot. Siapa nama kamu?",
        `Salam kenal ${data?.nama}. Hobi kamu apa?`,
        `wah sama dong, aku juga hobi ${data?.hobi}, kalau umur kamu berapa?`,
        `Oh umur kamu ${data?.umur}, Punya pacar ga?`,
        `Ohh ${data?.pacar}. Kalau gtu, salam kenal juga ya dari Ardi bot`
    ]
}

pertanyaan.innerHTML = botSay()[0]

let userData = []

function botStart() {
    if (jawaban.value.length < 1) return alert("Silahkan isi jawaban kamu")
    init++
    if (init === 1) {
        botDelay({nama: jawaban.value})
    } else if (init === 2) {
        botDelay({hobi: jawaban.value})
    } else if (init === 3) {
        botDelay({umur: jawaban.value})
    } else if (init === 4 ){
        botDelay({pacar: jawaban.value})
    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    loaders.style.display = "block"
    container[0].style.filter = "blur(8px)" 
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        loaders.style.display = "none"
        container[0].style.filter = "none" 
    }, [1000])
    userData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `Makasih ya ${userData[0]} udah ngobrol, lain kali kita main ${userData[1]} ya`
    jawaban.value = "Selamat Tinggal"
}

function botEnd() {
    alert(`Terimakasih ${userData[0]}, sudah ngobrol. ${userData[0]} akan balik ke halaman utama`)
    window.location.reload()
}