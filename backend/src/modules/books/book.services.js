import { Book } from "./books.model.js";



const createBook= async (payload,userId)=>{
    const book= await Book.create({...payload,user: userId});
    return book;  

};

export const BookServices = {
    createBook,

}
