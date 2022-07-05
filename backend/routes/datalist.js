const express = require('express');
const router = express.Router();

const data = [{
    id : 1,
    img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Altostratus_and_Cirrus_Ellison_Rd_Geebung_P1270310.jpg/360px-Altostratus_and_Cirrus_Ellison_Rd_Geebung_P1270310.jpg',
    title: 'Sky High',
    desc: `I bring fresh showers for the thirsting flowers,
    From the seas and the streams;
    I bear light shade for the leaves when laid
    In their noonday dreams.`,
    extbtn:'Read More'
},{
    id : 2,
    img : 'https://i.pinimg.com/236x/67/01/f2/6701f239d21349a50b224da221bce94e.jpg',
    title: 'Lonely tree',
    desc: `I bring fresh showers for the thirsting flowers,
    As she dances about the sun.
    I wield the flail of the lashing hail,
    And whiten the green plains under,
    And then again I dissolve it in rain,
    And laugh as I pass in thunder.`,
    extbtn:'Read More'
},{
    id : 3,
    img : 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?cs=srgb&dl=pexels-luis-dalvan-1770809.jpg&fm=jpg',
    title: 'Misty Forest',
    desc: `I bring fresh showers for the thirsting flowers,
    From the seas and the streams;
    I bear light shade for the leaves when laid
    In their noonday dreams.
    From my wings are shaken the dews that waken
    The sweet buds every one,
    When rocked to rest on their mother's breast,
    As she dances about the sun.
    I wield the flail of the lashing hail,
    And whiten the green plains under,
    And then again I dissolve it in rain,
    And laugh as I pass in thunder.`,
    extbtn:'Read More'
},{
    id : 4,
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhf9teTgHn4ih7qSkuJUJS-Q56_1m0cJ-6kK8D78l2sP9WWi3cSEYp5zlHkBjAJxkZa0M&usqp=CAU',
    title: 'squirrel Tales',
    desc: `Whisky, frisky,
    Hippity hop;
    Up he goes
    To the tree top!
    
    Whirly, twirly,
    Round and round,
    Down he scampers
    To the ground.
    
    Furly, curly
    What a tail!
    Tall as a feather
    Broad as a sail!
    
    Where's his supper?
    In the shell,
    Snappity, crackity,
    Out it fell.`,
    extbtn:'Read More'
}]

router.get('/',(req,res,next)=>{
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(data));
})

module.exports = router;