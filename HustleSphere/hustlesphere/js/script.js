function calculate(){

    let sales =
    parseFloat(document.getElementById("sales").value);
    
    let costs =
    parseFloat(document.getElementById("costs").value);
    
    let profit = sales - costs;
    
    document.getElementById("result")
    .innerHTML =
    "Profit: R" + profit;
    
    }
    function searchTools(){

        let input =
        document.getElementById("searchInput")
        .value.toLowerCase();
        
        let cards =
        document.querySelectorAll("#tools .card");
        
        cards.forEach(card=>{
        
        let text =
        card.innerText.toLowerCase();
        
        card.style.display =
        text.includes(input)
        ? "block"
        : "none";
        
        });
        }
        function toggleTheme(){

            document.body.classList.toggle("light");
            
            }
            function toggleTheme(){

                document.body.classList.toggle("light");
                
                }