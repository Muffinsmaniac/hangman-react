import { words } from "./words"

export function randomWord():string{
    const randomIndex:number =  Math.floor(Math.random() * words.length)
    return words[randomIndex]
}

export function getMessages():string {
    const options:string[] = [
        "Well, butter my biscuit",
        "Son of a biscuit",
        "Great galloping horses",
        "By the beard of the sheriff",
        "Well, I'll be hornswoggled",
        "Jumpin' jackrabbits",
        "You're a few bullets short of a six-shooter",
        "Sweet mother of tumbleweeds",
        "Blazing saddles",
        "What in tarnation",
        "Consarn it",
        "Dag nabbit",
        "Hell's bells",
        "Land sakes alive",
        "Well, spit in my boots",
        "As useless as a screen door on a saloon",
        "You're slower than a tired mule",
        "That dog won't hunt",
        "Not the sharpest spur in the saddle",
        "You couldn't hit water if you fell out of a boat",
        "I'll be a monkey's uncle",
        "Well, slap leather and call me Sally",
        "Son of a gun",
        "Great snakes",
        "I'll be dipped in horse manure",
        "You're ridin' for a fall",
        "There's a snake in your boots",
        "Hold your horses",
        "Well, paint me purple and call me a prospector",
        "That ain't worth a plugged nickel"
    ]
    const randomIndex:number =  Math.floor(Math.random() * options.length)
    return options[randomIndex]
}