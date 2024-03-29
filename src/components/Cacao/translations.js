const translations = {
    en: {
        sharedMessage: `This site has been shared with you by {referralUsername}, belonging to the {batchName} batch.
    
        They have placed an order but can't receive their chocolate until their batch reaches a total of 10 orders.
        
        If you're interested in trying some of my handcrafted chocolate alongside {referralUsername}, please make sure to mention their username while placing the order. This way, they will get a free bar.
        
        Thank you!
        
        Wilfredo`,
        welcomeText: "Welcome to my online Chocolaterie.",
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
                "Potassium carbonate: Usually added during the 'Dutch process' to reduce cacao's natural bitterness and darken its color. However, this can lead to the loss of up to 90% of the beneficial flavonoids.",
                "Cocoa powder: Processed cacao that has undergone various processes, such as the Broma process, to facilitate preservation and complex logistics, but at the cost of its natural flavor and nutritional properties.",
                "Sugar: No trace of sugar in Wilfredo's kitchen.",
                "Color additives, preservatives, or any kind of enhancer.",
            ]
        ],
        orderInstructions: [
            "Gib deine Bestellung unten ein, um die Zahlungsinformationen zu erhalten.",
            "Nachdem ich Bestellungen für 10 Schokoladenriegel erhalten habe, werde ich mit der Produktion beginnen.",
            "Danach kannst du erwarten, dass deine Bestellung innerhalb von 2 bis 3 Tagen fertig und an dich geliefert wird."
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
            title: "Batch {batchName}",
            totalBarsOrdered: "Total orders: {totalBarsOrdered} bars",
            goal: "Goal to start production: 10 bars",
            statusReady: "Production in progress",
            statusNotReady: "Status: Waiting for {remainingBarsNeeded} more orders",
            referralLinkInfo: "Share your referral link to speed up reaching our 10 bar goal. Plus, you'll receive a free bar for every new user who places an order using your username.",
            forgotUsername: "Forgot your username? Simply click here and ask Wilfredo",
            paymentInstructions: "To pay for your order, please use one of the following methods:",
            paypalInfo: "PayPal: binancewil@protonmail.com",
            transferInfo: "Transfer",
            accountName: "Name: YAHIR WILFREDO CASAS FARACH",
            iban: "IBAN: DE87 1001 1001 2620 8897 48",
            copyButton: "Copy",
            referralLinkButton: "Referral Link",
            ordered: "{username} ordered {quantity} serious bar(s) of chocolate",
            paymentStatus: "Payment status: {paymentStatus}",
            orderStatus: "Order: {orderStatus}",
            copyReferralLink: "Referral Link",
        },
        languageButton: "Zu Deutsch wechseln",
        trySomeChocolate: "Get some chocolate",
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

        chocolateInfo: [
            "Kakao: Bio, ökologisch und fair gehandelt. Bezogen von peruanischen Bauern.",
            "Kakaobutter: Ebenfalls bio und ökologisch, bezogen aus denselben peruanischen Anbaugebieten wie der Kakao.",
            "Honig: Roh und ungefiltert, um alle Nährstoffeigenschaften zu bewahren. Bezogen aus Brandenburg.",
            "Meersalz"
        ],

        uniqueChocolateText: [
            [
                "Kaliumkarbonat: Wird normalerweise während des 'Dutch-Verfahrens' hinzugefügt, um die natürliche Bitterkeit des Kakaos zu reduzieren und seine Farbe zu vertiefen. Dies kann jedoch zum Verlust von bis zu 90% der vorteilhaften Flavonoide führen.",
                "Kakaopulver: Verarbeiteter Kakao, der verschiedene Verfahren wie das Broma-Verfahren durchlaufen hat, um die Konservierung und komplexe Logistik zu erleichtern, allerdings auf Kosten seines natürlichen Geschmacks und seiner Nährstoffeigenschaften.",
                "Zucker: Keine Spur von Zucker in Wilfredos Küche.",
                "Farbzusätze, Konservierungsmittel oder jegliche Art von Verstärkern: Nicht vorhanden.",
            ]
        ],
        orderInstructions: [
            "Bestell unten.",
            "Sobald ich genug Bestellungen für 10 Riegel zusammenhabe, kriegst du die Zahlungsinformationen per WhatsApp.",
            "Nach der Zahlung leg ich los mit deinem Schokoriegel und sorg dafür, dass er schnell bei dir ist."
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
            title: "Charge {batchName}",
            totalBarsOrdered: "Insgesamt bestellte Riegel: {totalBarsOrdered}",
            goal: "Ziel, um mit der Produktion zu beginnen: 10 Riegel",
            statusReady: "Produktion läuft",
            statusNotReady: "Status: Warten auf {remainingBarsNeeded} weitere Bestellungen",            
            referralLinkInfo: "Teile deinen Empfehlungslink, um unser Ziel von 10 Riegeln schneller zu erreichen. Zusätzlich erhältst du für jeden Neukunden, der mit deinem Benutzernamen bestellt, einen kostenlosen Riegel.",
            forgotUsername: "Hast du deinen Benutzernamen vergessen? Einfach hier klicken und Wilfredo fragen",
            paymentInstructions: "Um deine Bestellung zu bezahlen, nutze bitte eine der folgenden Methoden:",
            paypalInfo: "PayPal: binancewil@protonmail.com",
            transferInfo: "Überweisung",
            accountName: "Name: YAHIR WILFREDO CASAS FARACH",
            iban: "IBAN: DE87 1001 1001 2620 8897 48",
            copyButton: "Kopieren",
            referralLinkButton: "Empfehlungslink",
            ordered: "{username} hat {quantity} ernsthafte Tafel Schokolade bestellt",
            paymentStatus: "Zahlungsstatus: {paymentStatus}",
            orderStatus: "Bestellung: {orderStatus}",
            copyReferralLink: "Empfehlungslink"
        },
        
        languageButton: "Zu Englisch wechseln",
        trySomeChocolate: "Schokolade bestellen",
        footer: "Läuft etwas nicht wie erwartet? Schick mir eine Nachricht über Signal oder WhatsApp an +4915781295360 mit deinen Beschwerden."
    }
};

export default translations;
