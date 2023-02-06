// db.movies.find({"genres" : { "$ne": "Drama"}}).count() 
// "if is is array use this one ($in or $nin)  =>"  
// db.movies.find({ "genres": {
//   "$nin" : ["Drama"]
// }})

// //////////////////////////////////////////////////////////

// db.movies.find({ "year": {
//     "$gt": 1970
// },
//    "imdb.rating": {"$gt": 8.0}
// })

// ///////////////////////////////////////////////////////
// db.grades.find({ 
//     "scores": { 
//         $elemMatch: { "type": "quiz", "score": { "$gt": 90 } }
//      } }).count()

//  ///////////////////////////////////////////////////////////////
//  db.sales.find({
//     "items": {
//         $elemMatch: { "price" : { "$gt": 100}
//     ,
//     "quantity": {"$gt": 4}
// }
//     }
//  }).count()    

//  ////////////////////////////////////////////
// " homework:"
// تمام رکورد های سیلز را پیدا نمایید که







