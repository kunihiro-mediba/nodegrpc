import { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";

import { HelloReply, HelloRequest, UnimplementedGreeterService } from "../../generated/greeter"

export class GreeterService extends UnimplementedGreeterService {
    sayHello(call: ServerUnaryCall<HelloRequest, HelloReply>, callback: sendUnaryData<HelloReply>): void {
        const response = new HelloReply({
            message: `Hello, ${call.request.name}!`,
        });
        callback(null, response);
    }
}
