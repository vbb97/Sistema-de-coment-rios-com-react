export const getComments = async () => {
    return [
        {
            "id": 1,
            "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
            "createdAt": "2022-07-03T22:27:26.242Z",
            "score": 12,
            "replyingTo": null,
            "user": {
                "image": { 
                "png": "./images/avatars/image-amyrobson.png",
                "webp": "./images/avatars/image-amyrobson.webp"
                },
                "username": "amyrobson",
                "userId": "2"
            },
        },

        {
            "id": 2,
            "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
            "createdAt": "2022-07-20T22:27:26.242Z",
            "score": 5,
            "replyingTo": null,
            "user": {
                "image": { 
                "png": "./images/avatars/image-maxblagun.png",
                "webp": "./images/avatars/image-maxblagun.webp"
                },
                "username": "maxblagun",
                "userId": "3"
            },
        },

        {
            "id": 3,
            "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
            "createdAt": "2022-07-27T22:27:26.242Z",
            "score": 4,
            "replyingTo": "maxblagun",
            "user": {
                "image": { 
                "png": "./images/avatars/image-ramsesmiron.png",
                "webp": "./images/avatars/image-ramsesmiron.webp"
                },
                "username": "ramsesmiron",
                "userId": "4"
            },
        },

        {
            "id": 4,
            "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
            "createdAt": "2022-06-03T22:27:26.242Z",
            "score": 2,
            "replyingTo": "maxblagun",
            "user": {
                "image": { 
                "png": "./images/avatars/image-juliusomo.png",
                "webp": "./images/avatars/image-juliusomo.webp"
                },
                "username": "juliusomo",
                "userId": "1"
            },
        }
    ]            
};

export const getCurrentUser = () => {
    return {
                "image": { 
                  "png": "./images/avatars/image-juliusomo.png",
                  "webp": "./images/avatars/image-juliusomo.webp"
                },
                "username": "juliusomo",
                "userId": "1"
            }
};

export const createComment = async (text, userParent = null) => {
    return {
        "tag": userParent !== null && '@' + userParent,
        "id": Math.random().toString(36).substr(2, 9),
        "content": text,
        "createdAt": new Date().toISOString(),
        "score": 0,
        "replyingTo": userParent,
        "user": {
          "image": { 
            "png": "./images/avatars/image-juliusomo.png",
            "webp": "./images/avatars/image-juliusomo.webp"
          },
          "username": "juliusomo",
           "userId": "1"
        },
        "replies": []
    };
};
