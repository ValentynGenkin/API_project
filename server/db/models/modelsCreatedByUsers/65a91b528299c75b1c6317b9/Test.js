
    import mongoose from 'mongoose';

    const SchemaTest = new mongoose.Schema(

      {
  name: {
    type: String,
    required: true,
    minlength: [
      2
    ],
    maxlength: [
      15
    ]
  },
  fff: {
    type: Number,
    required: true
  }
}
      , { versionKey: false }
    );
    const id_65a91b528299c75b1c6317b9 = mongoose.model("65a91b528299c75b1c6317b9", SchemaTest);

    export default id_65a91b528299c75b1c6317b9;
    