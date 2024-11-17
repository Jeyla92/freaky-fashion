const express = require('express');
const app = express();
const { insertData, fetchData } = require('./database_handler');
const cors = require('cors'); // Importera cors

app.use(express.json());
app.use(cors())

//const products = [
  //{ id: 1, slug: "wubba-tshirt",name: "Wubba T-shirt", pris: 199, märke: "Levis", beskrivning: "Denna Wubba T-shirt är perfekt för fans av Rick and Morty. Tillverkad av mjukt, bekvämt material och prydd med den ikoniska frasen 'Wubba Lubba Dub Dub', kombinerar den stil och humor. Finns i flera storlekar och passar både vardag och fritid.", imgSrc: "images/rickandmorty.jpg" },
  //{ id: 2, slug: "adams-family-tshirt", name: "The Adams Family T-shirt", pris: 199, märke: "Levis", beskrivning: "Denna The Addams Family T-shirt är ett måste för fans av den klassiska skräckkomedin. Tillverkad av mjukt bomullsmaterial och prydd med ett unikt tryck av den ikoniska Addams-familjen, är den både stilren och bekväm", imgSrc: "images/adams.jpg" },
  //{ id: 3, slug: "blue tatoo style tshirt", name: "Blue Tattoo Style T-shirt", pris: 199, märke: "Levis", beskrivning: "Denna Blue Tattoo Style T-shirt är designad för dig som uppskattar unika och konstnärliga motiv. Tillverkad av mjukt och slitstarkt bomullsmaterial, har den ett stilrent blått tatueringsinspirerat tryck som ger ett edgy och trendigt utseende.", imgSrc: "images/doit.jpg" },
  //{ id: 4, slug: "normal freaky tshirt", name: "Normal Freaky T-shirt", pris: 199, märke: "Levis", beskrivning: "Normal Freaky T-shirten kombinerar en lekfull och unik design med komfort. Tillverkad av mjukt bomullsmaterial och prydd med ett iögonfallande 'Normal Freaky' tryck, är denna t-shirt perfekt för dig som vill uttrycka din personliga stil med en twist.", imgSrc: "images/twosides.jpg" },
  //{ id: 5, slug: "gnome tshirt", name: "Gnome T-shirt", pris: 199, märke: "Levis", beskrivning: "Denna Gnome Freaky T-shirt ger ett roligt och originellt tillskott till din garderob. Tillverkad i mjuk bomull, pryds den av ett quirky 'Gnome Freaky' tryck som ger en lekfull touch till din stil. Perfekt för dig som gillar att sticka ut med ett unikt plagg.", imgSrc: "images/gnome.jpg" },
  //{ id: 6, slug: "freakin friday tshirt", name: "Freakin Friday T-shirt", pris: 199, märke: "Levis", beskrivning: "Denna Freakin Friday T-shirt är den ultimata tröjan för att kicka igång helgkänslan. Gjord av mjukt och bekvämt material, med ett energiskt 'Freakin Friday' tryck, är den perfekt för att fira slutet på veckan med stil.", imgSrc: "images/friday.jpg" },
  //{ id: 7, slug: "scary funny tshirt", name: "Scary Funny T-shirt", pris: 199, märke: "Levis", beskrivning: "Denna Scary Funny T-shirt kombinerar skräck och humor i ett lekfullt tryck som fångar blickar. Tillverkad av mjuk bomull för optimal komfort, är den perfekt för dig som vill ha en rolig och lite kuslig twist på din stil.", imgSrc: "images/eyesjpg.jpg" },
  //{ id: 8, slug: "funny tropical tshirt", name: "Funny Tropical T-shirt", pris: 199, märke: "Levis", beskrivning: "Denna Funny Tropical T-shirt sprider semesterkänsla med sitt färgstarka och humoristiska tryck. Perfekt för att känna tropiska vibbar året runt! Gjord av mjukt material och finns i flera storlekar.", imgSrc: "images/freaky.jpg" },
//];


const post_product = (req, res) => {
  console.log(req.body, ' req body');
  
  const resp = insertData(req.body.id, req.body.name, req.body.price, req.body.brand, req.body.description, req.body.img_src)
  res.send(resp);
};

const all_products = (req, res) => {
  
  const all_products = fetchData()
  res.send(all_products)
}

module.exports = { post_product, all_products }

