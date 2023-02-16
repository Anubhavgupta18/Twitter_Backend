const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    userEmail: {
        type: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
}, { timestamps: true });

//virtuals
tweetSchema.virtual('getWithUserEmail').get(function process() {
    return `${this.content}\n${this.userEmail}`;
});

//HOOKS

//Use Case of Hooks:
//We can use hooks in a scenario where a user is deleting his/her account then all the tweets,
//asociated with his/her account will also be deleted using a post hooks
tweetSchema.pre('save', function (next) {
    //based on the no. of arguments it decides that the hook is synchronous or asynchronous
    console.log('Inside Hooks');
    this.content = this.content + '....(content was modified)'
    next();
}); 

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;

//INDEXES