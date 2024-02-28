
    import mongoose from 'mongoose';

    const SchemaQwerty = new mongoose.Schema(

      {
  qwerty: {
    type: Number
  }
}
      , { 
        strict: 'throw',
        versionKey: false ,
        capped: {
        size: 1048576, 
        max: 1000 
      } }
    );
    const id_65d8a1ca9bf03b6453751c21 = mongoose.model("65d8a1ca9bf03b6453751c21", SchemaQwerty);

    export default id_65d8a1ca9bf03b6453751c21;
    