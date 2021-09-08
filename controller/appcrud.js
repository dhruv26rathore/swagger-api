const Appcrud = require("../models/appcrud");


//Create Api
exports.createapp =  (req,res) => {
    let body = req.body;
    let appcrud = new Appcrud(body);
    appcrud.save().then((appcrud) => {
    res.send({
    message: 'successfully submitted'
    })
    }).catch((err) => {
    res.send(err);
    });
    };

//Get all Api 
exports.getapps = (req,res) =>{
    Appcrud.find().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.json("Something went worng" + err)
    })
}

// Get Particular App
exports.getoneapp = (req,res)=>{
Appcrud.findById(req.params.id).then((data)=>{
    res.send(data);
}).catch((err)=>{
    res.json("something went worng" + err)
});
}

//Update Api
exports.updateapp = (req,res)=>{
Appcrud.findByIdAndUpdate(req.params.id,req.body,(err,appcrud)=>{
    if(err){
       return res.status(500).json({message:err})
    }
    else if(!appcrud){
        return res.status(404).json({message:"Data not found"}) 
    }
    else{
        appcrud.save((err,savedApp)=>{
            if(err){
                return res.status(500).json({message:err}) 
            }
            else{
                return res.status(200).json({message:"data update successfully"})
            }
        })
    }
})
}


exports.deleteapp = (req,res)=>{
    Appcrud.findByIdAndDelete(req.params.id,(err,appcrud)=>{
        if(err){
            return res.status(500).json({message:err})
        }
        else if(!appcrud){
            return res.status(404).json({message:"App not found"})
        }
        else{
            return res.status(200).json({message:"App Deleted Successfully"})
        }
    })
}