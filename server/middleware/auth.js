import jwt from "jsonwebtoken";

//wants to like a post
//click the like button => auth middleware (NEXT) => like controller...

const auth = async (req, res, next) => {
    try {
        const token = req.header.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodedData;

        if(token && isCustomAuth) {
            decodedData = jwt.verify(token, 'text');
            
            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
        }

    } catch (error) {
        console.log(error);
    }
}

export default auth;