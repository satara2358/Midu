const canvas = document.getElementById('canvas')

// es inferencia de typesript dentro del if 
if(canvas instanceof HTMLCanvasElement){
  const ctx = canvas.getContext('2d')
}