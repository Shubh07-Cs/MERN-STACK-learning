const express=require("express");
const fsPromises=require("fs/promises");
const PORT=7042;

const app= express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the Quotes");
});

app.get( "/quotes", async (req , res)=>{
    try{
        let sayari=await fsPromises.readFile("./quotes.json", "utf-8");

        if(sayari.length===0){
            sayari="[]";
        }
        const sayariarr=JSON.parse(sayari);

        if (sayariarr.length === 0) {
            return res.status(404).json({
                status: "fail",
                message: "No quotes available",
            });
        }

        const sayariIndex=Math.floor(Math.random()*sayariarr.length);
        const randomSayari1=sayariarr[sayariIndex].quote;
        const randomSayari2=sayariarr[sayariIndex].author;

        res.status(200);
        res.json({
            //status: "success",
            Quote: randomSayari1,
            Author: randomSayari2,
        });
    }catch(err){
        console.log("error encountered",err);
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error",
        });
    }
});

//not working
app.post("/author", async (req,res)=>{
    try{
        const body= req.body;
        let sayariP= await fsPromises.readFile("./quotes.json", "utf-8");

        if(sayariP.length===0){
            sayariP="[]";
        }
        const sayariarrP=JSON.parse(sayariP);

        let newId=1;
        if(sayariarrP.length!==0){
            const lastSayari= sayariarrP[sayariarrP.length-1];
            newId=lastSayari.id;
            newId+=1;
        } 

        body.id = newId;
        // ------- ---------------------------------

        // 3. then append the new data into it
        sayariarrP.push(body);

        // 4. save the new list
        const textData = JSON.stringify(sayariarrP);
        await fsPromises.writeFile("./quotes.json", textData);

        res.status(201);
        res.json({
            status: "success",
        });
    }catch(err){
        console.log("Error in POST TASKS: ", err.message);
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error",
        });
    }
});

app.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;

        let sayari = await fsPromises.readFile("./quotes.json", "utf-8");

        if (sayari.length === 0) {
            return res.status(404).json({
                status: "fail",
                message: "No quotes available",
            });
        }

        let sayariarr = JSON.parse(sayari);
        const filteredQuotes = sayariarr.filter((quote) => quote.id != id);

        if (filteredQuotes.length === sayariarr.length) {
            return res.status(404).json({
                status: "fail",
                message: "Quote not found",
            });
        }

        await fsPromises.writeFile("./quotes.json", JSON.stringify(filteredQuotes));

        res.status(200).json({
            status: "success",
            message: `Quote with ID ${id} deleted successfully`,
        });
    } catch (err) {
        console.error("Error in DELETE QUOTE:", err.message);
        res.status(500).json({
            status: "fail",
            message: "Internal Server Error",
        });
    }
});


app.listen(PORT, ()=>{
    console.log(`The server is running\nVisit: http://localhost:${PORT}`);
});