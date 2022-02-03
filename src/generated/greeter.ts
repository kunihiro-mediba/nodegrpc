/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.15.6
 * source: greeter.proto
 * git: https://github.com/thesayyn/protoc-gen-ts
 *  */
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export class HelloRequest extends pb_1.Message {
    constructor(data?: any[] | {
        name?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("name" in data && data.name != undefined) {
                this.name = data.name;
            }
        }
    }
    get name() {
        return pb_1.Message.getField(this, 1) as string;
    }
    set name(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data: {
        name?: string;
    }) {
        const message = new HelloRequest({});
        if (data.name != null) {
            message.name = data.name;
        }
        return message;
    }
    toObject() {
        const data: {
            name?: string;
        } = {};
        if (this.name != null) {
            data.name = this.name;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.name === "string" && this.name.length)
            writer.writeString(1, this.name);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HelloRequest {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HelloRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.name = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): HelloRequest {
        return HelloRequest.deserialize(bytes);
    }
}
export class HelloReply extends pb_1.Message {
    constructor(data?: any[] | {
        message?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("message" in data && data.message != undefined) {
                this.message = data.message;
            }
        }
    }
    get message() {
        return pb_1.Message.getField(this, 1) as string;
    }
    set message(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data: {
        message?: string;
    }) {
        const message = new HelloReply({});
        if (data.message != null) {
            message.message = data.message;
        }
        return message;
    }
    toObject() {
        const data: {
            message?: string;
        } = {};
        if (this.message != null) {
            data.message = this.message;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.message === "string" && this.message.length)
            writer.writeString(1, this.message);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HelloReply {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HelloReply();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.message = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): HelloReply {
        return HelloReply.deserialize(bytes);
    }
}
interface GrpcUnaryServiceInterface<P, R> {
    (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
}
interface GrpcStreamServiceInterface<P, R> {
    (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
    (message: P, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
}
interface GrpWritableServiceInterface<P, R> {
    (metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    (metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    (options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    (callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
}
interface GrpcChunkServiceInterface<P, R> {
    (metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
    (options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
}
interface GrpcPromiseServiceInterface<P, R> {
    (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): Promise<R>;
    (message: P, options?: grpc_1.CallOptions): Promise<R>;
}
export abstract class UnimplementedGreeterService {
    static definition = {
        sayHello: {
            path: "/Greeter/sayHello",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message: HelloRequest) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => HelloRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: HelloReply) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => HelloReply.deserialize(new Uint8Array(bytes))
        }
    };
    [method: string]: grpc_1.UntypedHandleCall;
    abstract sayHello(call: grpc_1.ServerUnaryCall<HelloRequest, HelloReply>, callback: grpc_1.sendUnaryData<HelloReply>): void;
}
export class GreeterClient extends grpc_1.makeGenericClientConstructor(UnimplementedGreeterService.definition, "Greeter", {}) {
    constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
        super(address, credentials, options)
    }
    sayHello: GrpcUnaryServiceInterface<HelloRequest, HelloReply> = (message: HelloRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<HelloReply>, options?: grpc_1.CallOptions | grpc_1.requestCallback<HelloReply>, callback?: grpc_1.requestCallback<HelloReply>): grpc_1.ClientUnaryCall => {
        return super.sayHello(message, metadata, options, callback);
    };
}
