import catchAsync from "../../shared/catch-async.js";
import sendResponse from "../../shared/send-response.js";
import { BookServices } from "./book.services.js";


const createBook = catchAsync(async(req,res)=>{
    const result= await BookServices.createBook(req?.body,req?.user?.id);
    sendResponse(res,{
        statusCode: 201,
        success: true,
        message: "Book Created successfully",
        data: result,
    })
});

export const BookController ={
    createBook,
}