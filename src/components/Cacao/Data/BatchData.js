// src/data/batchData.js
const batchData = {
  capybara: [
    {
      username: "RecklessCapybara",
      quantity: 1,
      paymentStatus:
        "paid",
      orderStatus: "not delivered",
      hint: "KG",
      orderDate: "26/03/24",
      language: "EN"
    },
    {
      username: "WanderingCapybara",
      quantity: 3,
      paymentStatus:
        "unpaid",
      orderStatus: "not delivered",
      hint: "JN",
      orderDate: "26/03/24",
      language: "DE"
    },
    {
      username: "CuriousCapybara",
      quantity: 2,
      paymentStatus:
        "paid",
      orderStatus: "not delivered",
      hint: "MS",
      orderDate: "28/03/24",
      language: "DE"
    },
    {
      username: "CosmicCapybara",
      quantity: 3,
      recommendedBy: "RecklessCapybara",
      orderStatus: "not delivered",
      paymentStatus: "paid",
      name: "FH",
      orderDate: "30/03/24",
      language: "DE"
    },
    {
      username: "VibrantCapybara",
      quantity: 1,
      orderStatus: "not delivered",
      paymentStatus: "unpaid",
      name: "SA",
      orderDate: "02/04/24",
      language: "EN"
    }
    // Add more batches and users as needed
  ],
  meerkat: [
    {
      username: "MysticMeerkat",
      quantity: 2,
      paymentStatus:
        "paid",
      orderStatus: "not delivered",
      hint: "BF",
      orderDate: "10/04/24",
      language: "EN"

    },
    {
      username: "DaringMeerkat",
      quantity: 3,
      paymentStatus:
        "paid",
      orderStatus: "not delivered",
      hint: "SebFootball",
      orderDate: "16/04/24",
      language: "EN"
    },
    {
      username: "ChivalrousMeerkat",
      quantity: 1,
      paymentStatus:
        "unpaid",
      orderStatus: "not delivered",
      hint: "MiFootball",
      orderDate: "18/04/24",
      language: "EN"
    },
    // Add more batches and users as needed
  ],
  // Additional batches can
};

export default batchData;
