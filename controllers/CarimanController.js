const connection = require('../connection/CarimanConnection');
const Format = require('../tools/format');

module.exports.getCariman = async(req, res)=>{
        try{
            console.log("function starting")
            let cariman = await connection.getCariman(req.query);

            if(!cariman.bindings.length){
                return res.status(200).json({
                    data:[],
                    message: "Data tidak ditemukan"
                });
            }

            cariman = cariman.bindings.map((tanaman)=>Format(tanaman));

            if(req.params.id){
                let tanaman = cariman.filter((tanaman)=>{
                    return tanaman.id == req.params.id
                });
                res.status(200).json({
                    data:tanaman[0],
                    message: tanaman.length ? 'Data tanaman berhasil didapatkan' : 'Tidak ada hasil dari pencarian'
                })
            }else{
                res.status(200).json({
                    data: cariman,
                    message: "Menampilkan semua tanaman"
                })
            }
        }catch(err){
            res.status(400).json(err);
        }
}

module.exports.getSearch = async(req, res)=>{
    try{
        let inputs = req.query.search.split(" ");
        let outputs = []
        // Query data dari connection
        await Promise.all(
            inputs.map(async (input)=>{
                let cariman= await connection.getSearch({search: input});
                cariman = cariman.bindings.map((tanaman)=>Format(tanaman));
                cariman.map(async (tanaman)=>{
                    const find = outputs.find(({id})=> id === tanaman.id)
                    if(!find){
                        outputs.push(tanaman);
                    }
                })
            })
        )
        if(!outputs.length){
            return res.status(200).json({
                data:[],
                message: "Data tidak ditemukan"
            });
        }else{
            res.status(200).json({
                data: outputs,
                message: "Menampilkan semua tanaman"
            })
        }
        
    }catch(err){
        res.status(400).json(err);
    }
}

module.exports.getSuggestion = async(req, res)=>{
    try{
        // Query data dari connection
        let cariman = await connection.getSuggestion(req.query);

        if(!cariman.bindings.length){
            return res.status(200).json({
                data:[],
                message: "Data tidak ditemukan"
            });
        }

        cariman = cariman.bindings.map((tanaman)=>Format(tanaman));
        res.status(200).json({
            data: cariman,
            message: "Menampilkan semua tanaman"
        })

    }catch(err){
        res.status(400).json(err);
    }   
}