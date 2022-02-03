import { credentials } from "@grpc/grpc-js";

import { GreeterClient, HelloRequest } from "../generated/greeter";

const greeterClient = new GreeterClient("localhost:5000", credentials.createInsecure());

greeterClient.sayHello(new HelloRequest({ name: "Jhon" }), (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(res);
});
