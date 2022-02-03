import { Server, ServerCredentials } from "@grpc/grpc-js";

import { GreeterService } from "./service/greeter";

const server = new Server();
server.bindAsync("0.0.0.0:5000", ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`start ${port}`);
    server.addService(GreeterService.definition, new GreeterService());
    server.start();

});
