
    import mongoose from 'mongoose';

    const TestSchemaSchema = new mongoose.Schema(

      {name:{type:String,required:true},lastName:{type:String,required:true}}
      , { versionKey: false }
    );
    const id_65a91b528299c75b1c6317b9 = mongoose.model("65a91b528299c75b1c6317b9", TestSchemaSchema);

    export default id_65a91b528299c75b1c6317b9;
    