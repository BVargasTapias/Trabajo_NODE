var fs = require ('fs')
var folder = 'ADSO'
var ruta = './ADSO/Trabajo.txt'
var contenido = 'Por fin pude'
var archivo = 'Trabajo.txt'

if (!fs.existsSync(folder)){
    fs.mkdirSync(folder)
}

else if (!fs.existsSync(ruta)){
    fs.writeFileSync(ruta, contenido, 'utf8')
    
}

else if (fs.existsSync(ruta)){
    fs.unlinkSync(ruta)
}

else{
    fs.rmdirSync(folder)
}


 
