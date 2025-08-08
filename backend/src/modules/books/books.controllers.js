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
const getAllBooks = catchAsync(async(req,res)=>{
    const result= await BookServices.getAllBooks();
    sendResponse(res,{
        statusCode: 200,
        success: true,
        message: "Books Retrieved successfully",
        data: result,
    })
});
const getBookById = catchAsync(async(req,res)=>{
    const result= await BookServices.getBookById(req.params.id);
    sendResponse(res,{
        statusCode: 200,
        success: true,
        message: "Books Retrieved successfully",
        data: result,
    })
});

export const BookController ={
    createBook,
    getAllBooks,
    getBookById
}