import { useState } from "react";
import { useCart } from "../context/CartContext";

// Kategoriyalar
const categories = [
  "Barchasi",
  "Kainok Ichimliklar", 
  "Salqin Ichimliklar",
  "Asosiy Taomlar",
  "Salatlar",
  "Hamir Taomlar",
  "Baliq Taomlar",
  "Shashlik",
  "Shurvalar",
  "Salqin Gazak",
  "Shirinliklar",
  "Garnir va Souslar"
];

// Barcha ovqatlar ro'yxati (rasmlardagilarga asoslangan)
const foods = [
  // KAINOK ICHIMLIKLAR
  { id: 1, name: "AMERIKANO", price: 25000, category: "Kainok Ichimliklar", description: "Klassik americano kofe", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgiDaLTqfQGyvr15UyXFuELx5pKXDaCC_kOQ&s" },
  { id: 2, name: "KAPUCHINO", price: 30000, category: "Kainok Ichimliklar", description: "Kremli kapuchino", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGzGiA6JthDBPqgz8jk4vloPaGs80gNp_z1w&s" },
  { id: 3, name: "ESPRESSO", price: 28000, category: "Kainok Ichimliklar", description: "Kuchli espresso", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBOkyfc3dimbzoDrzXKiVaFkNdhPi0R8uZ8Q&s" },
  { id: 4, name: "KO'K CHOY", price: 15000, category: "Kainok Ichimliklar", description: "Yashil choy", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWlwojnYPQqIu3oAoTRRo_Ng4jkJjQra0u5A&s" },
  { id: 5, name: "KORA CHOY", price: 15000, category: "Kainok Ichimliklar", description: "Qora choy", image: "https://i0.wp.com/medall.uz/wp-content/uploads/2023/01/IMG_20230116_212335_140.jpg?fit=580%2C387&ssl=1" },
  { id: 6, name: "MUALLIFLIK CHOYI", price: 25000, category: "Kainok Ichimliklar", description: "Maxsus mualliflik choyi", image: "https://i0.wp.com/medall.uz/wp-content/uploads/2023/01/Moychechak-choyining-yon-tasiri.jpg?fit=600%2C400&ssl=1" },
  { id: 7, name: "TURK CHOYI", price: 30000, category: "Kainok Ichimliklar", description: "Turkcha choy", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfp2aQ2x3VH9YLy7v-PSRAEQJYeYY4B_7w5A&s" },
  { id: 8, name: "YALPIZLI CHOY", price: 30000, category: "Kainok Ichimliklar", description: "Yalpizli choy", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG_ErB0x09p-mM5jMuvMuxPPqcaN9qZLLJwA&s" },

  // SALQIN ICHIMLIKLAR
  { id: 9, name: "KOLA ", price: 18000, category: "Salqin Ichimliklar", description: "1 litrli gazlangan ichimlik", image: "https://api.lochin.uz/media/file/image/2021-03/f97bbe8d-63bb-4bab-99af-97c4a99c7be3.jpg.500x500_q85_crop-scale.jpg" },
  { id: 87, name: "PEPSI ", price: 18000, category: "Salqin Ichimliklar", description: "1 litrli gazlangan ichimlik", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhEEDDi983uTfDNTuaUPVC9ah3IBIycUz-Bg&s" },
  { id: 88, name: "FANTA 1L", price: 18000, category: "Salqin Ichimliklar", description: "1 litrli gazlangan ichimlik", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEwuNFfn7veCoTWkYMa8g5oBmU2PrUnBiu7A&s" },
  { id: 10, name: "CHORTOK GAZLI/BEZ GAZ ", price: 8000, category: "Salqin Ichimliklar", description: "Tabiiy chorok suvi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQK020otCoxL1tQoqTIwCIOkrhxV-nIWS9qA&s" },
  { id: 11, name: "CHORTOK PREMIUM ", price: 17000, category: "Salqin Ichimliklar", description: "Premium chorok suvi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcj_HaDWIDtZlxle1h_fYu1BdNZoFVl8Zaww&s" },
  { id: 12, name: "MOHITO GRAFIN", price: 50000, category: "Salqin Ichimliklar", description: "Grafinda mohito", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRohkfGytF6LTCO6WtXvEa9xo_Yimt91Q-uTQ&s" },
  { id: 13, name: "SOK ASSORTIMENT ", price: 25000, category: "Salqin Ichimliklar", description: "Assortiment sharbat", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROYBfyDQ1rluqAmTrXlDWjh8XcroEqlOl5sg&s" },
  { id: 14, name: "ENERGETIK ", price: 22000, category: "Salqin Ichimliklar", description: "Energetik ichimlik", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIBPCiWJDXfNYdv6zyykzfeY5qSPjYEUcyUw&s" },

  // ASOSIY TAOMLAR
  { id: 15, name: "SHO'R KABOB", price: 120000, category: "Asosiy Taomlar", description: "Sho'r kabob 500 gramm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSpwWpu9uhI5T-H65466Wo0MnPxSPefOoTcQ&s" },
  { id: 16, name: "FERUZ KABOB ", price: 120000, category: "Asosiy Taomlar", description: "Feruz kabob 500 gramm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZDzS6twwFcxGhFh8-Xe0R0WKr3U56-Ji2Bw&s" },
  { id: 17, name: "KAYMOK KABOB ", price: 130000, category: "Asosiy Taomlar", description: "Kaymok kabob 500 gramm", image: "https://www.corriecooks.com/wp-content/uploads/2023/09/Kafta-Kabob.jpg" },
  { id: 18, name: "PLITA KABOB ", price: 120000, category: "Asosiy Taomlar", description: "Plita kabob 500 gramm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN1InJ__Sh1EMJM1XuARnpFuYpPE2STFwF0Q&s" },
  { id: 19, name: "KORIN TUYOQ ", price: 150000, category: "Asosiy Taomlar", description: "Korin tuyoq 1 kilogramm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScA7NPxza6Dgr92nT665zgZtsEulu0wAVSag&s" },
  { id: 20, name: "TANDIR TOVUQ ", price: 75000, category: "Asosiy Taomlar", description: "Tandirda pishirilgan tovuq", image: "https://yukber.uz/image/cache/catalog/Tandirgosht-600x600.jpeg" },
  { id: 21, name: "PATIR TOVUQ ", price: 110000, category: "Asosiy Taomlar", description: "Patir tovuq", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqNdQq2eI2GuDDEV7oyRjUUSe6k0mU-3TPA&s" },
  { id: 22, name: "SARO'G'TA TOVUQ ", price: 80000, category: "Asosiy Taomlar", description: "Saro'g'ta tovuq", image: "https://data.daryo.uz/media/cache/2022/01/photo_2022-01-06_11-05-39-728x546.jpg" },
  { id: 23, name: "CHO'PONCHA ", price: 220000, category: "Asosiy Taomlar", description: "Cho'poncha kabob 1 kilogramm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQinDFPIcg1b8FkmmKpvr-Bo_n3xEmv6ZueuQ&s" },
  { id: 24, name: "GO'MMA ", price: 15000, category: "Asosiy Taomlar", description: "Go'mma kabob", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjeDG4xAx5BgsgH3EaZ6wh1s6w7KyF5x6tnA&s" },
  { id: 25, name: "KAPSHIRMA ", price: 18000, category: "Asosiy Taomlar", description: "Kapshirma", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeFFCUZVUrIfUGaVbJNQHmjlZlWZ1JqmOzZA&s" },
  { id: 26, name: "SETKA KABOB ", price: 120000, category: "Asosiy Taomlar", description: "Setka kabob 500 gramm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW0Khbp7VBN_tPv81fRCdlCb3UiD3oX5HV7Q&s" },

  // SALATLAR
  { id: 27, name: "BAQLAJON RULET ", price: 35000, category: "Salatlar", description: "Baqlajon ruleti 300 gramm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7quLmr5YrGMJrfLHiLjSUqsRrzBoYhlO_SA&s" },
  { id: 28, name: "SALAT GREChESKIY ", price: 37000, category: "Salatlar", description: "Yunoncha salat 350 gramm", image: "https://zira.uz/wp-content/uploads/2018/05/grecheskiy-salat-2.jpg" },
  { id: 29, name: "SALAT OLD KHIVA ", price: 45000, category: "Salatlar", description: "Old Khiva maxsus salati 250 gramm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5VZpZje5kzX1nbHQo9opxq7WTEiXV5d96-w&s" },
  { id: 30, name: "MUJSKOY KAPRIZ ", price: 45000, category: "Salatlar", description: "Mujskoy kapriz salati 300 gramm", image: "https://makepedia.uz/wp-content/uploads/2018/11/mujskoy-kapriz.jpg" },
  { id: 31, name: "SALAT CEZAR ", price: 35000, category: "Salatlar", description: "Sezar salati 250 gramm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXkmGfeJJxbIJjFPAoXsE9kup0vbkuTY7Ysg&s" },
  { id: 32, name: "SALAT YAPONSKIY ", price: 45000, category: "Salatlar", description: "Yaponcha salat 300 gramm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW8L8fGINwV5G2PeA_-WUn_rlHvDlElo9jZg&s" },
  { id: 33, name: "ACHChIQ CHUCHUK ", price: 25000, category: "Salatlar", description: "Achchiq chuchuk salat 300 gramm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR59CbRddTybP5OJ0oWDDQ52cMDxjtO_F03_w&s" },
  { id: 34, name: "TUZLANGAN POMIDOR (3 KUNLIK)", price: 20000, category: "Salatlar", description: "3 kunlik tuzlangan pomidor", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXF7x46dKsSd0GPgLtTtP6HBs1k1qUxixwfA&s" },
  { id: 35, name: "KARAM KVAShENAya ", price: 25000, category: "Salatlar", description: "Kvashenaya karam 250 gramm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKXsVl_31YYYpU1QBJnMCByeBmOwyKhdcjsQ&s" },
  { id: 36, name: "KHRUSTYaShChIY BAQLAJAN ", price: 45000, category: "Salatlar", description: "Xrustyashchiy baqlajan 300 gramm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvexzaASgaprIieCGY4r9bpQBKrnzwwv-Jdg&s" },
  { id: 37, name: "SALAT SVEJIJ ", price: 45000, category: "Salatlar", description: "Yangi sabzavotli salat 300 gramm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL9OQtcrVw008g09nazD3hsedG7PT8cYRlNg&s" },

  // HAMIR TAOMLAR
  { id: 38, name: "SHO'RVA BARAK ", price: 30000, category: "Hamir Taomlar", description: "Sho'rva barak 1 litr", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9pUZ1qqJnXC0HIEIPNgx7BXIjLvKwaXSCMA&s" },
  { id: 39, name: "KO'TIR BARAK ", price: 40000, category: "Hamir Taomlar", description: "Ko'tir barak 1 litr", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb8Kji7G9t_-6xUmhRGt57N3azzBA9GY8g4w&s" },
  { id: 40, name: "KADI BARAK ", price: 25000, category: "Hamir Taomlar", description: "Kadi barak 1 litr", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqUqZi8i3wmocFROknRIG-Jfk_tfT2N4ZE8w&s" },
  { id: 41, name: "GO'K BARAK ", price: 25000, category: "Hamir Taomlar", description: "Go'k barak 1 litr", image: "https://i.ytimg.com/vi/L4O3mzkV2Fc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCIVt0kHyeRaOSoKgxmLS9ojjo6Gw" },
  { id: 42, name: "KARTOSHKA BARAK ", price: 25000, category: "Hamir Taomlar", description: "Kartoshka barak 1 litr", image: "https://www.habalruman.com/cdn/shop/products/Screenshot_20220927_231049_com.instagram.android_edit_555020911462180.jpg?v=1664305924" },
  { id: 43, name: "HON BARAK ", price: 40000, category: "Hamir Taomlar", description: "Hon barak 1 litr", image: "https://img.apmcdn.org/7c4106042e3d7f632206400897faa58897fc18e1/uncropped/7c2aa5-splendid-table-barak-boiled-dumpling-c-erika-romero.jpg" },
  { id: 44, name: "HON MANTI ", price: 35000, category: "Hamir Taomlar", description: "Hon manti 1 litr", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtzJKOsmo_J42rENGywiFnrNvKvaDcbRJWoA&s" },
  { id: 45, name: "KADI MANTI ", price: 25000, category: "Hamir Taomlar", description: "Kadi manti 1 litr", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtsUYsoEYQ8Zy91GFppTe4WaaP3wHXZXpyvg&s" },
  { id: 46, name: "BARAK ASSORTI ", price: 100000, category: "Hamir Taomlar", description: "Barak assortimenti 1 litr", image: "https://instalacarte.com/media/cache/mobile_image/product/1841/18187/b81cdddec9628335e31084ca7a1878e3.jpg" },
  { id: 47, name: "MIKS BARAK ASSORTI ", price: 180000, category: "Hamir Taomlar", description: "Miks barak assortimenti 1 litr", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhMQJzZHipFWR25P7T-9OAb3zoE2IXN1XNtw&s" },
  { id: 48, name: "SHIVIT OSHI ", price: 35000, category: "Hamir Taomlar", description: "Shivit oshi 1 litr", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzy8mAiVlJquhpP1rJ1ldYOJuo-zBvwYPCVw&s" },

  // BALIQ TAOMLAR
  { id: 49, name: "QOVURILGAN SAZAN ", price: 30000, category: "Baliq Taomlar", description: "Qovurilgan sazan baliq 300 gramm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt9AmvxRTgUEfswlZMKgsczFhE2NR4bXmbjQ&s" },
  { id: 50, name: "MANGAL SAZAN ", price: 45000, category: "Baliq Taomlar", description: "Mangalda sazan baliq 300 gramm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmWMvx9Qa9nCKZydB6rfsbJ9KmTVS_lk9lFw&s" },
  { id: 51, name: "QOVURILGAN SUDAK ", price: 40000, category: "Baliq Taomlar", description: "Qovurilgan sudak baliq 300 gramm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJVzdL27_jxCbP8_j5hslnbnlg7a-oF-_A-Q&s" },
  { id: 52, name: "MANGAL SUDAK ", price: 55000, category: "Baliq Taomlar", description: "Mangalda sudak baliq 300 gramm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3RL7GvX1-Y1lXcZOUtBF5VD6s_WadRTAbew&s" },
  { id: 53, name: "QOVURILGAN PESTRIJ ", price: 25000, category: "Baliq Taomlar", description: "Qovurilgan pestriy baliq 300 gramm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWU5yPAvLFUIA7epRiKUF1EMgAKJEzy3XkDA&s" },
  { id: 54, name: "MANGAL PESTRIJ ", price: 40000, category: "Baliq Taomlar", description: "Mangalda pestriy baliq 300 gramm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnqqYsxzX3SJiX4YV1Dgi8swJDjwsLoHa1ew&s" },
  { id: 55, name: "QOVURILGAN LAQQA ", price: 45000, category: "Baliq Taomlar", description: "Qovurilgan laqqa baliq 300 gramm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxu-4GQqtR2j8KatVATl3SH-3r2WAqgS1Qsw&s" },
  { id: 56, name: "MANGAL LAQQA ", price: 60000, category: "Baliq Taomlar", description: "Mangalda laqqa baliq 300 gramm", image: "https://static.vecteezy.com/system/resources/thumbnails/022/331/620/small_2x/the-grilled-bbq-on-the-grill-free-photo.jpg" },

  // SHASHLIK
  { id: 57, name: "ASSORTI ", price: 360000, category: "Shashlik", description: "Shashlik assortimenti 1 litr", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnrBCYxmxZ1FF71NhnsEx4QGCG_ixbZz8_gQ&s" },
  { id: 58, name: "SEMEChKA", price: 30000, category: "Shashlik", description: "Semecka shashlik 1 litr", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBDAK8d7xStcJMp1cR0RAWMYhhmWPZOTqX_g&s" },
  { id: 59, name: "MOL GO'SHTIDAN STEYK ", price: 130000, category: "Shashlik", description: "Mol go'shtidan steyk 1 litr", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEaSi-dl1BNfAJy0YBSzoQBRWihT_BZ6Cv7Q&s" },
  { id: 60, name: "TOVUQ KANOTChALARI ", price: 22000, category: "Shashlik", description: "Tovuq qanotchalari 1 litr", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe5d_DzTuXQNNA2eM16rJrL6FgyPCSlLfJwg&s" },
  { id: 61, name: "TOVUQ YO'QChASI ", price: 25000, category: "Shashlik", description: "Tovuq yo'qchasi 1 litr", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14NcCPCke3A8Fp78UisDrJHNXG1qTyWdujw&s" },
  { id: 62, name: "KO'ZIKORIN SHASHLIK", price: 25000, category: "Shashlik", description: "Ko'zikorin shashlik 1 litr", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoIxiOFgN8mb797vF0rjAprwWOqmhdtCozTg&s" },
  { id: 63, name: "GIMJIMA SHASHLIK ", price: 9000, category: "Shashlik", description: "Gimjima shashlik 1 litr", image: "https://images.squarespace-cdn.com/content/v1/63bd68c0216f6912b6e9a038/1674284029917-V7X3I1ECBA282IP8K8BF/photo_2023-01-19_17-04-18.jpg" },
  { id: 64, name: "GIJDUVON SHASHLIK ", price: 18000, category: "Shashlik", description: "Gijduvon shashlik 1 litr", image: "https://images.squarespace-cdn.com/content/v1/63bd68c0216f6912b6e9a038/1674284029917-V7X3I1ECBA282IP8K8BF/photo_2023-01-19_17-04-18.jpg" },
  { id: 65, name: "MOL GO'SHTI KUSKOVOY ", price: 25000, category: "Shashlik", description: "Mol go'shti kuskovoy 1 litr", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Po2sUhEYkiq9gxT-TL-ekJ8hzFsZhSXWoQ&s" },

  // SHURVALAR
  { id: 66, name: "MASTAVA ", price: 30000, category: "Shurvalar", description: "Mastava shurva 1 litr", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvyY-Q9XO6WjoRg1ZPeBQ4LZ7yPEz3796pA&s" },
  { id: 67, name: "KO'ZA SHO'RVA ", price: 35000, category: "Shurvalar", description: "Ko'za sho'rva 1 litr", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm7yJCmp_XYX2UNMX1cJy_Mz33PtPvGptMZw&s" },
  { id: 68, name: "KAYNATMA SHO'RVA ", price: 30000, category: "Shurvalar", description: "Kaynatma sho'rva 1 litr", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w-ibm6654mCELKn3wuYtCP4a3OjuxYGa9w&s" },
  { id: 69, name: "UNOSHI ", price: 30000, category: "Shurvalar", description: "Unoshi shurva 1 litr", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQQ3M9jB-RZkdhDVMmF-ZcIpXxa0GoL_-rjw&s" },
  { id: 70, name: "KARAM SHO'RVA ", price: 30000, category: "Shurvalar", description: "Karam sho'rva 1 litr", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx47CddtiRYJyCr_cr2ab3UQGMofDkViMOlA&s" },
  { id: 71, name: "TIFTEL SHO'RVA ", price: 30000, category: "Shurvalar", description: "Tiftel sho'rva 1 litr", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKcqnyZCa-ma70F_C9AZRDz2dmqhW7JvTcmQ&s" },
  { id: 72, name: "OSMA SHO'RVA ", price: 35000, category: "Shurvalar", description: "Osma sho'rva 1 litr", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxEfm6jEUacoBiTkeE6N3weifM3-xTkGwdig&s" },
  { id: 73, name: "HASH ", price: 35000, category: "Shurvalar", description: "Hash shurva 1 litr", image: "https://media.istockphoto.com/id/1315051221/photo/homemade-healthy-sweet-potato-hash.jpg?s=612x612&w=0&k=20&c=rPMivOKcvnvPiW6zHhGc75S8FiXnQBZ89Uznoy4e028=" },

  // SALQIN GAZAK
  { id: 74, name: "IJJON ", price: 18000, category: "Salqin Gazak", description: "Ijjon gazak 1 gramm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSGA0H1EDIlcn6RW2SkkE81_AVv6OVV_R97A&s" },
  { id: 75, name: "GO'ShTLI ASSORTI ", price: 150000, category: "Salqin Gazak", description: "Go'shtli assortiment 1 litr", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Z5aqNoXXMeB4PjEiNvMj9Eeejv8k1c11dQ&s" },
  { id: 76, name: "PISHLOK KESMALARI ", price: 130000, category: "Salqin Gazak", description: "Pishlok kesmalari 1 litr", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_UB9xZF35dX5gOaLsKeej2vzxbNBAUsSGBw&s" },

  // SHIRINLIKLAR
  { id: 77, name: "ChIZKEYK SAN SEBASTYAN", price: 30000, category: "Shirinliklar", description: "San Sebastian cheesecake", image: "https://safiabakery.uz/uploads/products/22891715177779.jpg" },
  { id: 78, name: "ChIZKEYK NYU-YORK", price: 35000, category: "Shirinliklar", description: "New York cheesecake", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgRZg8LBRqBy4pAd9F0PNUDNMERkSV9ya4A&s" },
  { id: 79, name: "ASALLI PIROG", price: 25000, category: "Shirinliklar", description: "Asalli pirog", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVK8lps6ExaGWOo8ugwy1rChYZ49JfvsZt-g&s" },
  { id: 80, name: "MILKA TORT", price: 30000, category: "Shirinliklar", description: "Milka tort", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy5sf1_OVPoCQR3hKxyIoxVHJNvmHGC3E2gQ&s" },
  { id: 81, name: "BUYURTMA TORT", price: 120000, category: "Shirinliklar", description: "Buyurtma tort", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIC77HxICRrAw761je1WKfSLck7ZIHy9xJbQ&s" },

  // GARNIR VA SOUSLAR
  { id: 82, name: "FRI ", price: 20000, category: "Garnir va Souslar", description: "Kartoshka fri", image: "https://m.media-amazon.com/images/I/41bDU8k7LjL._SS400_.jpg" },
  { id: 83, name: "MUALLIFLIK SOUSI", price: 10000, category: "Garnir va Souslar", description: "Mualliflik sousi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTIUJKwvFhz7gy95YxdANeEP3C-eqYrlfisA&s" },
  { id: 84, name: "SOUS 3 XIL ", price: 30000, category: "Garnir va Souslar", description: "3 xil sous", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEhO_lCnprlGy6sUxrw2F7H6tVkATqbI302Q&s" },
  { id: 85, name: "AYDAHO ", price: 20000, category: "Garnir va Souslar", description: "Aydaho sousi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5oECTioBbH1H6GNTlUuKnz-qiMiuc2XXPnA&s" },
  { id: 86, name: "GORCHITSA ", price: 10000, category: "Garnir va Souslar", description: "Gorchitsa sousi", image: "https://optom.app/10529-large_default/gorchitsa-tanho-150g.jpg" },
];

function Menu() {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState("All");

  const filteredFoods = filter === "All" ? foods : foods.filter(f => f.category === filter);

  return (
    <div className="container">
      <h2 style={{textAlign:"center"}}>Menu</h2>

      {/* Filter buttons */}
      <div className="filter-buttons">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Food Grid */}
      <div className="grid">
        {filteredFoods.map(food => (
          <div className="card" key={food.id}>
            <img src={food.image} alt={food.name} className="food-img" />
            <h3>{food.name}</h3>
            <p>{food.price} so'm</p>
            <button onClick={() => addToCart(food)}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
