const Question =require("../models/Question");
const CustomError=require("../helpers/error/CustomError");
const asyncErrorHandler =require("express-async-handler");

const askNewQuestion=asyncErrorHandler(async(req,res,next)=>{

    const information=req.body;
    const question=await Question.create({
        ...information, // information içindeki parametreleri ... ile question alanlarına eşliyor
        user:req.user.id
    });

    res.status(200)
    .json({
        success:true,
        data:question
    })
});

const getAllQuestions=(req,res,next)=>{

    res.status(200)
    .json({
        success:true,
        body:"All Questions"
    });
};

module.exports={
    getAllQuestions,
    askNewQuestion
}