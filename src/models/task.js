const mongoose=require("mongoose");

const TareasSchema=new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  nameTask:{
    type: String
  },
  description:{
    type:String},
  date_last:{
    type:String},
  other_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  state:{
    type:Boolean
  }
},
{
    timestamps: true,
});

module.exports=mongoose.model("tasks",TareasSchema);
