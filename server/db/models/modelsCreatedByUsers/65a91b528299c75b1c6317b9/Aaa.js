
    import mongoose from 'mongoose';

    const SchemaAaa = new mongoose.Schema(

      {
  dd: {
    type: Boolean,
    default: false
  },
  zfdfsdf: {
    type: String,
    required: true
  },
  aaaaa: {
    type: String
  }
}
      , { versionKey: false }
    );
    const id_65a91b528299c75b1c6317b9 = mongoose.model("65a91b528299c75b1c6317b9", SchemaAaa);

    export default id_65a91b528299c75b1c6317b9;
    