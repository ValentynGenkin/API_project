
    import mongoose from 'mongoose';

    const TestSchema1Schema = new mongoose.Schema(

      {3:{4:{type:Boolean,required:True},5:{type:String}},test:{1:{type:String},2:{type:Number}}}
      , { versionKey: false }
    );
    const id_65a91b528299c75b1c6317b9 = mongoose.model("65a91b528299c75b1c6317b9", TestSchema1Schema);

    export default id_65a91b528299c75b1c6317b9;
    