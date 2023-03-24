// import upload from "../configs/file-upload-s3-config.js";

// const singleUploader = upload.single('image');

// export const imageUploader = (req, res, next) => {
//     if (req.file) {
//         singleUploader(req, res, async function (err, data) {
//             if (err) {
//                 return res.status(500).json({
//                     error: err
//                 });
//             }
//             var payload = { ...req.body };
//             payload.image = req.file.location;
//             req.body = payload;
//         });
//     }
//     next();
// }