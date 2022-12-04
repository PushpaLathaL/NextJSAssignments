import mongoose from "mongoose";

const connectdb = (handler) => async (req, res) => {
  if (mongoose.connections[0].readystate) {
    return handler(req, res);
  }
  //await mongoose.connect('mongodb+srv://Latha:fP3EVsBdmoBJLF95@atlascluster.ugdmhvg.mongodb.net/next_js_app?retryWrites=true&w=majority');
  await mongoose.connect(process.env.MONGO_URI);
  return handler(req, res);
};

export default connectdb;
