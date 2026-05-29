import dotenv from "dotenv";
dotenv.config();
import ImageKit from "imagekit";

const storageInstance = new ImageKit({
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
});

const sendFilesToImageKit = async (file, fileName) => {
  let options = {
    file,
    fileName,
    folder: "e-commerce-products",
  };

  return await storageInstance.upload(options);
};

export default sendFilesToImageKit;
