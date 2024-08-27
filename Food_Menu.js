const readlineSync = require(`readline-sync`);


console.log(
    `
                                 Welcome to Delhi's special Rasoi
    `
)

console.log(
    `
    1 - Monday
    2 - Tuesday
    3 - Wednesday
    4 - Thursday 
    5 - Friday
    6 - Saturday
    7 - Sunday
    `
);

let day = readlineSync.question("Choose the day : ")

if (day == 1){
    console.log(
        "Thanks for choosing 'Monday'\n",
        "\nHere is the Menu-Card : Type 'Tap' to open it\n"
    );
    let amount = 0, amount1 = 0, amount2 = 0, amount3 = 0, amount4 = 0;
    let totalAmount = 0, totalAmount1 = 0, totalAmount2 =0, totalAmount3 = 0, totalAmount4 = 0;
    let totalBill = 0;

    while (true) {
        
        let tap = readlineSync.question("\nType : ")

        if (tap.toLowerCase() === "tap"){

            while (true) {
                console.log(
                    "\nChoose your Courses : \n",
                    "1. Starters or Appetizers\n",
                    "2. Main-Courses or Entrees\n",
                    "3. Dessert\n",
                    "4. Side dishes\n",
                    "5. Drinks\n"                );

                let count = readlineSync.question("Select the course according to the numbers : ")

                if (count == 1){
 
                    while (true) {
                        console.log(
                            "\nHere are the dishes choose from the following : \n",
                            "1. Snacks  -  @20rs. Per Plate\n",
                            "2. Samosa  -  @10rs. Per Plate\n",
                            "3. Pakoda  -  @25rs. Per Plate\n",
                            "4. Aloo tikki  -  @30rs. Per Plate\n",
                            "5. Paneer tikka  -  @50rs. Per Plate\n"
                        );

                        let starter = readlineSync.question("\nChoose your starter according to numbers : \n")

                        if (starter == 1){

                            amount += 20;
                            console.log(
                                "You have choosen 'Snacks' \n",
                                "Here is your order : 'Snacks'",
                            );
                            
                        }
                        else if (starter == 2){

                            amount += 10;
                            console.log(
                                "You have choosen 'Samosa' \n",
                                "Here is your order : 'Samosa'",
                            );
                            
                        }else if (starter == 3){

                            amount += 25;
                            console.log(
                                "You have choosen 'Pakoda'\n",
                                "Here is your order : 'Pakoda'",
                            );
                            
                        }
                        else if (starter == 4){

                            amount += 30;
                            console.log(
                                "You have choosen 'Aloo tikki'\n",
                                "Here is your order : 'Aloo tikki'",
                            );
                        }
                        else if (starter == 5){

                            amount += 50;
                            console.log(
                                "You have choosen 'Paneer tikka' \n",
                                "Here is your order : 'Paneer tikka'",
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue; 
                        }
                        totalAmount = amount;
                        totalBill = totalAmount;

                        let orderAgain = readlineSync.question(`\nWould you like to order again (yes/no) : `)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    // amount = 0;
                    console.log(
                        `
                        You have ordered your starters of @${totalAmount}Rs. 
                        `
                    )
                }
                else if (count == 2){

                    while (true) {

                        console.log(
                            "\nHere are some 'main-course' dishes choose from them : \n",
                            "1. Veg-Biryani  -  @50rs. Per Plate\n",
                            "2. Shahi-Paneer  -  @80rs. Per Plate\n",
                            "3. Palak-Paneer  -  @90rs. Per Plate\n",
                            "4. Malai-Chaap  -  @120rs. Per Plate\n",
                            "5. Rajma  -  @60rs. Per Plate\n",
                            "6. Butter-Naan  -  @5rs. Per Roti\n"
                        );

                        let main = readlineSync.question("\nChoose your Main-course according to numbers : \n")

                        if (main == 1){

                            amount1 += 50;
                            console.log(
                                "You have selected 'Veg-Biryani'\n",
                                "Here is your order : 'Veg-Biryani' \n",
                            );
                        }
                        else if (main == 2){

                            amount1 += 80;
                            console.log(
                                "You have selected 'Shahi-Paneer'\n",
                                "Here is your order : 'Shahi-Paneer' \n",
                            );
                        }
                        else if (main == 3){

                            amount1 += 90;
                            console.log(
                                "You have selected 'Palak-Paneer'\n",
                                "Here is your order : 'Palak-Paneer' \n",
                            );
                        }
                        else if (main == 4){

                            amount1 += 120;
                            console.log(
                                "You have selected 'Malai-Chaap'\n",
                                "Here is your order : 'Malai-Chaap' \n",
                            );
                        }
                        else if (main == 5){

                            amount1 += 60;
                            console. log(
                                "You have selected 'Rajma' \n",
                                "Here is your order : 'Rajma' \n",
                            );
                        }
                        else if (main == 6){

                            console.log("You have selected 'Butter-Naan'\n");
                            let roti = readlineSync.question(`How many "Butter-Naan" do you want : `)
                            amount1 += roti * 5;
                            console.log(
                                `\nHere is your order : ${roti} 'Butter-Naan'\n`,
                                `You have to pay ${amount1} for this order\n`,
                            );
                        }
                        else {
                            console.log(
                                `\nYou have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue;
                        }2
                        totalAmount1 = amount1;
                        totalBill = totalAmount1;

                        let orderAgain = readlineSync.question(`Would you like to order again (yes/no) : \n`)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your main-course of @${totalAmount1}Rs. 
                        `
                    )

                }
                else if (count == 3){

                    while (true) {
                        console.log(
                            "Here are some 'dessert' dishes choose from them : \n",
                            "1. Ras-Malai  -  @30rs. Per Plate\n",
                            "2. Gulab-Jamun  -  @30rs. Per Plate\n",
                            "3. Rasgulla  -  @40rs. Per Plate\n",
                            "4. Jalebi  -  @35rs. Per Plate\n",
                            "5. Gajar-Ka-Halwa  -  @50rs. Per Plate\n"
                        );

                        let dessert = readlineSync.question("\nChoose your 'Dessert' according to numbers : \n")

                        if (dessert == 1){

                            amount2 += 30;
                            console. log(
                                "You have selected 'Ras-Malai' \n",
                                "Here is your order : 'Ras-Malai' \n"
                            );
                        }
                        else if (dessert == 2){

                            amount2 += 30;
                            console. log(
                                "You have selected 'Gulab-Jamun'\n",
                                "Here is your order : 'Gulab-Jamun'\n"
                            );
                        }
                        else if (dessert == 3){

                            amount2 += 40;
                            console. log(
                                "You have selected 'Rasgulla'\n",
                                "Here is your order : 'Rasgulla'\n"
                            );
                        }
                        else if (dessert == 4){

                            amount2 += 35;
                            console. log(
                                "You have selected 'Jalebi'\n",
                                "Here is your order : 'Jalebi'\n"
                            );
                        }
                        else if (dessert == 5){

                            amount2 += 50;
                            console. log(
                                "You have selected 'Gajar-Ka-Halwa'\n",
                                "Here is your order : 'Gajar-Ka-Halwa'\n"
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue; 
                        }
                        totalAmount2 = amount2;
                        totalBill = totalAmount2;

                        let orderAgain = readlineSync.question(`Would you like to order again (yes/no) : \n`)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your Dessert of @${totalAmount2}Rs. 
                        `
                    )
                }
                else if (count == 4){

                    while (true) {
                        console.log(
                            "Here are some 'side-dishes' dishes choose from them : \n",
                            "1. Raita  -  @10rs. Per Plate\n",
                            "2. Chutney  -  @20rs. Per Plate\n",
                            "3. Papad  -  @10rs. Per Plate\n",
                            "4. Achar(Pickle)  -  @20rs. Per Plate\n",
                            "5. Baingan-Bharta  -  @30rs. Per Plate\n"
                        );

                        let side = readlineSync.question("\nChoose your 'Side-dishes' according to numbers : \n")

                        if (side == 1){
                            
                            amount3 += 10;
                            console. log(
                                "You have selected 'Raita' \n",
                                "Here is your order : 'Raita' \n"
                            );
                        }
                        else if (side == 2){

                            amount3 += 20;
                            console. log(
                                "You have selected 'Chutney' \n",
                                "Here is your order : 'Chutney' \n",
                            );
                        }
                        else if (side == 3){

                            amount3 += 10;
                            console. log(
                                "You have selected 'Papad' \n",
                                "Here is your order : 'Papad' \n"
                            );
                        }
                        else if (side == 4){

                            amount3 += 20;
                            console. log(
                                "You have selected 'Achar(Pickle)' \n",
                                "Here is your order : 'Achar(Pickle)' \n"
                            );
                        }
                        else if (side == 5){

                            amount3 += 30;
                            console. log(
                                "You have selected 'Baingan-Bharta' \n",
                                "Here is your order : 'Baingan-Bharta' \n"
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue; 
                        }
                        totalAmount3 = amount3;
                        totalBill = totalAmount3;

                        let orderAgain = readlineSync.question(`Would you like to order again (yes/no) : \n`)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your side-dishes of @${totalAmount3}Rs. 
                        `
                    )
                }
                else if (count == 5){

                    while (true) {
                        console.log(
                            "Here are some drinks choose from them :\n",
                            "1. Water  -  @30rs. Per Bottle\n",
                            "2. Coca-Cola  -  @50rs. Per Bottle\n",
                            "3. Soda  -  @30rs. Per Bottle\n",
                            "4. Apple-Juice  -  @20rs. Per Glass\n",
                            "5. Fruit-Beer  -  @50rs. Per Glass"
                        );

                        let drinks = readlineSync.question("\nChoose your 'Drinks' according to numbers : \n")
                        
                        if (drinks == 1){

                            amount4 += 30;
                            console. log(
                                "You have selected 'Water' \n",
                                "Here is your order : 'Water' \n"
                            );
                        }
                        else if (drinks == 2){

                            amount4 += 50;
                            console. log(
                                "You have selected 'Coca-Cola' \n",
                                "Here is your order : 'Coca-Cola' \n"
                            );
                        }
                        else if (drinks == 3){

                            amount4 += 30;
                            console. log(
                                "You have selected 'Soda' \n",
                                "Here is your order : 'Soda' \n"
                            );
                        }
                        else if (drinks == 4){

                            amount4 += 20;
                            console. log(
                                "You have selected 'Apple-juice' \n",
                                "Here is your order : 'Apple-juice' \n"
                            );
                        }
                        else if (drinks == 5){

                            amount4 += 50;
                            console. log(
                                "You have selected 'Fruit-Beer' \n",
                                "Here is your order : 'Fruit-Beer' \n"
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue;
                        }
                        totalAmount4 = amount4;
                        totalBill = totalAmount4;

                        let orderAgain = readlineSync.question(`Would you like to order again (yes/no) : \n`)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your drinks of @${totalAmount4}Rs. 
                        `
                    )
                }
                else {
                    console.log(
                        "\nYou've entered wrong number - Please select food according to the courses numbers\n",
                        "Now start it again!\n"
                    );
                    continue;
                }
                let goBack = readlineSync.question(`\nWould you like to go for Main-course/Dessert/Side-Dishes/Drinks (yes/no) : `);

                if (goBack.toLowerCase() === "no") {
                    break;
                }
            }

            totalBill = totalAmount+totalAmount1+totalAmount2+totalAmount3+totalAmount4;
            console.log(
                `
                Total Bill : ${totalBill}
                "Thanks for coming - come Again"
                `
            );
            break;
        }
        else {
            console.log("\nPlease enter 'Tap' to see the 'Menu-Card'\n");
            continue; 
        }
    }
}

else if (day == 2){
    console.log(
        "Thanks for choosing 'Tuesday'\n",
        "\nHere is the Menu-Card : Type 'Tap' to open it\n"
    );
    let amount = 0, amount1 = 0, amount2 = 0, amount3 = 0, amount4 = 0;
    let totalAmount = 0, totalAmount1 = 0, totalAmount2 =0, totalAmount3 = 0, totalAmount4 = 0;
    let totalBill = 0;
    
    while (true) {

        let tap = readlineSync.question("Type : ")

        if (tap.toLowerCase() == "tap"){
            
            while (true){
                console.log(
                    "Choose your Courses : \n",
                    "1. Starters or Appetizers\n",
                    "2. Main-Courses or Entrees\n",
                    "3. Dessert\n",
                    "4. Side dishes\n",
                    "5. Drinks\n"
                );

                let count = readlineSync.question("Select the course according to the numbers : \n")

                if (count == 1){

                    while (true) {
                        console.log(
                            "\nHere are your dishes \n",
                            "1. Dahi-Puri  -  @20rs. Per Plate\n",
                            "2. Hara-Bhara-Kabab  -  @10rs. Per Plate\n",
                            "3. Pakoda  -  @25rs. Per Plate\n",
                            "4. Aloo tikki  -  @30rs. Per Plate\n",
                            "5. Pani-Puri  -  @50rs. Per Plate\n"
                        );

                        let starter = readlineSync.question("\nChoose your starter according to numbers : \n")

                        if (starter == 1){

                            amount += 20;
                            console.log(
                                "You have choosen 'Dahi-Pury' \n",
                                "Here is your order\n"
                            );
                            
                        }
                        else if (starter == 2){

                            amount += 10;
                            console.log(
                                "You have choosen 'Hara-Bhara-Kabab' \n",
                                "Here is your order : 'Hara-Bhara-Kabab'\n"
                            );
                            
                        }else if (starter == 3){

                            amount += 25;
                            console.log(
                                "You have choosen 'Pakoda'\n",
                                "Here is your order : 'Pakoda'\n"
                            );
                            
                        }
                        else if (starter == 4){

                            amount += 30;
                            console.log(
                                "You have choosen 'Aloo tikki' \n",
                                "Here is your order : 'Aloo tikki'\n"
                            );
                        }
                        else if (starter == 5){

                            amount += 50;
                            console.log(
                                "You have choosen 'Pani-Puri' \n",
                                "Here is your order : 'Pani-Puri'\n"
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue;
                        }
                        totalAmount = amount;
                        totalBill = totalAmount;

                        let orderAgain = readlineSync.question(`Would you like to order again (yes/no) : \n`)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your starters of @${totalAmount}Rs. 
                        `
                    )
                }
                else if (count == 2){

                    while (true) {
                        console.log(
                            "\nHere are some 'main-course' dishes choose from them : \n",
                            "1. Paneer-Butter-Masala  -  @50rs. Per Plate\n",
                            "2. Chhole-Bhature  -  @80rs. Per Plate\n",
                            "3. Baingan-Bharta  -  @90rs. Per Plate\n",
                            "4. Aloo-Gobhi  -  @120rs. Per Plate\n",
                            "5. Palak-Paneer  -  @60rs. Per Plate\n",
                            "6. Butter-Naan  -  @5rs. Per Roti\n"
                        );

                        let main = readlineSync.question("\nChoose your Main-course according to numbers : \n")

                        if (main == 1){

                            amount1 += 50;
                            console.log(
                                "You have selected 'Paneer-Butter-Masala'\n",
                                "Here is your order : 'Paneer-Butter-Masala' \n"
                            );
                        }
                        else if (main == 2){

                            amount1 += 80;
                            console.log(
                                "You have selected 'Chhole-Bhature'\n",
                                "Here is your order : 'Chhole-Bhature' \n"
                            );
                        }
                        else if (main == 3){

                            amount1 += 90;
                            console.log(
                                "You have selected 'Baingan-Bharta'\n",
                                "Here is your order : 'Baingan-Bharta' \n"
                            );
                        }
                        else if (main == 4){

                            amount1 += 120;
                            console.log(
                                "You have selected 'Aloo-Gobhi'\n",
                                "Here is your order : 'Aloo-Gobhi' \n"
                            );
                        }
                        else if (main == 5){

                            amount1 += 60;
                            console. log(
                                "You have selected 'Palak-Paneer' \n",
                                "Here is your order : 'Palak-Paneer' \n"
                            );
                        }
                        else if (main == 6){

                            let roti = readlineSync.question(`How many "Butter-Naan" do you want : `)
                            amount1 += roti * 5;
                            console.log(
                                "You have selected 'Butter-Naan'\n",
                                `Here is your order : ${roti} 'Butter-Naan' \n`
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue;
                        }
                        totalAmount1 = amount1;
                        totalBill = totalAmount1;

                        let orderAgain = readlineSync.question(`Would you like to order again (yes/no) : \n`)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your main-course of @${totalAmount1}Rs. 
                        `
                    )
                }
                else if (count == 3){

                    while (true) {

                        console.log(
                            "Here are some 'dessert' dishes choose from them : \n",
                            "1. Barfi  -  @30rs. Per Plate\n",
                            "2. Kheer  -  @30rs. Per Plate\n",
                            "3. Kaju-Katli  -  @40rs. Per Plate\n",
                            "4. Laddoo  -  @35rs. Per Plate\n",
                            "5. Peda  -  @50rs. Per Plate\n"
                        );

                        let dessert = readlineSync.question("\nChoose your 'Dessert' according to numbers : \n")

                        if (dessert == 1){

                            amount2 += 30;
                            console. log(
                                "You have selected 'Barfi' \n",
                                "Here is your order : 'Barfi' \n"
                            );
                        }
                        else if (dessert == 2){

                            amount2 += 30;
                            console. log(
                                "You have selected 'Kheer' \n",
                                "Here is your order : 'Kheer' \n"
                            );
                        }
                        else if (dessert == 3){

                            amount2 += 40;
                            console. log(
                                "You have selected 'Kaju-Katli' \n",
                                "Here is your order : 'Kaju-Katli' \n"
                            );
                        }
                        else if (dessert == 4){

                            amount2 += 35;
                            console. log(
                                "You have selected 'Laddoo' \n",
                                "Here is your order : 'Laddoo' \n"
                            );
                        }
                        else if (dessert == 5){

                            amount2 += 50;
                            console. log(
                                "You have selected 'Peda' \n",
                                "Here is your order : 'Peda' \n"
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue
                        }
                        totalAmount2 = amount2;
                        totalBill = totalAmount2;

                        let orderAgain = readlineSync.question(`Would you like to order again (yes/no) : \n`)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your Dessert of @${totalAmount2}Rs. 
                        `
                    )
                }
                else if (count == 4){

                    while (true) {

                        console.log(
                            "Here are some 'side-dishes' dishes choose from them : \n",
                            "1. Lauki-Raita  -  @10rs. Per Plate\n",
                            "2. Mango-Pickle  -  @20rs. Per Plate\n",
                            "3. Papad  -  @10rs. Per Plate\n",
                            "4. Coriander-Chutney  -  @20rs. Per Plate\n",
                            "5. Baingan-Bharta  -  @30rs. Per Plate\n"
                        );

                        let side = readlineSync.question("\nChoose your 'Side-dishes' according to numbers : \n")

                        if (side == 1){
                            
                            amount3 += 10;
                            console. log(
                                "You have selected 'Lauki-Raita' \n",
                                "Here is your order : 'Lauki-Raita' \n"
                            );
                        }
                        else if (side == 2){

                            amount3 += 20;
                            console. log(
                                "You have selected 'Mango-Pickle' \n",
                                "Here is your order : 'Mango-Pickle' \n"
                            );
                        }
                        else if (side == 3){

                            amount3 += 10;
                            console. log(
                                "You have selected 'Papad' \n",
                                "Here is your order : 'Papad' \n"
                            );
                        }
                        else if (side == 4){

                            amount3 += 20;
                            console. log(
                                "You have selected 'Coriander-Chutney' \n",
                                "Here is your order : 'Coriander-Chutney' \n"
                            );
                        }
                        else if (side == 5){

                            amount3 += 30;
                            console. log(
                                "You have selected 'Baingan-Bharta' \n",
                                "Here is your order : 'Baingan-Bharta' \n"
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue;
                        }
                        totalAmount3 = amount3;
                        totalBill = totalAmount3;

                        let orderAgain = readlineSync.question(`Would you like to order again (yes/no) : \n`)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your side-dishes of @${totalAmount3}Rs. 
                        `
                    )
                }
                else if (count == 5){

                    while (true) {

                        console.log(
                            "Here are some drinks choose from them :\n",
                            "1. Water  -  @30rs. Per Bottle\n",
                            "2. Kadak-Chai  -  @50rs. Per Bottle\n",
                            "3. Lemonade  -  @30rs. Per Bottle\n",
                            "4. Fruit-Juice  -  @20rs. Per Glass\n",
                            "5. Milk  -  @50rs. Per Glass"
                        );

                        let drinks = readlineSync.question("\nChoose your 'Drinks' according to numbers : \n")
                        
                        if (drinks == 1){

                            amount4 += 30;
                            console. log(
                                "You have selected 'Water' \n",
                                "Here is your order : 'Water' \n"
                            );
                        }
                        else if (drinks == 2){

                            amount4 += 50;
                            console. log(
                                "You have selected 'Kadak-Chai' \n",
                                "Here is your order : 'Kadak-Chai' \n"
                            );
                        }
                        else if (drinks == 3){

                            amount4 += 30;
                            console. log(
                                "You have selected 'Lemonade' \n",
                                "Here is your order : 'Lemonade' \n"
                            );
                        }
                        else if (drinks == 4){

                            amount4 += 20;
                            console. log(
                                "You have selected 'Fruit-juice' \n",
                                "Here is your order : 'Fruit-juice' \n"
                            );
                        }
                        else if (drinks == 5){

                            amount4 += 50;
                            console. log(
                                "You have selected 'Milk' \n",
                                "Here is your order : 'Milk' \n"
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue;
                        }
                        totalAmount4 = amount4;
                        totalBill = totalAmount4;

                        let orderAgain = readlineSync.question(`Would you like to order again (yes/no) : \n`)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your drinks of @${totalAmount4}Rs. 
                        `
                    )
                }
                else {
                    console.log(
                        "You've entered wrong number - Please select food according to the courses numbers\n",
                        "Now start it again!\n"
                    );
                    continue;
                }
                let goBack = readlineSync.question(`\nWould you like to go for Main-course/Dessert/Side-Dishes/Drinks (yes/no) : `);

                if (goBack.toLowerCase() === "no") {
                    break;
                }
            }
            
            totalBill = totalAmount+totalAmount1+totalAmount2+totalAmount3+totalAmount4;
            console.log(
                `
                Total Bill : ${totalBill}Rs. 
                "Thanks for coming - come Again"
                `
            );
            break;
        }
        else {
            console.log("Please enter 'Tap' to see the 'Menu-Card' \n");
            continue;
        }
    }
}

else if (day == 3){

    console.log(
        "Thanks for choosing 'Wednesday'\n",
        "\nHere is the Menu-Card : Type 'Tap' to open it\n"
    );
    let amount = 0, amount1 = 0, amount2 = 0, amount3 = 0, amount4 = 0;
    let totalAmount = 0, totalAmount1 = 0, totalAmount2 =0, totalAmount3 = 0, totalAmount4 = 0;
    let totalBill = 0;

    while (true) {
        let tap = readlineSync.question("Type : ")

        if (tap.toLowerCase() === "tap"){

            while (true) {
                console.log(
                    "Choose your Courses : \n",
                    "1. Starters or Appetizers\n",
                    "2. Main-Courses or Entrees\n",
                    "3. Dessert\n",
                    "4. Side dishes\n",
                    "5. Drinks\n"
                );

                let count = readlineSync.question("Select the course according to the numbers : \n")

                if (count == 1){

                    while (true) {
                        console.log(
                            "\nHere are your dishes \n",
                            "1. Bhel-Puri  -  @20rs. Per Plate\n",
                            "2. Samosa  -  @10rs. Per Plate\n",
                            "3. Aloo-Chaat  -  @25rs. Per Plate\n",
                            "4. Papdi-Chaat  -  @30rs. Per Plate\n",
                            "5. Paneer tikka  -  @50rs. Per Plate\n"
                        );

                        let starter = readlineSync.question("\nChoose your starter according to numbers : \n")

                        if (starter == 1){

                            amount += 20;
                            console.log(
                                "You have choosen 'Bhel-Puri' \n",
                                "Here is your order : 'Bhel-Puri'\n"
                            );
                            
                        }
                        else if (starter == 2){

                            amount += 10;
                            console.log(
                                "You have choosen 'Samosa' \n",
                                "Here is your order : 'Samosa' \n"
                            );
                            
                        }else if (starter == 3){

                            amount += 25;
                            console.log(
                                "You have choosen 'Aloo-Chaat'\n",
                                "Here is your order : 'Aloo-Chaat'\n"
                            );
                            
                        }
                        else if (starter == 4){

                            amount += 30;
                            console.log(
                                "You have choosen 'Papdi-Chaat' \n",
                                "Here is your order : 'Papdi-Chaat'\n"
                            );
                        }
                        else if (starter == 5){

                            amount += 50;
                            console.log(
                                "You have choosen 'Paneer tikka' \n",
                                "Here is your order : 'Paneer tikka'\n"
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue;
                        }
                        totalAmount = amount;
                        totalBill = totalAmount;

                        let orderAgain = readlineSync.question(`\nWould you like to order again (yes/no) : `)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your starters of @${totalAmount}Rs. 
                        `
                    )
                }
                else if (count == 2){

                    while (true) {
                        console.log(
                            "\nHere are some 'main-course' dishes choose from them : \n",
                            "1. Dal-Makhni  -  @50rs. Per Plate\n",
                            "2. Shahi-Paneer  -  @80rs. Per Plate\n",
                            "3. Malai-Kofta  -  @90rs. Per Plate\n",
                            "4. Malai-Chaap  -  @120rs. Per Plate\n",
                            "5. Bhindi-Masala  -  @60rs. Per Plate\n",
                            "6. Butter-Naan  -  @5rs. Per Roti\n"
                        );

                        let main = readlineSync.question("\nChoose your Main-course according to numbers : \n")

                        if (main == 1){

                            amount1 += 50;
                            console.log(
                                "You have selected 'Dal-Makhni'\n",
                                "Here is your order : 'Veg-Biryani' \n"
                            );
                        }
                        else if (main == 2){

                            amount1 += 80;
                            console.log(
                                "You have selected 'Shahi-Paneer'\n",
                                "Here is your order : 'Shahi-Paneer' \n"
                            );
                        }
                        else if (main == 3){

                            amount1 += 90;
                            console.log(
                                "You have selected 'Malai-Kofta'\n",
                                "Here is your order : 'Palak-Paneer' \n"
                            );
                        }
                        else if (main == 4){

                            amount1 += 120;
                            console.log(
                                "You have selected 'Malai-Chaap'\n",
                                "Here is your order : 'Malai-Chaap' \n"
                            );
                        }
                        else if (main == 5){

                            amount1 += 60;
                            console. log(
                                "You have selected 'Bhindi-Masala' \n",
                                "Here is your order : 'Rajma' \n"
                            );
                        }
                        else if (main == 6){

                            let roti = readlineSync.question(`How many "Butter-Naan" do you want : `)
                            amount1 += roti * 5;
                            console.log(
                                "You have selected 'Butter-Naan'\n",
                                `Here is your order : ${roti} 'Butter-Naan' \n`
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue;
                        }
                        totalAmount1 = amount1;
                        totalBill = totalAmount1;

                        let orderAgain = readlineSync.question(`Would you like to order again (yes/no) : \n`)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your main-course of @${totalAmount1}Rs. 
                        `
                    )
                }
                else if (count == 3){

                    while (true) {
                        console.log(
                            "Here are some 'dessert' dishes choose from them : \n",
                            "1. Sandesh  -  @30rs. Per Plate\n",
                            "2. Kulfi  -  @30rs. Per Plate\n",
                            "3. Rabri  -  @40rs. Per Plate\n",
                            "4. Phirni  -  @35rs. Per Plate\n",
                            "5. Mysore-Pak  -  @50rs. Per Plate\n"
                        );

                        let dessert = readlineSync.question("\nChoose your 'Dessert' according to numbers : \n")

                        if (dessert == 1){

                            amount2 += 30;
                            console. log(
                                "You have selected 'Sandesh' \n",
                                "Here is your order : 'Sandesh' \n"
                            );
                        }
                        else if (dessert == 2){

                            amount2 += 30;
                            console. log(
                                "You have selected 'Kulfi' \n",
                                "Here is your order : 'Kulfi' \n"
                            );
                        }
                        else if (dessert == 3){

                            amount2 += 40;
                            console. log(
                                "You have selected 'Rabri' \n",
                                "Here is your order : 'Rabri' \n"
                            );
                        }
                        else if (dessert == 4){

                            amount2 += 35;
                            console. log(
                                "You have selected 'Phirni' \n",
                                "Here is your order : 'Phirni' \n"
                            );
                        }
                        else if (dessert == 5){

                            amount2 += 50;
                            console. log(
                                "You have selected 'Mysore-Pak' \n",
                                "Here is your order : 'Mysore-Pak' \n"
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue;
                        }
                        totalAmount2 = amount2;
                        totalBill = totalAmount2;

                        let orderAgain = readlineSync.question(`Would you like to order again (yes/no) : \n`)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your Dessert of @${totalAmount2}Rs. 
                        `
                    )
                }
                else if (count == 4){

                    while (true) {
                        console.log(
                            "Here are some 'side-dishes' dishes choose from them : \n",
                            "1. Onian-Raita  -  @10rs. Per Plate\n",
                            "2. Tamarind-Chutney  -  @20rs. Per Plate\n",
                            "3. Papad  -  @10rs. Per Plate\n",
                            "4. Green-Chillie-Pickle  -  @20rs. Per Plate\n",
                            "5. Plain-Rice  -  @30rs. Per Plate\n"
                        );

                        let side = readlineSync.question("\nChoose your 'Side-dishes' according to numbers : \n")

                        if (side == 1){
                            
                            amount3 += 10;
                            console. log(
                                "You have selected 'Onian-Raita' \n",
                                "Here is your order : 'Onian-Raita' \n"
                            );
                        }
                        else if (side == 2){

                            amount3 += 20;
                            console. log(
                                "You have selected 'Tamarind-Chutney' \n",
                                "Here is your order : 'Tamarind-Chutney' \n"
                            );
                        }
                        else if (side == 3){

                            amount3 += 10;
                            console. log(
                                "You have selected 'Papad' \n",
                                "Here is your order : 'Papad' \n"
                            );
                        }
                        else if (side == 4){

                            amount3 += 20;
                            console. log(
                                "You have selected 'Greem-Chillie-Pickle' \n",
                                "Here is your order : 'Greem-Chillie-Pickle' \n"
                            );
                        }
                        else if (side == 5){

                            amount3 += 30;
                            console. log(
                                "You have selected 'Plain-Rice' \n",
                                "Here is your order : 'Plain-Rice' \n"
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue;
                        }
                        totalAmount3 = amount3;
                        totalBill = totalAmount3;

                        let orderAgain = readlineSync.question(`Would you like to order again (yes/no) : \n`)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your side-dishes of @${totalAmount3}Rs. 
                        `
                    )
                }
                else if (count == 5){

                    while (true) {
                        console.log(
                            "Here are some drinks choose from them :\n",
                            "1. Water  -  @30rs. Per Bottle\n",
                            "2. Herbal-Tea  -  @50rs. Per Bottle\n",
                            "3. Butter-Milk  -  @30rs. Per Bottle\n",
                            "4. Aam-Panna  -  @20rs. Per Glass\n",
                            "5. Jaljeera  -  @50rs. Per Glass"
                        );

                        let drinks = readlineSync.question("\nChoose your 'Drinks' according to numbers : \n")
                        
                        if (drinks == 1){

                            amount4 += 30;
                            console. log(
                                "You have selected 'Water' \n",
                                "Here is your order : 'Water' \n"
                            );
                        }
                        else if (drinks == 2){

                            amount4 += 50;
                            console. log(
                                "You have selected 'Herbal-Tea' \n",
                                "Here is your order : 'Herbal-Tea' \n"
                            );
                        }
                        else if (drinks == 3){

                            amount4 += 30;
                            console. log(
                                "You have selected 'Butter-Milk' \n",
                                "Here is your order : 'Butter-Milk' \n"
                            );
                        }
                        else if (drinks == 4){

                            amount4 += 20;
                            console. log(
                                "You have selected 'Aam-Panna' \n",
                                "Here is your order : 'Aam-Panna' \n"
                            );
                        }
                        else if (drinks == 5){

                            amount4 += 50;
                            console. log(
                                "You have selected 'Jaljeera' \n",
                                "Here is your order : 'Jaljeera' \n"
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue;
                        }
                        totalAmount4 = amount4;
                        totalBill = totalAmount4;

                        let orderAgain = readlineSync.question(`Would you like to order again (yes/no) : \n`)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your side-dishes of @${totalAmount4}Rs. 
                        `
                    )
                }
                else {
                    console.log(
                        "You've entered wrong number - Please select food according to the courses numbers\n",
                        "Now start it again!\n"
                    );
                    continue;
                }
                let goBack = readlineSync.question(`\nWould you like to go for Main-course/Dessert/Side-Dishes/Drinks (yes/no) : `);

                if (goBack.toLowerCase() === "no") {
                    break;
                }
                
            }
            
            totalBill = totalAmount+totalAmount1+totalAmount2+totalAmount3+totalAmount4;
            console.log(
                `
                Total Bill : ${totalBill}Rs.
                "Thanks for coming - come Again"
                `
            );
            break;
        }
        else {
            console.log("Please enter 'Tap' to see the 'Menu-Card' \n");
            continue;
        }
    }
}

else if (day == 4){

    console.log(
        "Thanks for choosing 'Thursday'\n",
        "\nHere is the Menu-Card : Type 'Tap' to open it\n"
    );
    let amount = 0, amount1 = 0, amount2 = 0, amount3 = 0, amount4 = 0;
    let totalAmount = 0, totalAmount1 = 0, totalAmount2 =0, totalAmount3 = 0, totalAmount4 = 0;
    let totalBill = 0;
    
    while (true) {
        let tap = readlineSync.question("Type : ")

        if (tap.toLowerCase() == "tap"){

            while (true) {
                console.log(
                    "Choose your Courses : \n",
                    "1. Starters or Appetizers\n",
                    "2. Main-Courses or Entrees\n",
                    "3. Dessert\n",
                    "4. Side dishes\n",
                    "5. Drinks\n"
                );

                let count = readlineSync.question("Select the course according to the numbers : \n")

                if (count == 1){

                    while (true) {
                        console.log(
                            "\nHere are your dishes \n",
                            "1. Snacks  -  @20rs. Per Plate\n",
                            "2. Vada-Pav  -  @10rs. Per Plate\n",
                            "3. Pakoda  -  @25rs. Per Plate\n",
                            "4. Pav-Bhaji  -  @30rs. Per Plate\n",
                            "5. Kathi-Rolls  -  @50rs. Per Plate\n"
                        );

                        let starter = readlineSync.question("\nChoose your starter according to numbers : \n")

                        if (starter == 1){

                            amount += 20;
                            console.log(
                                "You have choosen 'Snacks' \n",
                                "Here is your order : 'Snacks'\n"
                            );
                            
                        }
                        else if (starter == 2){

                            amount += 10;
                            console.log(
                                "You have choosen 'Vada-Pav' \n",
                                "Here is your order : 'Vada-Pav'\n"
                            );
                            
                        }else if (starter == 3){

                            amount += 25;
                            console.log(
                                "You have choosen 'Pakoda'\n",
                                "Here is your order : 'Pakoda'\n"
                            );
                            
                        }
                        else if (starter == 4){

                            amount += 30;
                            console.log(
                                "You have choosen 'Pav-Bhaji' \n",
                                "Here is your order : 'Pav-Bhaji'\n"
                            );
                        }
                        else if (starter == 5){

                            amount += 50;
                            console.log(
                                "You have choosen 'Kathi-Rolls' \n",
                                "Here is your order : 'Kathi-Rolls'\n"
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue;
                        }
                        totalAmount = amount;
                        totalBill = totalAmount;

                        let orderAgain = readlineSync.question(`\nWould you like to order again (yes/no) : `)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your starters of @${totalAmount}Rs. 
                        `
                    )
                }
                else if (count == 2){

                    while (true) {
                        console.log(
                            "\nHere are some 'main-course' dishes choose from them : \n",
                            "1. Sarson-Ka-Saag  -  @50rs. Per Plate\n",
                            "2. Dum-Aloo  -  @80rs. Per Plate\n",
                            "3. Jeera-Rice  -  @90rs. Per Plate\n",
                            "4. Pulao  -  @120rs. Per Plate\n",
                            "5. Kadhi-Pakoda  -  @60rs. Per Plate\n",
                            "6. Butter-Naan  -  @5rs. Per Roti\n"
                        );

                        let main = readlineSync.question("\nChoose your Main-course according to numbers : \n")

                        if (main == 1){

                            amount1 += 50;
                            console.log(
                                "You have selected 'Sarson-Ka-Saag'\n",
                                "Here is your order : 'Sarson-Ka-Saag' \n"
                            );
                        }
                        else if (main == 2){

                            amount1 += 80;
                            console.log(
                                "You have selected 'Dum-Aloo'\n",
                                "Here is your order : 'Dum-Aloo' \n"
                            );
                        }
                        else if (main == 3){

                            amount1 += 90;
                            console.log(
                                "You have selected 'Jeera-Rice'\n",
                                "Here is your order : 'Jeera-Rice' \n"
                            );
                        }
                        else if (main == 4){

                            amount1 += 120;
                            console.log(
                                "You have selected 'Pulao'\n",
                                "Here is your order : 'Pulao' \n"
                            );
                        }
                        else if (main == 5){

                            amount1 += 60;
                            console. log(
                                "You have selected 'Kadhi-Pakoda' \n",
                                "Here is your order : 'Kadhi-Pakoda' \n"
                            );
                        }
                        else if (main == 6){

                            let roti = readlineSync.question(`How many "Butter-Naan" do you want : `)
                            amount1 += roti * 5;
                            console.log(
                                "You have selected 'Butter-Naan'\n",
                                `Here is your order : ${roti} 'Butter-Naan' \n`
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                        }
                        totalAmount1 = amount1;
                        totalBill = totalAmount1;

                        let orderAgain = readlineSync.question(`Would you like to order again (yes/no) : \n`)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your main-course of @${totalAmount1}Rs. 
                        `
                    )
                }
                else if (count == 3){

                    while (true) {
                        console.log(
                            "Here are some 'dessert' dishes choose from them : \n",
                            "1. Modak  -  @30rs. Per Plate\n",
                            "2. Chhena  -  @30rs. Per Plate\n",
                            "3. Pithe  -  @40rs. Per Plate\n",
                            "4. Nan-Khatai  -  @35rs. Per Plate\n",
                            "5. Besan-Barfi  -  @50rs. Per Plate\n"
                        );

                        let dessert = readlineSync.question("\nChoose your 'Dessert' according to numbers : \n")

                        if (dessert == 1){

                            amount2 += 30;
                            console. log(
                                "You have selected 'Modak' \n",
                                "Here is your order : 'Modak' \n"
                            );
                        }
                        else if (dessert == 2){

                            amount2 += 30;
                            console. log(
                                "You have selected 'Chhena' \n",
                                "Here is your order : 'Chhena' \n"
                            );
                        }
                        else if (dessert == 3){

                            amount2 += 40;
                            console. log(
                                "You have selected 'Pithe' \n",
                                "Here is your order : 'Pithe' \n"
                            );
                        }
                        else if (dessert == 4){

                            amount2 += 35;
                            console. log(
                                "You have selected 'Nan-Khatai' \n",
                                "Here is your order : 'Nan-Khatai' \n"
                            );
                        }
                        else if (dessert == 5){

                            amount2 += 50;
                            console. log(
                                "You have selected 'Besan-Barfi' \n",
                                "Here is your order : 'Besan-Barfi' \n"
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue;
                        }
                        totalAmount2 = amount2;
                        totalBill = totalAmount2;

                        let orderAgain = readlineSync.question(`Would you like to order again (yes/no) : \n`)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your Dessert of @${totalAmount2}Rs. 
                        `
                    )
                }
                else if (count == 4){

                    while (true) {
                        console.log(
                            "Here are some 'side-dishes' dishes choose from them : \n",
                            "1. Cucumber-Raita  -  @10rs. Per Plate\n",
                            "2. Ginger-Chutney  -  @20rs. Per Plate\n",
                            "3. Papad  -  @10rs. Per Plate\n",
                            "4. Lime-Pickle  -  @20rs. Per Plate\n",
                            "5. Khichri  -  @30rs. Per Plate\n"
                        );

                        let side = readlineSync.question("\nChoose your 'Side-dishes' according to numbers : \n")

                        if (side == 1){
                            
                            amount3 += 10;
                            console. log(
                                "You have selected 'Cucumber-Raita' \n",
                                "Here is your order : 'Cucumber-Raita' \n"
                            );
                        }
                        else if (side == 2){

                            amount3 += 20;
                            console. log(
                                "You have selected 'Ginger-Chutney' \n",
                                "Here is your order : 'Ginger-Chutney' \n"
                            );
                        }
                        else if (side == 3){

                            amount3 += 10;
                            console. log(
                                "You have selected 'Papad' \n",
                                "Here is your order : 'Papad' \n"
                            );
                        }
                        else if (side == 4){

                            amount3 += 20;
                            console. log(
                                "You have selected 'Lime-Pickle' \n",
                                "Here is your order : 'Lime-Pickle' \n"
                            );
                        }
                        else if (side == 5){

                            amount3 += 30;
                            console. log(
                                "You have selected 'Khichri' \n",
                                "Here is your order : 'Khichri' \n"
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue;
                        }
                        totalAmount3 = amount3;
                        totalBill = totalAmount3;

                        let orderAgain = readlineSync.question(`Would you like to order again (yes/no) : \n`)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your side-dishes of @${totalAmount3}Rs. 
                        `
                    )
                }
                else if (count == 5){

                    while (true) {
                        console.log(
                            "Here are some drinks choose from them :\n",
                            "1. Water  -  @30rs. Per Bottle\n",
                            "2. Badam-Milk  -  @50rs. Per Bottle\n",
                            "3. Masala-Chai  -  @30rs. Per Bottle\n",
                            "4. Lassi  -  @20rs. Per Glass\n",
                            "5. Nimbu-Paani  -  @50rs. Per Glass"
                        );

                        let drinks = readlineSync.question("\nChoose your 'Drinks' according to numbers : \n")
                        
                        if (drinks == 1){

                            amount4 += 30;
                            console. log(
                                "You have selected 'Water' \n",
                                "Here is your order : 'Water' \n"
                            );
                        }
                        else if (drinks == 2){

                            amount4 += 50;
                            console. log(
                                "You have selected 'Badam-Milk' \n",
                                "Here is your order : 'Badam-Milk' \n"
                            );
                        }
                        else if (drinks == 3){

                            amount4 += 30;
                            console. log(
                                "You have selected 'Masala-Chai' \n",
                                "Here is your order : 'Masala-Chai' \n"
                            );
                        }
                        else if (drinks == 4){

                            amount4 += 20;
                            console. log(
                                "You have selected 'Lassi' \n",
                                "Here is your order : 'Lassi' \n"
                            );
                        }
                        else if (drinks == 5){

                            amount4 += 50;
                            console. log(
                                "You have selected 'Nimbu-Paani' \n",
                                "Here is your order : 'Nimbu-Paani' \n"
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue;
                        }
                        totalAmount4 = amount4;
                        totalBill = totalAmount4;

                        let orderAgain = readlineSync.question(`Would you like to order again (yes/no) : \n`)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your drinks of @${totalAmount4}Rs. 
                        `
                    )
                }
                else {
                    console.log(
                        "You've entered wrong number - Please select food according to the courses numbers\n",
                        "Now start it again!\n"
                    );
                    continue;
                }
                let goBack = readlineSync.question(`\nWould you like to go for Main-course/Dessert/Side-Dishes/Drinks (yes/no) : `);

                if (goBack.toLowerCase() === "no") {
                    break;
                }
            }
            totalBill = totalAmount+totalAmount1+totalAmount2+totalAmount3+totalAmount4;
            console.log(
                `
                Total Bill : ${totalBill}Rs. 
                "Thanks for coming - come Again"
                `
            );
            break;
        }
        else {
            console.log("Please enter 'Tap' to see the 'Menu-Card' \n");
            continue;
        }
    }
}

else if (day == 5){

    console.log(
        "Thanks for choosing 'Friday'\n",
        "\nHere is the Menu-Card : Type 'Tap' to open it\n"
    );

    let amount = 0, amount1 = 0, amount2 = 0, amount3 = 0, amount4 = 0;
    let totalAmount = 0, totalAmount1 = 0, totalAmount2 =0, totalAmount3 = 0, totalAmount4 = 0;
    let totalBill = 0;
    
    while (true) {

        let tap = readlineSync.question("Type : ")

        if (tap.toLowerCase() == "tap"){

            while (true) {
                console.log(
                    "Choose your Courses : \n",
                    "1. Starters or Appetizers\n",
                    "2. Main-Courses or Entrees\n",
                    "3. Dessert\n",
                    "4. Side dishes\n",
                    "5. Drinks\n"
                );

                let count = readlineSync.question("Select the course according to the numbers : \n")

                if (count == 1){

                    while (true) {

                        console.log(
                            "\nHere are your dishes \n",
                            "1. Dhokla  -  @20rs. Per Plate\n",
                            "2. Mirchi-Bhajji  -  @10rs. Per Plate\n",
                            "3. Paneer-Pakoda  -  @25rs. Per Plate\n",
                            "4. Bhutte-Ke-Kabab  -  @30rs. Per Plate\n",
                            "5. Paneer tikka  -  @50rs. Per Plate\n"
                        );

                        let starter = readlineSync.question("\nChoose your starter according to numbers : \n")

                        if (starter == 1){

                            amount += 20;
                            console.log(
                                "You have choosen 'Dhokla' \n",
                                "Here is your order : 'Dhokla'\n"
                            );
                            
                        }
                        else if (starter == 2){

                            amount += 10;
                            console.log(
                                "You have choosen 'Mirchi-Bhajji' \n",
                                "Here is your order : 'Mirchi-Bhajji'\n"
                            );
                            
                        }else if (starter == 3){

                            amount += 25;
                            console.log(
                                "You have choosen 'Paneer-Pakoda'\n",
                                "Here is your order 'Paneer-Pakoda'\n"
                            );
                            
                        }
                        else if (starter == 4){

                            amount += 30;
                            console.log(
                                "You have choosen 'Bhutte-Ke-Kabab' \n",
                                "Here is your order : 'Bhutte-Ke-Kabab'\n"
                            );
                        }
                        else if (starter == 5){

                            amount += 50;
                            console.log(
                                "You have choosen 'Paneer tikka' \n",
                                "Here is your order : 'Paneer tikka'\n"
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue;
                        }
                        totalAmount = amount;
                        totalBill = totalAmount;

                        let orderAgain = readlineSync.question(`\nWould you like to order again (yes/no) : `)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your starters of @${totalAmount}Rs. 
                        `
                    )
                }
                else if (count == 2){

                    while (true) {

                        console.log(
                            "\nHere are some 'main-course' dishes choose from them : \n",
                            "1. Paneer-Bhurji  -  @50rs. Per Plate\n",
                            "2. Lauki-Kofta  -  @80rs. Per Plate\n",
                            "3. Dal-Tadka  -  @90rs. Per Plate\n",
                            "4. Coconut-Rice  -  @120rs. Per Plate\n",
                            "5. Navratan-Korma  -  @60rs. Per Plate\n",
                            "6. Butter-Naan  -  @5rs. Per Roti\n"
                        );

                        let main = readlineSync.question("\nChoose your Main-course according to numbers : \n")

                        if (main == 1){

                            amount1 += 50;
                            console.log(
                                "You have selected 'Paneer-Bhurji'\n",
                                "Here is your order : 'Paneer-Bhurji' \n"
                            );
                        }
                        else if (main == 2){

                            amount1 += 80;
                            console.log(
                                "You have selected 'Lauki-Kofta'\n",
                                "Here is your order : 'Lauki-Kofta' \n"
                            );
                        }
                        else if (main == 3){

                            amount1 += 90;
                            console.log(
                                "You have selected 'Dal-Tadka'\n",
                                "Here is your order : 'Dal-Tadka' \n"
                            );
                        }
                        else if (main == 4){

                            amount1 += 120;
                            console.log(
                                "You have selected 'Coconut-Rice'\n",
                                "Here is your order : 'Coconut-Rice'\n"
                            );
                        }
                        else if (main == 5){

                            amount1 += 60;
                            console. log(
                                "You have selected 'Navratan-Korma' \n",
                                "Here is your order : 'Navratan-Korma' \n"
                            );
                        }
                        else if (main == 6){

                            let roti = readlineSync.question(`How many "Butter-Naan" do you want : `)
                            amount1 += roti * 5;
                            console.log(
                                "You have selected 'Butter-Naan'\n",
                                `Here is your order : ${roti} 'Butter-Naan' \n`
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue;
                        }
                        totalAmount1 = amount1;
                        totalBill = totalAmount1;

                        let orderAgain = readlineSync.question(`Would you like to order again (yes/no) : \n`)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your main-course of @${totalAmount1}Rs. 
                        `
                    )
                }
                else if (count == 3){

                    while (true) {

                        console.log(
                            "Here are some 'dessert' dishes choose from them : \n",
                            "1. Malpua  -  @30rs. Per Plate\n",
                            "2. Ice-Cream  -  @30rs. Per Plate\n",
                            "3. Balushahi  -  @40rs. Per Plate\n",
                            "4. Imarti  -  @35rs. Per Plate\n",
                            "5. Gujiya  -  @50rs. Per Plate\n"
                        );

                        let dessert = readlineSync.question("\nChoose your 'Dessert' according to numbers : \n")

                        if (dessert == 1){

                            amount2 += 30;
                            console. log(
                                "You have selected 'Malpua' \n",
                                "Here is your order : 'Malpua' \n"
                            );
                        } 
                        else if (dessert == 2){

                            amount2 += 30;
                            console. log(
                                "You have selected 'Ice-Cream' \n",
                                "Here is your order : 'Ice-Cream' \n"
                            );
                        }
                        else if (dessert == 3){

                            amount2 += 40;
                            console. log(
                                "You have selected 'Balushahi' \n",
                                "Here is your order : 'Balushahi' \n"
                            );
                        }
                        else if (dessert == 4){

                            amount2 += 35;
                            console. log(
                                "You have selected 'Imarti' \n",
                                "Here is your order : 'Imarti' \n"
                            );
                        }
                        else if (dessert == 5){

                            amount2 += 50;
                            console. log(
                                "You have selected 'Gujiya' \n",
                                "Here is your order : 'Gujiya' \n"
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue;
                        }
                        totalAmount2 = amount2;
                        totalBill = totalAmount2;

                        let orderAgain = readlineSync.question(`Would you like to order again (yes/no) : \n`)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your Dessert of @${totalAmount2}Rs. 
                        `
                    )
                }
                else if (count == 4){

                    while (true) {

                        console.log(
                            "Here are some 'side-dishes' dishes choose from them : \n",
                            "1. Boondi-Raita  -  @10rs. Per Plate\n",
                            "2. Tamarind-Chutney  -  @20rs. Per Plate\n",
                            "3. Papad  -  @10rs. Per Plate\n",
                            "4. Chillie-Pickle  -  @20rs. Per Plate\n",
                            "5. Bharwa-Bhindi  -  @30rs. Per Plate\n"
                        );

                        let side = readlineSync.question("\nChoose your 'Side-dishes' according to numbers : \n")

                        if (side == 1){
                            
                            amount3 += 10;
                            console. log(
                                "You have selected 'Boondi-Raita' \n",
                                "Here is your order : 'Boondi-Raita' \n"
                            );
                        }
                        else if (side == 2){

                            amount3 += 20;
                            console. log(
                                "You have selected 'Tamarind-Chutney' \n",
                                "Here is your order : 'Tamarind-Chutney' \n"
                            );
                        }
                        else if (side == 3){

                            amount3 += 10;
                            console. log(
                                "You have selected 'Papad' \n",
                                "Here is your order : 'Papad' \n"
                            );
                        }
                        else if (side == 4){

                            amount3 += 20;
                            console. log(
                                "You have selected 'Chillie-Pickle' \n",
                                "Here is your order : 'Chillie-Pickle' \n"
                            );
                        }
                        else if (side == 5){

                            amount3 += 30;
                            console. log(
                                "You have selected 'Bharwa-Bhindi' \n",
                                "Here is your order : 'Bharwa-Bhindi' \n"
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue;
                        }
                        totalAmount3 = amount3;
                        totalBill = totalAmount3;

                        let orderAgain = readlineSync.question(`Would you like to order again (yes/no) : \n`)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your side-dishes of @${totalAmount3}Rs. 
                        `
                    )
                }
                else if (count == 5){

                    while (true) {

                        console.log(
                            "Here are some drinks choose from them :\n",
                            "1. Water  -  @30rs. Per Bottle\n",
                            "2. Thandai  -  @50rs. Per Bottle\n",
                            "3. Coconut-Water  -  @30rs. Per Bottle\n",
                            "4. Smoothies  -  @20rs. Per Glass\n",
                            "5. Golden-Milk  -  @50rs. Per Glass"
                        );

                        let drinks = readlineSync.question("\nChoose your 'Drinks' according to numbers : \n")
                        
                        if (drinks == 1){

                            amount4 += 30;
                            console. log(
                                "You have selected 'Water' \n",
                                "Here is your order : 'Water' \n"
                            );
                        }
                        else if (drinks == 2){

                            amount4 += 50;
                            console. log(
                                "You have selected 'Thandai' \n",
                                "Here is your order : 'Thandai' \n"
                            );
                        }
                        else if (drinks == 3){

                            amount4 += 30;
                            console. log(
                                "You have selected 'Coconut-Water' \n",
                                "Here is your order : 'Coconut-Water' \n"
                            );
                        }
                        else if (drinks == 4){

                            amount4 += 20;
                            console. log(
                                "You have selected 'Smoothies' \n",
                                "Here is your order : 'Smoothies' \n"
                            );
                        }
                        else if (drinks == 5){

                            amount4 += 50;
                            console. log(
                                "You have selected 'Golden-Milk' \n",
                                "Here is your order : 'Golden-Milk' \n"
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue;
                        }
                        totalAmount4 = amount4;
                        totalBill = totalAmount4;

                        let orderAgain = readlineSync.question(`Would you like to order again (yes/no) : \n`)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your drinks of @${totalAmount4}Rs. 
                        `
                    )
                }
                else {
                    console.log(
                        "You've entered wrong number - Please select food according to the courses numbers\n",
                        "Now start it again!\n"
                    );
                    continue;
                }
                let goBack = readlineSync.question(`\nWould you like to go for Main-course/Dessert/Side-Dishes/Drinks (yes/no) : `);

                if (goBack.toLowerCase() === "no") {
                    break;
                }
            }

            totalBill = totalAmount+totalAmount1+totalAmount2+totalAmount3+totalAmount4;
            console.log(
                `
                Total Bill : ${totalBill}Rs. 
                "Thanks for coming - come Again"
                `
            );
            break;
        }
        else {
            console.log("Please enter 'Tap' to see the 'Menu-Card' \n");
            continue;
        }
    }
}

else if (day == 6){

    console.log(
        "Thanks for choosing 'Saturday'\n",
        "\nHere is the Menu-Card : Type 'Tap' to open it\n"
    );

    let amount = 0, amount1 = 0, amount2 = 0, amount3 = 0, amount4 = 0;
    let totalAmount = 0, totalAmount1 = 0, totalAmount2 =0, totalAmount3 = 0, totalAmount4 = 0;
    let totalBill = 0;
    
    while (true) {

        let tap = readlineSync.question("Type : ")

        if (tap.toLowerCase() == "tap"){

            while (true) {
                console.log(
                    "Choose your Courses : \n",
                    "1. Starters or Appetizers\n",
                    "2. Main-Courses or Entrees\n",
                    "3. Dessert\n",
                    "4. Side dishes\n",
                    "5. Drinks\n"
                );

                let count = readlineSync.question("Select the course according to the numbers : \n")

                if (count == 1){

                    while (true) {

                        console.log(
                            "\nHere are your dishes \n",
                            "1. Sandwich  -  @20rs. Per Plate\n",
                            "2. Raj-Kachori  -  @10rs. Per Plate\n",
                            "3. Sev-Puri  -  @25rs. Per Plate\n",
                            "4. Kachori  -  @30rs. Per Plate\n",
                            "5. Ragda-Pattice  -  @50rs. Per Plate\n"
                        );

                        let starter = readlineSync.question("\nChoose your starter according to numbers : \n")

                        if (starter == 1){

                            amount += 20;
                            console.log(
                                "You have choosen 'Sandwich' \n",
                                "Here is your order : 'Sandwich'\n"
                            );
                            
                        }
                        else if (starter == 2){

                            amount += 10;
                            console.log(
                                "You have choosen 'Raj-Kachori' \n",
                                "Here is your order : 'Raj-Kachori'\n"
                            );
                            
                        }else if (starter == 3){

                            amount += 25;
                            console.log(
                                "You have choosen 'Sev-Puri'\n",
                                "Here is your order : 'Sev-Puri'\n"
                            );
                            
                        }
                        else if (starter == 4){

                            amount += 30;
                            console.log(
                                "You have choosen 'Kachori' \n",
                                "Here is your order : 'Kachori'\n"
                            );
                        }
                        else if (starter == 5){

                            amount += 50;
                            console.log(
                                "You have choosen 'Ragda-Pattice' \n",
                                "Here is your order : 'Ragda-Pattice'\n"
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue;
                        }
                        totalAmount = amount;
                        totalBill = totalAmount;

                        let orderAgain = readlineSync.question(`\nWould you like to order again (yes/no) : `)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your starters of @${totalAmount}Rs. 
                        `
                    )
                }
                else if (count == 2){

                    while (true) {
                        console.log(
                            "\nHere are some 'main-course' dishes choose from them : \n",
                            "1. Aloo-Soya  -  @50rs. Per Plate\n",
                            "2. Matar-Paneer  -  @80rs. Per Plate\n",
                            "3. Chhole  -  @90rs. Per Plate\n",
                            "4. Mix-Veg  -  @120rs. Per Plate\n",
                            "5. Parval  -  @60rs. Per Plate\n",
                            "6. Butter-Naan  -  @5rs. Per Roti\n"
                        );

                        let main = readlineSync.question("\nChoose your Main-course according to numbers : \n")

                        if (main == 1){

                            amount1 += 50;
                            console.log(
                                "You have selected 'Aloo-Soya'\n",
                                "Here is your order : 'Aloo-Soya' \n"
                            );
                        }
                        else if (main == 2){

                            amount1 += 80;
                            console.log(
                                "You have selected 'Matar-Paneer'\n",
                                "Here is your order : 'Matar-Paneer' \n"
                            );
                        }
                        else if (main == 3){

                            amount1 += 90;
                            console.log(
                                "You have selected 'Chhole'\n",
                                "Here is your order : 'Chhole' \n"
                            );
                        }
                        else if (main == 4){

                            amount1 += 120;
                            console.log(
                                "You have selected 'Mix-Veg'\n",
                                "Here is your order : 'Mix-Veg' \n"
                            );
                        }
                        else if (main == 5){

                            amount1 += 60;
                            console. log(
                                "You have selected 'Parval' \n",
                                "Here is your order : 'Parval' \n"
                            );
                        }
                        else if (main == 6){

                            let roti = readlineSync.question(`How many "Butter-Naan" do you want : `)
                            amount1 += roti * 5;
                            console.log(
                                "You have selected 'Butter-Naan'\n",
                                `Here is your order : ${roti} 'Butter-Naan' \n`
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue;
                        }
                        totalAmount1 = amount1;
                        totalBill = totalAmount1;

                        let orderAgain = readlineSync.question(`Would you like to order again (yes/no) : \n`)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your main-course of @${totalAmount1}Rs. 
                        `
                    )
                }
                else if (count == 3){

                    while (true) {
                        console.log(
                            "Here are some 'dessert' dishes choose from them : \n",
                            "1. Petha  -  @30rs. Per Plate\n",
                            "2. Soan-Papdi  -  @30rs. Per Plate\n",
                            "3. Shrikhand  -  @40rs. Per Plate\n",
                            "4. Basundi  -  @35rs. Per Plate\n",
                            "5. Choco-Cake  -  @50rs. Per Plate\n"
                        );

                        let dessert = readlineSync.question("\nChoose your 'Dessert' according to numbers : \n")

                        if (dessert == 1){

                            amount2 += 30;
                            console. log(
                                "You have selected 'Petha' \n",
                                "Here is your order : 'Petha' \n"
                            );
                        }
                        else if (dessert == 2){

                            amount2 += 30;
                            console. log(
                                "You have selected 'Saon-Papdi' \n",
                                "Here is your order : 'Saon-Papdi' \n"
                            );
                        }
                        else if (dessert == 3){

                            amount2 += 40;
                            console. log(
                                "You have selected 'ShriKhand' \n",
                                "Here is your order : 'ShriKhand' \n"
                            );
                        }
                        else if (dessert == 4){

                            amount2 += 35;
                            console. log(
                                "You have selected 'Basundi' \n",
                                "Here is your order : 'Basundi' \n"
                            );
                        }
                        else if (dessert == 5){

                            amount2 += 50;
                            console. log(
                                "You have selected 'Choco-Cake' \n",
                                "Here is your order : 'Choco-Cake' \n"
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue;
                        }
                        totalAmount2 = amount2;
                        totalBill = totalAmount2;

                        let orderAgain = readlineSync.question(`Would you like to order again (yes/no) : \n`)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your Dessert of @${totalAmount2}Rs. 
                        `
                    )
                }
                else if (count == 4){

                    while (true) {

                        console.log(
                            "Here are some 'side-dishes' dishes choose from them : \n",
                            "1. Special-Raita  -  @10rs. Per Plate\n",
                            "2. Tomato-Chutney  -  @20rs. Per Plate\n",
                            "3. Chana-Chaat  -  @10rs. Per Plate\n",
                            "4. Carrot-Pickle  -  @20rs. Per Plate\n",
                            "5. Lemon-Rice  -  @30rs. Per Plate\n"
                        );

                        let side = readlineSync.question("\nChoose your 'Side-dishes' according to numbers : \n")

                        if (side == 1){
                            
                            amount3 += 10;
                            console. log(
                                "You have selected 'Special-Raita' \n",
                                "Here is your order : 'Special-Raita' \n"
                            );
                        }
                        else if (side == 2){

                            amount3 += 20;
                            console. log(
                                "You have selected 'Tomato-Chutney' \n",
                                "Here is your order : 'Tomato-Chutney' \n"
                            );
                        }
                        else if (side == 3){

                            amount3 += 10;
                            console. log(
                                "You have selected 'Chana-Chaat' \n",
                                "Here is your order : 'Chana-Chaat' \n"
                            );
                        }
                        else if (side == 4){

                            amount3 += 20;
                            console. log(
                                "You have selected 'Carrot-Pickle' \n",
                                "Here is your order : 'Carrot-Pickle' \n"
                            );
                        }
                        else if (side == 5){

                            amount3 += 30;
                            console. log(
                                "You have selected 'Lemon-Rice' \n",
                                "Here is your order : 'Lemon-Rice' \n"
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue;
                        }
                        totalAmount3 = amount3;
                        totalBill = totalAmount3;

                        let orderAgain = readlineSync.question(`Would you like to order again (yes/no) : \n`)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your side-dishes of @${totalAmount3}Rs. 
                        `
                    )
                }
                else if (count == 5){

                    while (true) {

                        console.log(
                            "Here are some drinks choose from them :\n",
                            "1. Water  -  @30rs. Per Bottle\n",
                            "2. Hot-Chocolate  -  @50rs. Per Bottle\n",
                            "3. Infused-Water  -  @30rs. Per Bottle\n",
                            "4. Iced-Tea  -  @20rs. Per Glass\n",
                            "5. Milk-Shakes  -  @50rs. Per Glass"
                        );

                        let drinks = readlineSync.question("\nChoose your 'Drinks' according to numbers : \n")
                        
                        if (drinks == 1){

                            amount4 += 30;
                            console. log(
                                "You have selected 'Water' \n",
                                "Here is your order : 'Water' \n"
                            );
                        }
                        else if (drinks == 2){

                            amount4 += 50;
                            console. log(
                                "You have selected 'Hot-Chocolate' \n",
                                "Here is your order : 'Hot-Chocolate' \n"
                            );
                        }
                        else if (drinks == 3){

                            amount4 += 30;
                            console. log(
                                "You have selected 'Infused-Water' \n",
                                "Here is your order : 'Infused-Water' \n"
                            );
                        }
                        else if (drinks == 4){

                            amount4 += 20;
                            console. log(
                                "You have selected 'Iced-Tea' \n",
                                "Here is your order : 'Iced-Tea' \n"
                            );
                        }
                        else if (drinks == 5){

                            amount4 += 50;
                            console. log(
                                "You have selected 'Milk-Shakes' \n",
                                "Here is your order : 'Milk-Shakes' \n"
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue;
                        }
                        totalAmount4 = amount4;
                        totalBill = totalAmount4;

                        let orderAgain = readlineSync.question(`Would you like to order again (yes/no) : \n`)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your drinks of @${totalAmount4}Rs. 
                        `
                    )
                }
                else {
                    console.log(
                        "You've entered wrong number - Please select food according to the courses numbers\n",
                        "Now start it again!\n"
                    );
                    continue;
                }
                let goBack = readlineSync.question(`\nWould you like to go for Main-course/Dessert/Side-Dishes/Drinks (yes/no) : `);

                if (goBack.toLowerCase() === "no") {
                    break;
                }
 
            }
            totalBill = totalAmount+totalAmount1+totalAmount2+totalAmount3+totalAmount4;
            console.log(
                `
                Total Bill : ${totalBill}Rs. 
                "Thanks for coming - come Again"
                `
            );
            break;
        }
        else {
            console.log("Please enter 'Tap' to see the 'Menu-Card' \n");
            continue;
        }
    }
}

else if (day == 7){

    console.log(
        "Thanks for choosing 'Sunday'\n",
        "\nHere is the Menu-Card : Type 'Tap' to open it\n"
    );

    let amount = 0, amount1 = 0, amount2 = 0, amount3 = 0, amount4 = 0;
    let totalAmount = 0, totalAmount1 = 0, totalAmount2 =0, totalAmount3 = 0, totalAmount4 = 0;
    let totalBill = 0;

    while (true) {
    
        let tap = readlineSync.question("Type : ")

        if (tap.toLowerCase() == "tap"){

            while (true) {
                
                console.log(
                    "Choose your Courses : \n",
                    "1. Starters or Appetizers\n",
                    "2. Main-Courses or Entrees\n",
                    "3. Dessert\n",
                    "4. Side dishes\n",
                    "5. Drinks\n"
                );

                let count = readlineSync.question("Select the course according to the numbers : \n")

                if (count == 1){
                    
                    while (true) {

                        console.log(
                            "\nHere are your dishes \n",
                            "1. Bombay-Sandwich  -  @20rs. Per Plate\n",
                            "2. Chillie-Paneer  -  @10rs. Per Plate\n",
                            "3. Dahi-Bade  -  @25rs. Per Plate\n",
                            "4. Idli  -  @30rs. Per Plate\n",
                            "5. Noodles  -  @50rs. Per Plate\n"
                        );

                        let starter = readlineSync.question("\nChoose your starter according to numbers : \n")

                        if (starter == 1){

                            amount += 20;
                            console.log(
                                "You have choosen 'Bombay-Sandwich' \n",
                                "Here is your order : 'Bombay-Sandwich'\n"
                            );
                            
                        }
                        else if (starter == 2){

                            amount += 10;
                            console.log(
                                "You have choosen 'Chillie-Paneer' \n",
                                "Here is your order : 'Chillie-Paneer'\n"
                            );
                            
                        }else if (starter == 3){

                            amount += 25;
                            console.log(
                                "You have choosen 'Dahi-Bade'\n",
                                "Here is your order : 'Dahi-Bade'\n"
                            );
                            
                        }
                        else if (starter == 4){

                            amount += 30;
                            console.log(
                                "You have choosen 'Idli' \n",
                                "Here is your order : 'Idli'\n"
                            );
                        }
                        else if (starter == 5){

                            amount += 50;
                            console.log(
                                "You have choosen 'Noodles' \n",
                                "Here is your order : 'Noodles'\n"
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue; 
                        }
                        totalAmount = amount;
                        totalBill = totalAmount;

                        let orderAgain = readlineSync.question(`\nWould you like to order again (yes/no) : `)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your starters of @${totalAmount}Rs. 
                        `
                    )
                }
                else if (count == 2){

                    while (true) {

                        console.log(
                            "\nHere are some 'main-course' dishes choose from them : \n",
                            "1. Kadhai-Paneer  -  @50rs. Per Plate\n",
                            "2. Chana-Masala  -  @80rs. Per Plate\n",
                            "3. Mushroom  -  @90rs. Per Plate\n",
                            "4. Malai-Chaap  -  @120rs. Per Plate\n",
                            "5. Arvi  -  @60rs. Per Plate\n",
                            "6. Butter-Naan  -  @5rs. Per Roti\n"
                        );

                        let main = readlineSync.question("\nChoose your Main-course according to numbers : \n")

                        if (main == 1){

                            amount1 += 50;
                            console.log(
                                "You have selected 'Kadhai-Paneer'\n",
                                "Here is your order : 'Kadhai-Paneer' \n"
                            );
                        }
                        else if (main == 2){

                            amount1 += 80;
                            console.log(
                                "You have selected 'Chana-Masala'\n",
                                "Here is your order : 'Chana-Masala' \n"
                            );
                        }
                        else if (main == 3){

                            amount1 += 90;
                            console.log(
                                "You have selected 'Mushroom'\n",
                                "Here is your order : 'Mushroom' \n"
                            );
                        }
                        else if (main == 4){

                            amount1 += 120;
                            console.log(
                                "You have selected 'Malai-Chaap'\n",
                                "Here is your order : 'Malai-Chaap' \n"
                            );
                        }
                        else if (main == 5){

                            amount1 += 60;
                            console. log(
                                "You have selected 'Arvi' \n",
                                "Here is your order : 'Arvi' \n"
                            );
                        }
                        else if (main == 6){

                            let roti = readlineSync.question(`How many "Butter-Naan" do you want : `)
                            amount1 += roti * 5;
                            console.log(
                                "You have selected 'Butter-Naan'\n",
                                `Here is your order : ${roti} 'Butter-Naan' \n`
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue;
                        }
                        totalAmount1 = amount1;
                        totalBill = totalAmount1;

                        let orderAgain = readlineSync.question(`Would you like to order again (yes/no) : \n`)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your main-course of @${totalAmount1}Rs. 
                        `
                    )
                }
                else if (count == 3){
                    
                    while (true) {
                        console.log(
                            "Here are some 'dessert' dishes choose from them : \n",
                            "1. Kesar-Peda  -  @30rs. Per Plate\n",
                            "2. Kalakand  -  @30rs. Per Plate\n",
                            "3. Bal-Mithai  -  @40rs. Per Plate\n",
                            "4. Makhana-Kheer  -  @35rs. Per Plate\n",
                            "5. Ghewar  -  @50rs. Per Plate\n"
                        );

                        let dessert = readlineSync.question("\nChoose your 'Dessert' according to numbers (1-5) : \n")
                        
                        if (dessert == 1){

                            amount2 += 30;
                            console. log(
                                "You have selected 'Kesar-Peda' \n",
                                "Here is your order : 'Kesar-Peda' \n"
                            );
                        }
                        else if (dessert == 2){

                            amount2 += 30;
                            console. log(
                                "You have selected 'Kalakand' \n",
                                "Here is your order : 'Kalakand' \n"
                            );
                        }
                        else if (dessert == 3){

                            amount2 += 40;
                            console. log(
                                "You have selected 'Bal-Mithai' \n",
                                "Here is your order : 'Bal-Mithai' \n"
                            );
                        }
                        else if (dessert == 4){

                            amount2 += 35;
                            console. log(
                                "You have selected 'Makhana-Kheer' \n",
                                "Here is your order : 'Makhana-Kheer' \n"
                            );
                        }
                        else if (dessert == 5){

                            amount2 += 50;
                            console. log(
                                "You have selected 'Ghewar' \n",
                                "Here is your order : 'Ghewar' \n"
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue;
                        }
                        totalAmount2 = amount2;
                        totalBill = totalAmount2;

                        let orderAgain = readlineSync.question(`Would you like to order again (yes/no) : \n`)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your Dessert of @${totalAmount2}Rs. 
                        `
                    )
                }
                else if (count == 4){

                    while (true) {

                        console.log(
                            "Here are some 'side-dishes' dishes choose from them : \n",
                            "1. Fruit-Raita  -  @10rs. Per Plate\n",
                            "2. Dates-Tamarind-Chutney  -  @20rs. Per Plate\n",
                            "3. Papad  -  @10rs. Per Plate\n",
                            "4. Radish-Pickle  -  @20rs. Per Plate\n",
                            "5. Steamed-Basamati-Rice  -  @30rs. Per Plate\n"
                        );

                        let side = readlineSync.question("\nChoose your 'Side-dishes' according to numbers : \n")

                        if (side == 1){
                            
                            amount3 += 10;
                            console. log(
                                "You have selected 'Fruit-Raita' \n",
                                "Here is your order : 'Fruit-Raita' \n"
                            );
                        }
                        else if (side == 2){

                            amount3 += 20;
                            console. log(
                                "You have selected 'Dates-Tamarind-Chutney' \n",
                                "Here is your order : 'Dates-Tamarind-Chutney' \n"
                            );
                        }
                        else if (side == 3){

                            amount3 += 10;
                            console. log(
                                "You have selected 'Papad' \n",
                                "Here is your order : 'Papad' \n"
                            );
                        }
                        else if (side == 4){

                            amount3 += 20;
                            console. log(
                                "You have selected 'Radish-Pickle' \n",
                                "Here is your order : 'Radish-Pickle' \n"
                            );
                        }
                        else if (side == 5){

                            amount3 += 30;
                            console. log(
                                "You have selected 'Steamed-Basmati-Rice' \n",
                                "Here is your order : 'Steamed-Basmati-Rice' \n"
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue;
                        }
                        totalAmount3 = amount3;
                        totalBill = totalAmount3;

                        let orderAgain = readlineSync.question(`Would you like to order again (yes/no) : \n`)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your Dessert of @${totalAmount3}Rs. 
                        `
                    )
                }
                else if (count == 5){

                    while (true) {

                        console.log(
                            "Here are some drinks choose from them :\n",
                            "1. Water  -  @30rs. Per Bottle\n",
                            "2. Falooda  -  @50rs. Per Bottle\n",
                            "3. Matcha-Latte  -  @30rs. Per Bottle\n",
                            "4. Apple-Cider  -  @20rs. Per Glass\n",
                            "5. Tropical-Punch  -  @50rs. Per Glass"
                        );

                        let drinks = readlineSync.question("\nChoose your 'Drinks' according to numbers : \n")
                        
                        if (drinks == 1){

                            amount4 += 30;
                            console. log(
                                "You have selected 'Water' \n",
                                "Here is your order : 'Water' \n"
                            );
                        }
                        else if (drinks == 2){

                            amount4 += 50;
                            console. log(
                                "You have selected 'Falooda' \n",
                                "Here is your order : 'Falooda' \n"
                            );
                        }
                        else if (drinks == 3){

                            amount4 += 30;
                            console. log(
                                "You have selected 'Matcha-Latte' \n",
                                "Here is your order : 'Matcha-Latte' \n"
                            );
                        }
                        else if (drinks == 4){

                            amount4 += 20;
                            console. log(
                                "You have selected 'Apple-Cider' \n",
                                "Here is your order : 'Apple-Cider' \n"
                            );
                        }
                        else if (drinks == 5){

                            amount4 += 50;
                            console. log(
                                "You have selected 'Tropical-Punch' \n",
                                "Here is your order : 'Tropical-Punch' \n"
                            );
                        }
                        else {
                            console.log(
                                `You have entered a wrong number please enter a number according to your dishe\n`,
                                `Now start it again!\n`
                            );
                            continue;
                        }
                        totalAmount4 = amount4;
                        totalBill = totalAmount4;

                        let orderAgain = readlineSync.question(`Would you like to order again (yes/no) : \n`)

                        if (orderAgain.toLowerCase() === "no"){
                            break;
                        }
                    }
                    console.log(
                        `
                        You have ordered your drinks of @${totalAmount4}Rs. 
                        `
                    )
                }
                else {
                    console.log(
                        "You've entered wrong number - Please select food according to the courses numbers\n",
                        "Now start it again!\n"
                    );
                    continue;
                }
                let goBack = readlineSync.question(`\nWould you like to go for Main-course/Dessert/Side-Dishes/Drinks (yes/no) : `);

                if (goBack.toLowerCase() === "no") {
                    break;
                }
            }
            
            totalBill = totalAmount+totalAmount1+totalAmount2+totalAmount3+totalAmount4;
            console.log(
                `
                Total Bill : ${totalBill}Rs.
                "Thanks for coming - come Again"
                `
            );
            break;
        }
        else {
            console.log("Please enter 'Tap' to see the 'Menu-Card' \n");
            continue;
        }
    }
}