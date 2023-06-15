export const filters = {
    venue_type:null,
    cuisine_type:null,
    cost_rating:null,
    avg_ppv:null,
    user_rating:null,
    //all below possibly predefined
    wheelchair_acc:null,
    vegetarian_options:null,
    vegan_options:null,
    halal_options:null,
    kosher_options:null,
    glutenfree_options:null,
    city:null
  };


  /*
  each round, go to the next object in the rounds array
  check if the name has a matching value in the filter that's not null
  if it has, skip to the next one and don't vote on it 
    if it doesn't, vote on it
*/

//usestate for venue type - restaurant

  export const rounds = [
    {id: 1, name: "venue_type", options: ["Restaurant", "Cinema", "Bar"]},
    {id: 2, name: "cuisine_type", options: ["Mexican", "Chinese", "Italian", "Indian", "Burger", "Thai"], relevantTo: ["Restaurant"]},
    {id: 3, name: "cost_rating", options: ["1", "2", "3"], relevantTo: ["Restaurant", "Cinema", "Bar"]},
    {id: 4, name: "avg_ppv", options: ["<20", "20-30", "30-40", "40-50", ">50"], relevantTo: ["Restaurant", "Cinema", "Bar"]},
    {id: 5, name: "user_rating", options: [1,2,3,4,5], relevantTo: ["Restaurant", "Cinema", "Bar"]},
    {id: 6, name: "wheelchair_acc", options: [true,false], relevantTo: ["Restaurant", "Cinema", "Bar"]},
    {id: 7, name: "vegetarian_options", options: [true,false], relevantTo: ["Restaurant"]},
    {id: 8, name: "vegan_options", options: [true,false], relevantTo: ["Restaurant"]},
    {id: 9, name: "halal_options", options: [true,false], relevantTo: ["Restaurant"]},
    {id: 10, name: "kosher_options", options: [true,false], relevantTo: ["Restaurant"]},
    {id: 11, name: "glutenfree_options", options: [true,false], relevantTo: ["Restaurant"]},
    {id: 12, name: "city", options: ["London"], relevantTo: ["Restaurant", "Cinema", "Bar"]}
  ]

//start voting page 
//go to rounds[0].name to find the filter / column name
//when button is clicked, set filters.venue_type to the name of the button clicked.

 