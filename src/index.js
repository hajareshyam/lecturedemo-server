let DemoCallabck1 = require("./day13/demo.callback1");
let DemoFileIO = require("./day13/demo.fileio");

class MainProgram {

    static main(){
        try{
            console.log("Lets learn callback...!!!");

            let ref = new DemoCallabck1();

            //let res1 = ref.callNetwork();
            //console.log(res1);

            ref.callNetworkUsingCallback();

            ref.callNetworkUsingCallback(function(p1, p2){
                console.log("I will be called; ");
            });


            // FILE IO EXAMPLE
            let ref1 = new DemoFileIO();
            let fileOutput = ref1.demoReadFileSync();
            console.log(fileOutput);


            ref1.demoReadFileASync(function(err, data){
                console.log(data);
            });

        }catch(error){
            console.log(error);
        }
    }
    
}


MainProgram.main();