const express = require('express');
const router = express.Router();

const dataList = [
    {
        "_id": "62cc195b581bfab8932d1231",
        "index": 0,
        "guid": "5814c575-3d7c-423c-9a4c-1dd0b9015c21",
        "isActive": false,
        "balance": "$2,746.24",
        "picture": "http://placehold.it/32x32",
        "age": 25,
        "eyeColor": "brown",
        "name": "Sondra Castaneda",
        "gender": "female",
        "company": "UNIWORLD",
        "email": "sondracastaneda@uniworld.com",
        "phone": "+1 (978) 529-2444",
        "address": "948 Bartlett Place, Rivers, Tennessee, 9912",
        "about": "Voluptate officia id excepteur sunt enim Lorem nulla dolor sint amet tempor cillum. Sit incididunt deserunt minim voluptate mollit cupidatat incididunt aliqua velit tempor. Irure magna ut voluptate esse elit excepteur minim. Dolore elit esse in elit tempor eu in ullamco cupidatat officia exercitation ullamco.\r\n",
        "registered": "2022-01-25T07:48:36 -06:-30",
        "latitude": 2.709366,
        "longitude": -31.612512,
        "tags": [
        "excepteur",
        "pariatur",
        "aliqua",
        "cupidatat",
        "dolore",
        "est",
        "consectetur"
        ],
        "friends": [
        {
            "id": 0,
            "name": "Darla Parsons"
        },
        {
            "id": 1,
            "name": "Ebony Spears"
        },
        {
        "id": 2,
        "name": "Ida Hooper"
        }
    ],
    "greeting": "Hello, Sondra Castaneda! You have 6 unread messages.",
    "favoriteFruit": "strawberry"
    },
    {
    "_id": "62cc195b30c23acb23b4634b",
    "index": 1,
    "guid": "a78e023a-0b58-41aa-8ce2-b149ad521499",
    "isActive": true,
    "balance": "$2,263.40",
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "eyeColor": "green",
    "name": "Kimberley Shaw",
    "gender": "female",
    "company": "DUOFLEX",
    "email": "kimberleyshaw@duoflex.com",
    "phone": "+1 (829) 566-2307",
    "address": "284 Jefferson Street, Kylertown, Missouri, 9375",
    "about": "Tempor ad proident consectetur eiusmod nostrud laboris excepteur nulla. Mollit ad anim nostrud proident aliqua. Exercitation adipisicing sunt nulla in nostrud irure minim et. Aliqua ipsum aliqua do velit laboris consectetur ut aliqua cupidatat mollit esse reprehenderit. Labore id Lorem consectetur minim quis.\r\n",
    "registered": "2022-03-28T07:06:57 -06:-30",
    "latitude": -76.839663,
    "longitude": -60.070724,
    "tags": [
        "elit",
        "tempor",
        "veniam",
        "labore",
        "anim",
        "ad",
        "voluptate"
    ],
    "friends": [
        {
        "id": 0,
        "name": "Pickett Acevedo"
        },
        {
        "id": 1,
        "name": "Dickson Trujillo"
        },
        {
        "id": 2,
        "name": "Larsen Cash"
        }
    ],
    "greeting": "Hello, Kimberley Shaw! You have 5 unread messages.",
    "favoriteFruit": "apple"
    },
    {
        "_id": "62cc195b556af28e89b3d051",
        "index": 2,
        "guid": "a0231b2d-56f3-46c9-805f-eb94e9a4d3e2",
        "isActive": true,
        "balance": "$2,316.38",
        "picture": "http://placehold.it/32x32",
        "age": 24,
        "eyeColor": "blue",
        "name": "Landry Mcleod",
        "gender": "male",
        "company": "ENDIPIN",
        "email": "landrymcleod@endipin.com",
        "phone": "+1 (937) 506-3972",
        "address": "631 Reeve Place, Logan, Massachusetts, 1356",
        "about": "Non enim aute adipisicing excepteur labore velit ex aliquip anim anim adipisicing sit. Incididunt excepteur velit et laboris nostrud dolor non labore adipisicing ex eiusmod fugiat eiusmod tempor. Non velit proident est laborum dolor. Mollit adipisicing velit laborum ad. Magna ex reprehenderit deserunt velit. In excepteur sunt incididunt duis do proident sit Lorem exercitation. Duis esse culpa laboris mollit proident est ipsum tempor sint sit.\r\n",
        "registered": "2022-05-26T05:04:11 -06:-30",
        "latitude": 64.064558,
        "longitude": -90.029995,
        "tags": [
        "qui",
        "fugiat",
        "irure",
        "commodo",
        "voluptate",
        "ad",
        "ipsum"
        ],
        "friends": [
        {
            "id": 0,
            "name": "Georgette Battle"
        },
        {
            "id": 1,
            "name": "Shari Craig"
        },
        {
            "id": 2,
            "name": "Jensen Pennington"
        }
        ],
        "greeting": "Hello, Landry Mcleod! You have 5 unread messages.",
        "favoriteFruit": "apple"
    },
    {
        "_id": "62cc195bbe1f3b8746083a0e",
        "index": 3,
        "guid": "8a9c10aa-adf4-41c1-b386-862b2036c1ce",
        "isActive": false,
        "balance": "$1,466.80",
        "picture": "http://placehold.it/32x32",
        "age": 25,
        "eyeColor": "brown",
        "name": "Berry Montoya",
        "gender": "male",
        "company": "BULLZONE",
        "email": "berrymontoya@bullzone.com",
        "phone": "+1 (833) 416-3210",
        "address": "352 Grove Place, Nettie, Arkansas, 1198",
        "about": "Nostrud quis id pariatur tempor id duis elit aliqua id aute. Ea eu esse cupidatat consectetur magna ad ea voluptate esse reprehenderit tempor consectetur dolore. Eu est Lorem aute ex ex dolore magna ullamco nostrud eu. Occaecat eu officia enim nulla consectetur Lorem laborum excepteur. Eu cillum deserunt Lorem sunt aliquip elit et exercitation dolore. Incididunt aliqua reprehenderit cupidatat anim aute elit. Occaecat laborum exercitation aliquip ex ea irure irure mollit.\r\n",
        "registered": "2017-08-27T05:23:46 -06:-30",
        "latitude": -83.462175,
        "longitude": 66.347371,
        "tags": [
        "do",
        "labore",
        "amet",
        "deserunt",
        "esse",
        "nostrud",
        "nostrud"
        ],
        "friends": [
        {
            "id": 0,
            "name": "Robbins Brewer"
        },
        {
            "id": 1,
            "name": "David Davidson"
        },
        {
            "id": 2,
            "name": "Rivas Wilkerson"
        }
        ],
        "greeting": "Hello, Berry Montoya! You have 6 unread messages.",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "62cc195b2f9e5938977d7118",
        "index": 4,
        "guid": "a4a53690-88ac-4829-acc6-6e138f22fb35",
        "isActive": false,
        "balance": "$3,867.76",
        "picture": "http://placehold.it/32x32",
        "age": 37,
        "eyeColor": "brown",
        "name": "Virgie Doyle",
        "gender": "female",
        "company": "DIGIAL",
        "email": "virgiedoyle@digial.com",
        "phone": "+1 (993) 483-2741",
        "address": "866 Lincoln Place, Vernon, Oklahoma, 5724",
        "about": "Irure dolore incididunt non sint proident deserunt quis consequat occaecat commodo nisi tempor non. Veniam qui do culpa irure sit aliqua nulla qui est nostrud. Cillum consectetur Lorem eu duis sunt.\r\n",
        "registered": "2016-04-15T08:28:47 -06:-30",
        "latitude": -30.383829,
        "longitude": 1.097369,
        "tags": [
        "dolore",
        "eiusmod",
        "adipisicing",
        "magna",
        "mollit",
        "voluptate",
        "aute"
        ],
        "friends": [
        {
            "id": 0,
            "name": "Terri Larson"
        },
        {
            "id": 1,
            "name": "Kathy Richards"
        },
        {
            "id": 2,
            "name": "Janie Palmer"
        }
    ],
    "greeting": "Hello, Virgie Doyle! You have 2 unread messages.",
    "favoriteFruit": "strawberry"
    }]

router.get('/',(req,res,nest)=>{
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(data));
})
module.exports = router;