const Database = require("./db");
const saveOrphanage = require("./saveOrphanages");

Database.then(async (db) => {
  // inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-24.659503",
    lng: "-46.661801",
    name: "Lar Doce Lar",
    about:
      "Presta assistência a crianças de 10 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "9 99994545",
    images: [
      "https://images.unsplash.com/photo-1490424924273-85d78436b929?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1490425061505-dc206f00adbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      "https://images.unsplash.com/photo-1490932730175-2fa8e52cf7c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1543689604-1c734a629f04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80",
      "https://images.unsplash.com/photo-1497375638960-ca368c7231e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=725&q=80",
      "https://images.unsplash.com/photo-1473649085228-583485e6e4d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e pacência para dar. ",
    opening_hours: "Horário de visitas Das 9h até 17h",
    open_on_weekends: "0",
  });

  // consultar dados da tabela
   const selectedOrphanages = await db.all("SELECT * FROM orphanages");
   console.log(selectedOrphanages);

  // consultar dados da tabela e retornar apenas um registro
  // const orphanage = await db.all(
  //   'SELECT * FROM orphanages WHERE id = "2"'
  // );
  // console.log(orphanage);

  // console.log(await db.run("DELETE FROM orphanages WHERE id = '1'"));
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '2'"));
});
