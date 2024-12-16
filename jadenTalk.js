function jadenTalk(text) {

  const result = text.replace(/[.,\/#!$%\^&\*;:{}=\-_~()]/g, "")
  return result.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
}

console.log(jadenTalk("How can mirrors be real, if our eyes aren't real?"))
module.exports = jadenTalk