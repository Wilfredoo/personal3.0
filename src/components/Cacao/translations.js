const translations = {
    en: {
        sharedMessage: `This site has been shared with you by {referralUsername}, belonging to the {batchName} batch.
    
        They have placed an order but can't receive their chocolate until their batch reaches a total of 10 orders.
        
        If you're interested in trying some of my handcrafted chocolate alongside {referralUsername}, please make sure to mention their username while placing the order. This way, they will get a free bar.
        
        Thank you!

        Wilfredo`,
        welcomeText: "Welcome to my online Chocolaterie.",
        promptText: "Please enter the name of your batch (uppercase or lowercase doesn't matter).",
        introText: "Choosing a chocolate bar usually involves a trade-off between health and pleasure. To eliminate this compromise, I make my bars with raw ingredients and minimal processing, allowing you to enjoy the best of both worlds.",
        ingredientsProcesses: "What this chocolate has",
        whatMakesUnique: "What this chocolate does not have",
        processInfo: "How to get a bar of this chocolate (for now, Berlin only)",
        chocolateInfo: [
            "Cacao: Bio, organic, and fair trade. Sourced from Peruvian farmers.",
            "Cacao Butter: Same as the cacao and sourced from the same Peruvian farmers.",
            "Honey: Raw and unfiltered to preserve all nutritional properties. Sourced from Brandenburg.",
            "Sea Salt"
        ],
        uniqueChocolateText: [
            [
                "Potassium carbonate: an alkalizing agent used during a method called the Dutch process to soften cacao's bitterness and enhance its color, potentially reducing flavonoid content by up to 90%. The extent of its use in chocolate production is unclear, as it's applied during processing and not listed as an ingredient in the final product.",
                "Cocoa powder: Processed cacao that has undergone various processes, such as the Broma process, to facilitate long term preservation, but at the cost of its natural flavor and nutritional properties.",
                "Sugar: No trace of sugar in Wilfredo's kitchen.",
                "Color additives, preservatives, or any kind of enhancer.",
            ]
        ],
      orderInstructions: [
  "Enter your order below. You will receive payment details shortly after.",
  "After I have received orders for 10 chocolate bars, I will start production.",
  "After that, you can expect your order to be ready and delivered to you within 2 to 3 days."
]
        ,
        orderForm: {
            quantityLabel: "Quantity",
            priceLabel: "Price",
            priceAdjustmentText: "Adjust the price according to your budget, and we'll go from there.",
            deliveryOptionLabel: "Delivery Option",
            shipToAddressOption: "Ship to my address",
            inPersonOption: "Give me my chocolate in person",
            firstNamePlaceholder: "First Name",
            lastNamePlaceholder: "Last Name",
            addressPlaceholder: "Your shipping address",
            extraInstructionsPlaceholder: "Any additional instructions?",
            submitOrderButton: "Submit Order",
            submitOrderExplanation: "Clicking on 'Submit Order' will open WhatsApp and preformat a message that you can send me with your order details.",
            recommenderUsernameLabel: "If someone recommended you here, write their username and they'll get a free bar:",

        },
        batchOrders: {
            goToHomePage:"Back Home",
            title: "Status Page",
            batchNameLine: "Name of your batch: {batchName}",
            totalBarsOrdered: "Total orders to date: {totalBarsOrdered} bars",
            goal: "Goal: 10 bars",
            statusReady: "Status: Production in progress",
            statusNotReady: "Status: Waiting for {remainingBarsNeeded} more orders to start production.",
            referralLinkInfo: "Share your referral link to speed up reaching our 10 bar goal. Plus, you'll receive a free bar for every new user who places an order using your username.",
            forgotUsername: "Forgot your username? Simply click here and ask Wilfredo",
            paymentInstructions: "To pay for your order, please use one of the following methods:",
            paypalInfo: "PayPal: binancewil@protonmail.com",
            transferInfo: "Transfer",
            accountName: "Name: YAHIR WILFREDO CASAS FARACH",
            iban: "IBAN: DE87 1001 1001 2620 8897 48",
            copyButton: "Copy",
            referralLinkButton: "Referral Link",
            ordered: "{username} ordered {quantity} bar(s) of chocolate",
            paymentStatus: "Payment status: {paymentStatus}",
            orderStatus: "Order: {orderStatus}",
            copyReferralLink: "Referral Link",
            orderDate: "{orderDateFromNow}",
            overview: "Overview",
            orders: "Orders",
            introInfo: "Here you will find everything related to the status of your order + payment details at the bottom of the page."
        },
        languageButton: "Zu Deutsch wechseln",
        trySomeChocolate: "Get some chocolate",
        checkOrderStatus: "See my order status",
        footer: "Something not working as expected? Send me a message on Signal or WhatsApp to +4915781295360 with your complaints."
    },
    de: {
        sharedMessage: `Diese Seite wurde mit dir geteilt von {referralUsername}, aus der Charge {batchName}.

        Sie haben eine Bestellung aufgegeben, können ihre Schokolade aber erst erhalten, wenn ihre Charge insgesamt 10 Bestellungen erreicht hat.
        
        Wenn du daran interessiert bist, einige meiner handgefertigten Schokoladen neben {referralUsername} zu probieren, stelle bitte sicher, dass du ihren Benutzernamen bei der Bestellung erwähnst. Auf diese Weise erhalten sie eine Tafel kostenlos.
        
        Danke dir!
        
        Wilfredo
        `,
        welcomeText: "Willkommen in meiner Online-Chocolaterie.",
        introText: "Die Wahl eines Schokoriegels bedeutet oft, sich zwischen Gesundheit und Genuss zu entscheiden. Um diesen Kompromiss zu vermeiden, stelle ich meine Riegel aus rohen Zutaten und mit minimaler Verarbeitung her, sodass Sie das Beste aus beiden Welten genießen können.",
        ingredientsProcesses: "Was diese Schokolade enthält",
        whatMakesUnique: "Was diese Schokolade nicht enthält",
        howToGetBar: "Wie du deine Schokoladentafel bekommst",
        processInfo: "Wie bestellst du eine Tafel dieser Schokolade (Vorerst nur in Berlin)",
        promptText: "Bitte gib den Namen deines Batches ein, Groß- oder Kleinschreibung spielt keine Rolle.",
        chocolateInfo: [
            "Kakao: Bio, ökologisch und fair gehandelt. Bezogen von peruanischen Bauern.",
            "Kakaobutter: Ebenfalls bio und ökologisch, bezogen aus denselben peruanischen Anbaugebieten wie der Kakao.",
            "Honig: Roh und ungefiltert, um alle Nährstoffeigenschaften zu bewahren. Bezogen aus Brandenburg.",
            "Meersalz"
        ],
        uniqueChocolateText: [
            [
                "Kaliumkarbonat: ein Alkalisierungsmittel, das während eines Verfahrens namens niederländischer Prozess verwendet wird, um die Bitterkeit von Kakao zu mildern und seine Farbe zu verbessern, was potenziell den Flavonoidgehalt um bis zu 90% reduzieren kann. Wie weit es in der Schokoladenherstellung verwendet wird, bleibt unklar, da es während der Verarbeitung eingesetzt und nicht als Zutat im Endprodukt aufgeführt wird.",
                "Kakaopulver: Verarbeiteter Kakao, der verschiedene Verfahren wie das Broma-Verfahren durchlaufen hat, um die Konservierung und komplexe Logistik zu erleichtern, allerdings auf Kosten seines natürlichen Geschmacks und seiner Nährstoffeigenschaften.",
                "Zucker: Keine Spur von Zucker in Wilfredos Küche.",
                "Farbzusätze, Konservierungsmittel oder jegliche Art von Verstärkern: Nicht vorhanden.",
            ]
        ],
        orderInstructions: [
            "Gib deine Bestellung unten ein. Die Zahlungsdetails erhältst du kurz darauf.",
            "Nachdem ich Bestellungen für 10 Schokoladenriegel erhalten habe, beginne ich mit der Produktion.",
            "Danach kannst du erwarten, dass deine Bestellung innerhalb von 2 bis 3 Tagen fertiggestellt und an dich geliefert wird."
          ],          
        orderForm: {
            quantityLabel: "Menge",
            priceLabel: "Preis",
            priceAdjustmentText: "Pass den Preis nach deinem Budget an, und dann schauen wir weiter.",
            deliveryOptionLabel: "Lieferoption",
            shipToAddressOption: "An meine Adresse schicken",
            inPersonOption: "Ich möchte meine Schokolade persönlich abholen",
            firstNamePlaceholder: "Vorname",
            lastNamePlaceholder: "Nachname",
            addressPlaceholder: "Deine Versandadresse",
            extraInstructionsPlaceholder: "Zusätzliche Anweisungen?",
            submitOrderButton: "Bestellung aufgeben",
            submitOrderExplanation: "Wenn du auf 'Bestellung aufgeben' klickst, öffnet sich WhatsApp und du kannst mir eine Nachricht mit deinen Bestelldetails schicken.",
            recommenderUsernameLabel: "Wenn dich jemand hier empfohlen hat, schreibe ihren Benutzernamen, und sie erhalten eine kostenlose Schokoladenriegel.",
        },
        batchOrders: {
            goToHomePage:"Starseite",
            title: "Statusseite",
            batchNameLine: "Name of your order group: {batchName}",
            totalBarsOrdered: "Insgesamt bestellte Riegel: {totalBarsOrdered}",
            goal: "Ziel: 10 Riegel",
            statusReady: "Status: Produktion läuft",
            statusNotReady: "Status: Warten auf {remainingBarsNeeded} weitere Bestellungen, um die Produktion zu starten.",            
            referralLinkInfo: "Teile deinen Empfehlungslink, um unser Ziel von 10 Riegeln schneller zu erreichen. Zusätzlich erhältst du für jeden Neukunden, der mit deinem Benutzernamen bestellt, einen kostenlosen Riegel.",
            forgotUsername: "Hast du deinen Benutzernamen vergessen? Einfach hier klicken und Wilfredo fragen",
            paymentInstructions: "Um deine Bestellung zu bezahlen, nutze bitte eine der folgenden Methoden:",
            paypalInfo: "PayPal: inbox@wilfredocasas.com",
            transferInfo: "Überweisung",
            accountName: "Name: YAHIR WILFREDO CASAS FARACH",
            iban: "IBAN: DE87 1001 1001 2620 8897 48",
            copyButton: "Kopieren",
            referralLinkButton: "Empfehlungslink",
            paymentStatus: "Zahlungsstatus: {paymentStatus}",
            orderStatus: "Bestellung: {orderStatus}",
            copyReferralLink: "Empfehlungslink",
            orderDate: "{orderDateFromNow}",
            overview: "Übersicht",
            orders: "Bestellungen",
            introInfo: "Hier finden Sie alles zum Status Ihrer Bestellung + Zahlungsdetails am Ende der Seite."
            
        },
        
        languageButton: "Change to English",
        trySomeChocolate: "Schokolade bestellen",
        footer: "Läuft etwas nicht wie erwartet? Schick mir eine Nachricht über Signal oder WhatsApp an +4915781295360 mit deinen Beschwerden.",
        checkOrderStatus: "Bestellung verfolgen"
    }
};

export default translations;
