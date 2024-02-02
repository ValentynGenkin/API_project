
    import mongoose from 'mongoose';

    const TestSchemaSchema = new mongoose.Schema(

      {name:{type:String,required:true,minlength:[6]},age:{type:Number,required:true,min:0,max:99},address:{city:{type:String,required:false,default:null},country:{type:String,required:false,default:null}},phone:{type:Number,minlength:[6],maxlength:[15],unique:true},hobbies:{type:[String]},friends:[{name:String,age:Number}],createdAt:{type:Date,default:new Date()}}
      , { versionKey: false }
    );
    const id_65a91b528299c75b1c6317b9 = mongoose.model("65a91b528299c75b1c6317b9", TestSchemaSchema);

    export default id_65a91b528299c75b1c6317b9;
    