//importa o model aqui 
import pointRefil from "../Models/MapsPointer.js"

class MapController{

    static async GetPoints(req,res){
        try{
            //pq ta voltando vazio 
            const points = await pointRefil.find();
            console.log(points)
            res.status(200).json({ points})
        }catch(Err){
         res.status(406).send({error: 'Error on load points'})
         console.log(Err)
        }
    }
}

export default MapController