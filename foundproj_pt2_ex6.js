const guests = {
    ANTONY: {
      title: "General",
      region: "Rome",
      dietaryPreference: "Vegetarian",
      pastGifts: ["Golden Laurel", "Chariot"]
    },
    CICERO: {
      title: "Orator",
      region: "Arpinum",
      dietaryPreference: "Omnivore",
      pastGifts: ["Scroll of Proverbs", "Quill"]
    }
  };


  // step 1: Add "BRUTUS" to the guest directory. He's a "Senator" from "Rome", prefers "Vegan" food, and in the past, he has gifted Caesar a "Silver Dagger" and a "Marble Bust".

guests.BRUTUS = {
    title : "Senator",
    region : "Rome",
    dietaryPreference : "Vegan",
    pastGifts : ["Silver Dagger", "Marble Bust"]
};

// Step 2: Update CICERO's past gifts to include a "Golden Lyre".

guests.CICERO.pastGifts += "Golden Lyre";

// Step 3: Retrieve the region of "Antony"

const antonyRegion = guests.ANTONY.region;


// Step 4: Due to unforseen political events, "CICERO" needs to be descreetly removed from the guest list
delete guests.CICERO;

// step 5: Assign ANTONY's profile to a new variable named generalProfile. Then, using this new variable, change the region of ANTONY to "Egypt".

const generalProfile = guests.ANTONY;
generalProfile.region = "Egypt";

// Question 1: After executing Step 5, what will be the region of ANTONY in the original guests object?
// Answer 1: The region of Antony in the original guest object will now be updated to "Egypt" as well, since they are both pointing to the same memory. 