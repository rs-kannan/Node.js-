const {format} = require('date-fns')
const {v4: uuid} = require('uuid')
const fs = require('fs')
const fspromise = require('fs').promises
const path = require('path')
//const { log } = require('console')

const logEvents = async(message) =>{
    const dateTime = `${format(new Date(),'ddMMyyy\tHH:mm:ss')}`
    const logItem = `${dateTime}\t${uuid()}\t${message}\n}`
    console.log(logItem)
    try{
        if (!fs.existsSync(path.join(__dirname,'logs'))){
          await  fspromise.mkdir(path.join(__dirname,'logs'))
        }
        await fspromise.appendFile(path.join(__dirname,'logs','EventFile.txt'),logItem)
    }catch (err){
        console.log("error")
    }
}

module.exports = logEvents 
