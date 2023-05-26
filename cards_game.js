let cards = ["cAce", "c1", "c2", "c3", "c4", "c5", "c6", 'c7', "c8", "c9", "c10", "cJ", "cQ", "cK", "Ace", "h1", "h2", "h3",
     "h4", "h5", "h6", "h7", "h8", "h9", "h10", "hJ", "hQ", "hK", "sAce", "s1", "s2", "s3", "s4", "s5","s6", "s7", "s8",
     "s9", "s10", "sJ", "sQ", "sK", "dAce", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d10", "dJ", "dQ", "dK"
]

console.log("Keep any of this card in your mind: " + "\n" + cards + "\n")

let con = prompt("If you want to play the game type 'yes': ")

if (con == "yes") {
  
  function shuffle_array(array) {
      for(i = array.length - 1; i > 0; i--) {
          let randint = Math.floor(Math.random() * (i + 1))
  
          var temp = array[i];
          array[i] = array[randint];
          array[randint] = temp;
      }
  }

  let first_row = [];
  let second_row = [];
  let third_row = [];
  let empty = [];

  shuffle_array(cards)

  first_row.push(cards.slice(0, 7));
  second_row.push(cards.slice(7, 14));
  third_row.push(cards.slice(14, 21));
  console.log("first_row: " + first_row[0] + "\n" +       "second_row: " +        second_row[0] + "\n" + "third_row: " +   third_row[0] + "\n")
            
  var input = prompt("Enter the row in which your card is present: ")
            
    if (input == "first_row") {
        empty.push(second_row[0]);
        empty.push(first_row[0]);
        empty.push(third_row[0]);
        var flat = empty.flat();
        // empty = flat
    }
    
    else if (input == "second_row") {
        empty.push(third_row[0]);
        empty.push(second_row[0]);
        empty.push(first_row[0]);
        flat = empty.flat();
    }
    
    else if (input == "third_row") {
        empty.push(second_row[0]);
        empty.push(third_row[0]);
        empty.push(first_row[0]);
        flat = empty.flat();
    }

    for (x=0; x < 2; x++) {

      let first = first_row.flat();
      let second = second_row.flat();
      let third = third_row.flat();

      while (first.length > 0) {
          first.pop()
          second.pop()
          third.pop()
      }

      let numchanger = [0, 3, 6, 9, 12, 15, 18]

      for (var i in numchanger) {
          let datainnum = numchanger[i]
          first.push(flat[datainnum])
          second.push(flat[datainnum + 1])
          third.push(flat[datainnum + 2])
      }
      console.log("first_row: " + first + "\n" + "second_row: " +            second + "\n" + "third_row: " + third + "\n")
            
      while (empty.length > 0) {
          empty.pop()
      }

      let input1 = prompt("Type: ")
      if(input1 == "first_row") {
          empty.push(second);
          empty.push(first);
          empty.push(third);
          flat = empty.flat();
      }
            
      else if(input1 == "second_row") {
          empty.push(third);
          empty.push(second);
          empty.push(first);
          flat = empty.flat();
      }
            
      else if (input1 == "third_row") {
          empty.push(second);
          empty.push(third);
          empty.push(first);
          flat = empty.flat();
      }
    }
  console.log("The card in your mind is: " + flat[10])
}
