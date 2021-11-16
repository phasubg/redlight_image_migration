require('dotenv').config()
const { DataTypes, Model } = require('sequelize');
const { sequelize ,SnapData} = require('./db');
const Client = require('ftp');
const client = new Client();
const path = require('path');
(async () => {
    let log = await SnapData.findAll({
        limit:10
    });
    client.on('ready', function() {
        log.map(l =>{
            let fullpath = l.image_path_bf
            let filename = path.basename(fullpath.replace(/\\/ig,"/").replace(":","-").replace(/\//ig,"-"))
            client.mkdir(process.env.FTP_PREFIC,(err)=>{})
            client.put(fullpath, process.env.FTP_PREFIC +'/'+ filename, function(err) {
                if (err) console.log("err", process.env.FTP_PREFIC +'/'+filename,err)
                else console.log("put " + fullpath + " succeeded");
            });
        })
    })
    try {
        client.connect({
            host : process.env.FTP_ENDPOINT,
            port : process.env.FTP_PORT,
            user : process.env.FTP_USERNAME,
            password : process.env.FTP_PASSWORD,
    
        });
    } catch (error) {
        console.log("error",error.message);
    }
})();