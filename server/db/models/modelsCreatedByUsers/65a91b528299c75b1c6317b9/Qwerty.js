
    import mongoose from 'mongoose';

    const SchemaQwerty = new mongoose.Schema(

      {
  qwerty: {
    type: Number
  }
}
      , { versionKey: false }
    );
    const id_65a91b528299c75b1c6317b9 = mongoose.model("65a91b528299c75b1c6317b9", SchemaQwerty);

    export default id_65a91b528299c75b1c6317b9;
    