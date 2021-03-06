const productos =
    [
        {
            id: 1,
            nombre: "Costeletas Novillito Medianas 1 Kg",
            tipo: "CarneRoja",
            desc: "Costeletas Novillito",
            precio: 1070,
            img: '../public/images/carneRojas/CosteletasNovillitoMedianas.png',
            cantidad: 1
        },

        {
            id: 2,
            nombre: "Cuadril Especial 1 Kg",
            tipo: "CarneRoja",
            desc: "Cuadril Especial",
            precio: 1299,
            img: '../public/images/carneRojas/CuadrilEspecial.png',
            cantidad: 1
        },

        {
            id: 3,
            nombre: "Falda Especial P/Asar 1 Kg",
            tipo: "CarneRoja",
            desc: "Falda Especial",
            precio: 950,
            img: '../public/images/carneRojas/faldaEspecial.png',
            cantidad: 1
        },

        {
            id: 4,
            nombre: "Nalga Especial Novillito 1 Kg",
            tipo: "CarneRoja",
            desc: "Nalga Especial Novillito",
            precio: 1320,
            img: '../public/images/carneRojas/NalgaEspecialNovillito.png',
            cantidad: 1
        },

        {
            id: 5,
            nombre: "Cabeza De Lomo Novillito 1 Kgs",
            tipo: "CarneRoja",
            desc: "Cabeza De Lomo Novillito",
            precio: 1190,
            img: '../public/images/carneRojas/CabezaDeLomoNovillito.png',
            cantidad: 1
        },

        {
            id: 6,
            nombre: "Vacio Novillito Especial 1 kg",
            tipo: "CarneRoja",
            desc: "Vacio Novillito Especial",
            precio: 1320,
            img: '../public/images/carneRojas/VacioNovillitoEspecial.png',
            cantidad: 1
        },
        {
            id: 7,
            nombre: "Pollo En Bolsita 1 Kg",
            tipo: "CarneBlanca",
            desc: "Pollo En Bolsita",
            precio: 369,
            img: '../public/images/carneBlanca/polloEnteroBolsa.png',
            cantidad: 1
        },

        {
            id:8,
            nombre: "Pollo Pata Muslo 1 Kg",
            tipo: "CarneBlanca",
            desc: "Pollo Pata Muslo",
            precio: 329,
            img: '../public/images/carneBlanca/PataMuslo.png',
            cantidad: 1
        },

        {
            id: 9,
            nombre: "Suprema D/Pollo Cruda 1 Kg",
            tipo: "CarneBlanca",
            desc: "Suprema D/Pollo Cruda",
            precio: 930,
            img: '../public/images/carneBlanca/MilanesaDePollo.png',
            cantidad: 1
        },

        {
            id: 10,
            nombre: "Pollo Filet Pechuga 1 Kg",
            tipo: "CarneBlanca",
            desc: "Pollo Filet Pechuga",
            precio: 930,
            img: '../public/images/carneBlanca/filetPechuga.png',
            cantidad: 1
        },
        {
            id: 11,
            nombre: "Bondiola Cerdo 1 Kg",
            tipo: "CarneCerdo",
            desc: "Bondiola Cerdo",
            precio: 895,
            img: '../public/images/carneCerdo/BondiolaCerdo.png',
            cantidad: 1
        },

        {
            id: 12,
            nombre: "Pechito De Cerdo Paladini 1 Kg",
            tipo: "CarneCerdo",
            desc: "Pechito De Cerdo Paladini",
            precio: 920,
            img: '../public/images/carneCerdo/PechitoDeCerdoPaladini.png',
            cantidad: 1
        },

        {
            id: 13,
            nombre: "Matambre Cerdo Paladini 1 Kg",
            tipo: "CarneCerdo",
            desc: "Matambre Cerdo Paladini",
            precio: 1432,
            img: '../public/images/carneCerdo/MatambreCerdoPaladini.png',
            cantidad: 1
        },

        {
            id: 14,
            nombre: "Churrasquito Paladini 1 Kg",
            tipo: "CarneCerdo",
            desc: "Churrasquito Paladini",
            precio: 1039,
            img: '../public/images/carneCerdo/ChurrasquitoPaladini.png',
            cantidad: 1
        },

        {
            id: 15,
            nombre: "Costilla De Cerdo Paladini 1 Kgs",
            tipo: "CarneCerdo",
            desc: "Costilla De Cerdo Paladini",
            precio: 1190,
            img: '../public/images/carneCerdo/CostillaDeCerdoPaladini.png',
            cantidad: 1
        },

        {
            id: 16,
            nombre: "Solomillo Cerdo 1 kg",
            tipo: "CarneCerdo",
            desc: "Solomillo Cerdo",
            precio: 1320,
            img: '../public/images/carneCerdo/SolomilloCerdo.png',
            cantidad: 1
        },
        {
            id: 17,
            nombre: "Anana 1 Kg",
            tipo: "Frutas",
            desc: "Anana",
            precio: 345,
            img: '../public/images/Frutas/anana.png',
            cantidad: 1
        },

        {
            id: 18,
            nombre: "Banana Ecuador 1 Kg",
            tipo: "Frutas",
            desc: "Banana Ecuador",
            precio: 199,
            img: '../public/images/Frutas/banana.png',
            cantidad: 1
        },

        {
            id: 19,
            nombre: "Duraznos 1 Kg",
            tipo: "Frutas",
            desc: "Duraznos",
            precio: 450,
            img: '../public/images/Frutas/duraznos.png',
            cantidad: 1
        },

        {
            id: 20,
            nombre: "Manzana Roja Especial 1 Kg",
            tipo: "Frutas",
            desc: "Manzana Roja Especial",
            precio: 375,
            img: '../public/images/Frutas/manzanaR.png',
            cantidad: 1
        },

        {
            id: 21,
            nombre: "Manzana Verde 1 Kg",
            tipo: "Frutas",
            desc: "Manzana Verde",
            precio: 349,
            img: '../public/images/Frutas/manzanaV.png',
            cantidad: 1
        },

        {
            id: 22,
            nombre: "Naranja Jugo 1 Kg",
            tipo: "Frutas",
            desc: "Naranja Jugo",
            precio: 189,
            img: '../public/images/Frutas/naranja.png',
            cantidad: 1
        },
        {
            id: 23,
            nombre: "Berenjenas Negras 1 Kg",
            tipo: "Verduras",
            desc: "Berenjenas Negras",
            precio: 219,
            img: '../public/images/verduras/BerenjenasN.png',
            cantidad: 1
        },

        {
            id: 24,
            nombre: "Brocoli 1 Kg",
            tipo: "Verduras",
            desc: "Brocoli",
            precio: 345,
            img: '../public/images/verduras/brocoli.png',
            cantidad: 1
        },

        {
            id: 25,
            nombre: "Cebolla Morada 1 Kg",
            tipo: "Verduras",
            desc: "Cebolla Morada",
            precio: 199,
            img: '../public/images/verduras/cebollaM.png',
            cantidad: 1
        },

        {
            id: 26,
            nombre: "Cebolla Verdeo 1 Kg",
            tipo: "Verduras",
            desc: "Cebolla Verdeo",
            precio: 375,
            img: '../public/images/verduras/cebollaDeV.png',
            cantidad: 1
        },

        {
            id: 27,
            nombre: "Cebollas Del Sur 1 Kg",
            tipo: "Verduras",
            desc: "Cebollas Del Sur",
            precio: 79,
            img: '../public/images/verduras/cebollaSur.png',
            cantidad: 1
        },

        {
            id: 28,
            nombre: "Espinaca 1 Kg",
            tipo: "Verduras",
            desc: "Espinaca",
            precio: 179,
            img: '../public/images/verduras/espinaca.png',
            cantidad: 1
        },

        {
            id: 29,
            nombre: "Pimiento Rojo 1 Kg",
            tipo: "Verduras",
            desc: "Pimiento Rojo",
            precio: 935,
            img: '../public/images/verduras/pimentonR.png',
            cantidad: 1
        },

        {
            id: 30,
            nombre: "Pimiento Verde 1 Kg",
            tipo: "Verduras",
            desc: "Pimiento Verde",
            precio: 420,
            img: '../public/images/verduras/pimentonV.png',
            cantidad: 1
        },

        {
            id: 31,
            nombre: "Prot. Diario C/Perfume Always 40 Un",
            tipo: "proteFEM",
            desc: "Always 40 Un",
            precio: 302,
            img: '../public/images/proteFEM/proteAlwaysDiarios.png',
            cantidad:1
        },
    
        {
            id: 32,
            nombre: "Protectores Diarios S/Desodorante Doncella 20 Un",
            tipo: "proteFEM",
            desc: "Doncella 20 Un",
            precio: 100,
            img: '../public/images/proteFEM/ProtectoresDiariosDoncella.png',
            cantidad:1
        },
    
        {
            id: 33,
            nombre: "T/Fem.Adapt Plus Noche Seca S/Libre 8 Un",
            tipo: "proteFEM",
            desc: "Siempre libre 8 Un",
            precio: 278,
            img: '../public/images/proteFEM/TAdaptPlusUltrafina.png',
            cantidad:1
        },
    
        {
            id: 34,
            nombre: "T/Fem.Nocturnas Doncella 8 Un",
            tipo: "proteFEM",
            desc: "Doncella 8 Un",
            precio: 94,
            img: '../public/images/proteFEM/ToallasNocturnasDoncella.png',
            cantidad:1
        },
    
        {
            id: 35,
            nombre: "T/Fem.Ultra Invisible Nosotras 8 Un",
            tipo: "proteFEM",
            desc: "Nosotras 8 Un",
            precio: 216,
            img: '../public/images/proteFEM/TUltraInvisibleNosotras.png',
            cantidad:1
        },
    
        {
            id: 36,
            nombre: "T/Femeninas Normal C/Vit E Calipso 8 Un",
            tipo: "proteFEM",
            desc: "Calipso 8 Un",
            precio: 75,
            img: '../public/images/proteFEM/TVitECalipso.png',
            cantidad:1
        },
        {
            id: 37,
            nombre: "Desod.Aer. Aviator Patrichs 150 Ml",
            tipo: "desdorantAyC",
            desc: "Aviator Patrichs 150 Ml",
            precio: 268,
            img: '../public/images/desdorantAyC/AviatorPatrichs.png',
            cantidad:1
        },
    
        {
            id: 38,
            nombre: "Antitr.Aerosol Dark Temptation Axe 152 Ml",
            tipo: "desdorantAyC",
            desc: "Dark Temptation 152 Ml",
            precio: 247,
            img: '../public/images/desdorantAyC/DarkTemptationAxe.png',
            cantidad:1
        },
    
        {
            id: 39,
            nombre: "Desod.Aero Original Dove 250 Ml",
            tipo: "desdorantAyC",
            desc: "Original Dove 250 Ml",
            precio: 405,
            img: '../public/images/desdorantAyC/DDove.png',
            cantidad:1
        },
    
        {
            id: 40,
            nombre: "Desod.Antitr.Aerosol Men Rexona 150 Ml",
            tipo: "desdorantAyC",
            desc: "Men Rexona 150 Ml",
            precio: 238,
            img: '../public/images/desdorantAyC/MenRexona.png',
            cantidad:1
        },
    
        {
            id: 41,
            nombre: "Desod.Aero Protect Care Nivea 150 Ml",
            tipo: "desdorantAyC",
            desc: "Protect Care Nivea 150 Ml",
            precio: 380,
            img: '../public/images/desdorantAyC/ProtectCareNivea.png',
            cantidad:1
        },
    
        {
            id: 42,
            nombre: "Desod.Antitr.Stick Sport Intense Rexona 50 Gr",
            tipo: "desdorantAyC",
            desc: "Sport Intense Rexona 50 Gr",
            precio: 321,
            img: '../public/images/desdorantAyC/SportIntenseRexona.png',
            cantidad:1
        },
    
        {
            id: 43,
            nombre: "Desod.Antitr.Blue Ice Men Etiquet 60 Gr",
            tipo: "desdorantAyC",
            desc: "Blue Ice Men Etiquet 60 Gr",
            precio: 198,
            img: '../public/images/desdorantAyC/BlueIceMenEtiquet.png',
            cantidad:1
        },

        {
            id: 44,
            nombre: "Desod.Antitr.Crema Dove 48 Gr",
            tipo: "desdorantAyC",
            desc: "Crema Dove 48 Gr",
            precio: 730,
            img: '../public/images/desdorantAyC/CremaDove.png',
            cantidad:1
        },
    
        {
            id: 45,
            nombre: "After Shave Locion Men Revolution Algabo 120 Ml",
            tipo: "ProteAfeitarse",
            desc: "Algabo Revolution Men 120 Ml",
            precio: 320,
            img: '../public/images/ProteAfeitarse/AfterShaveLocionMen.png',
            cantidad:1
        },

        {
            id: 46,
            nombre: "Espuma D/Afeitar Mentol Gillette Foamy 175 Gr",
            tipo: "ProteAfeitarse",
            desc: "Espuma Gillete foamy mentol 175 Gr",
            precio: 287,
            img: '../public/images/ProteAfeitarse/EspumaMentolGilletteFoamy.png',
            cantidad:1
        },
    
        {
            id: 47,
            nombre: "Maq.Afeitar + Cartuchos Flex 3 Bic 1 Un",
            tipo: "ProteAfeitarse",
            desc: "Maquina de Afeitar bic + 3 cartuchos",
            precio: 760,
            img: '../public/images/ProteAfeitarse/Maq.AfeitarCartuchosFlexBic.png',
            cantidad:1
        },
    
        {
            id: 48,
            nombre: "DMaq.Afeitar + Cartucho Comfort Venus 1 Un",
            tipo: "ProteAfeitarse",
            desc: "Maquina de afeitar Venus + 1 cartuchos",
            precio: 703,
            img: '../public/images/ProteAfeitarse/Maq.AfeitarCartuchoVenus.png',
            cantidad:1
        },
    
        {
            id: 49,
            nombre: "Maq.Afeitar Sensitive Shaver Bic 5 Un",
            tipo: "ProteAfeitarse",
            desc: "Bic Shaver Sensitive 5 unidades",
            precio: 317,
            img: '../public/images/ProteAfeitarse/SensitiveShaverBic.png',
            cantidad:1
        },
    
        {
            id: 50,
            nombre: "Maquina De Afeitar Fusion5 Gillette 1 Un",
            tipo: "ProteAfeitarse",
            desc: "Gillette Fusion 5 Maq. Afeitar",
            precio: 823,
            img: '../public/images/ProteAfeitarse/FusionGillette.png',
            cantidad:1
        },
    
        {
            id: 51,
            nombre: "Cartucho Sensitive Gillette Mach3 3 Un",
            tipo: "ProteAfeitarse",
            desc: "Gillete Sensitive Cartucho x3 UN",
            precio: 747,
            img: '../public/images/ProteAfeitarse/SensitiveGilletteMach3.png',
            cantidad:1
        }
    
    ]
export { productos };