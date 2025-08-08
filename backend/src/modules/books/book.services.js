import { Book } from "./books.model.js";



const createBook= async (payload,userId)=>{
    const book= await Book.create({...payload,user: userId});
    return book;  

};
const getAllBooks= async ()=>{
    const books= await Book.find({}).sort({ createdAt: -1 });
    return books;
}
const getBookById = async (id) => {
    const book = await Book.findById(id);
    return book;
  }

export const BookServices = {
    createBook,
    getAllBooks,
    getBookById

}
