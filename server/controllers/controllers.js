// Require Mongoose
const mongoose = require('mongoose');

// Require Author Model
var Author = require('./../models/models');

module.exports = {
    allAuthors: (req, res)=>{
        Author.find({}, (err, data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        });
    },
    createAuthor: (req, res)=>{
        Author.create({name: req.body.name}, (err, data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            } 
        });
    },
    singleAuthor: (req, res)=>{
        Author.findOne({_id: req.params.id}, (err, data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        });
    },
    updateAuthor: (req, res)=>{
        Author.findOne({_id: req.params.id}, (err, data)=>{
            if(err){
                res.json(err);
            }
            else{
                Author.update(data, {name: req.body.name}, (err, data)=>{
                    if(err){
                        res.json(err);
                    }
                    else{
                        res.json(data);
                    }
                });   
            }
        });
    },
    deleteAuthor: (req, res)=>{
        Author.findOne({_id: req.params.id}, (err, data)=>{
            if(err){
                res.json(err);
            }
            else{
                data.remove();
                res.json({'Success': 'Author Deleted'});
            } 
        });
    } 
};