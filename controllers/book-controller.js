const Book = require('../models/book')

//done
const getAllBooks = async(req, res)=> {
 try {
    const allBooks = await Book.find({})
    if(allBooks?.length > 0){
        res.status(200).json({
            success: true,
            message: 'List of all books fetched successfully',
            data: allBooks
        })
    } else{
        res.status(404).json({
            success: false,
            message: 'No books available'
        })
    }
 } catch (error) {
    console.log( error);
    res.status(500).json({
        success: false,
        message: "Something went wrong",
    })
 }

}
//done
const getSingleBookById = async(req, res)=> {
    try {
        const getCurrentBookId = req.params.id
        const getSingleBook = await Book.findById(getCurrentBookId)

        if(!getSingleBook){
            return res.status(404).json({
                success: false,
                message: "Book with current id not found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Book found :",
            data: getSingleBook
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
    
}
//done
const addNewBook = async(req, res)=> {
    try {
        
        const newBookFormData = req.body
        const newlyCreatedBook = await Book.create(newBookFormData)
        if(newlyCreatedBook){
            res.status(201).json({
                success: true,
                message: 'Book created Successfully',
                data: newBookFormData
            })
        }
        
    } catch (error) {
        console.log("Something went wrong", error);
    }
}

const updateBook = async(req, res)=> {
 try {
    const updatedBookFormData = req.body
    const getCurrentBook = req.params.id
    const updatedBook = await Book.findByIdAndUpdate(getCurrentBook, updatedBookFormData,{
        new: true
    })
    if(!updateBook){
        return res.status(404).json({
            success: false,
            message: "Book with current id not found"
        })
    }
    res.status(200).json({
        success: true,
        message: "Book updated successfully",
        data: updatedBook
    })
    
    
 } catch (error) {
    console.log(error);
    res.status(500).json({
        success: false,
        message: "Something went wrong"
    })
 }   
}
//done
const deleteBook = async(req, res)=> {
    try {
        const getCurrentBookId = req.params.id
        const deletedBook = await Book.findByIdAndDelete(getCurrentBookId)

        if(!deletedBook){
            return res.status(404).json({
                success: false,
                message: "Book with current id not found"
            })
        }
        res.status(200).json({
            success: true,
           
            data: deletedBook
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
}

module.exports ={getAllBooks, getSingleBookById, addNewBook, updateBook, deleteBook}