import { surpriseMePrompts } from '../constants'

function getRandomPrompts(prompt){
    const randomIndex = Math.floor(Math.random()*surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];
    //Preventing generated random is not same as the previous random
    if(randomPrompt===prompt) return getRandomPrompts(prompt);
    
    return randomPrompt;
}

export {getRandomPrompts};