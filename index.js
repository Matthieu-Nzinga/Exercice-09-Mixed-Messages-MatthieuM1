const message = ["je suis","un eleve","de la kinshasa digital academy","a la cohort","2023-2024","dev soir","et notre","coach etait","sacre mbiku"]

function genererMessage(){
  const index = Math.floor(Math.random() * message.length)
  console.log(message[index])
}

genererMessage();