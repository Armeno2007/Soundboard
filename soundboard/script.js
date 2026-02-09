const sounds = [
    {label: "Sounds1", file: "sounds/music1.mp3"},
    {label: "Sounds2", file: "sounds/music2.mp3"},
    {label: "Sounds3", file: "sounds/music3.mp3"},
    {label: "Sounds4", file: "sounds/music4.mp3"},
    {label: "Sounds5", file: "sounds/music5.mp3"},
    {label: "Sounds6", file: "sounds/music6.mp3"},
]

let currentAudio = null
const ButtonContainer = document.getElementById("btnContainer")
const PauseContainer = document.getElementById("ControllContainer")  

sounds.forEach(sound =>{
    const Createbutton = document.createElement("button")
    Createbutton.textContent = sound.label
    Createbutton.classList.add("SoundButtons")

    Createbutton.addEventListener("click", function(){
     
    if(currentAudio){
        currentAudio.pause()
        currentAudio.currentTime = 0
    }   

    const SoundPlay = new Audio(sound.file)
    currentAudio = SoundPlay

    SoundPlay.play()

})
    ButtonContainer.appendChild(Createbutton)
})

const PauseButton = document.createElement("button")
      PauseButton.classList.add("PauseButton")

PauseButton.innerHTML = "Pause"
    PauseButton.addEventListener("click", function(){
    currentAudio.pause()
})   

PauseContainer.appendChild(PauseButton)







