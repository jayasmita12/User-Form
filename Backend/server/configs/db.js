const mongoose = require("mongoose")


const connectDB=async()=>{
    try {
        const connect =await mongoose.connect("mongodb+srv://jayasmita:sahu%401234@cluster0.4jtnjoi.mongodb.net/?retryWrites=true&w=majority",{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            // useFindAndModify:false,
            // useCreateindex:true
        }) 
        console.log(`MOngoDB connected SuccessFully ${connect.connection.host}`)  
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
module.exports=connectDB