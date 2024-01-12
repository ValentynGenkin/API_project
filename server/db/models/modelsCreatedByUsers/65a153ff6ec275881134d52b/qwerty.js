
    import mongoose from 'mongoose';

    const qwertySchema = new mongoose.Schema(

      {name:{type:String,required:true},lastName:{type:String,required:true}}

    );
    const id_65a153ff6ec275881134d52b = mongoose.model("65a153ff6ec275881134d52b", qwertySchema);

    export default id_65a153ff6ec275881134d52b;
    